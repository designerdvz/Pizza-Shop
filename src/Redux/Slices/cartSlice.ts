
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {getCartFromLs, getSumFromLs, getTotalCountFromLs} from "../../utils/getCartFromLocalStorage";

export type currentType = {
    type: number,
    id: number;
}

export type currentSize = {
    size: number,
    id: number;
}

type TypeCartItem = {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number [];
    types: number [];
    count: number,
    currentTypePizza: number;
    currentSizePizza: number;
}

interface CartSliceState { //обычно, когда типизируют State его делают interface, а не type
    items: TypeCartItem[],
    sum: number;
    Totalcount: number;
}

const initialState: CartSliceState = {
    items: getCartFromLs(),
    sum: getSumFromLs(),
    Totalcount: getTotalCountFromLs(),
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state: CartSliceState, action: PayloadAction<TypeCartItem>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
                findItem.count ++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.sum = state.items.reduce((total, obj) => {
                return total + (obj.price * obj.count)
            }, 0)
            state.Totalcount = state.items.reduce((total, obj) => {
                return total + obj.count
            }, 0)
        },
        removeItem: (state: CartSliceState, action: PayloadAction<TypeCartItem>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
            state.sum = state.sum - (action.payload.price * action.payload.count)
            state.Totalcount = state.Totalcount - action.payload.count
        },
        countPlus: (state: CartSliceState, action: PayloadAction<TypeCartItem>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
                findItem.count++
            }
            state.sum = state.sum + action.payload.price
            state.Totalcount = state.Totalcount + 1
        },
        countMinus: (state:CartSliceState, action: PayloadAction<TypeCartItem>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
                if (findItem.count === 1) {
                    state.items = state.items.filter((item) => item.id !== action.payload.id)
                } else {
                    findItem.count--
                }
            }
            state.sum = state.sum - action.payload.price
            state.Totalcount = state.Totalcount - 1
        },
        clearAll: (state: CartSliceState) => {

            state.items = []
            state.sum = 0
            state.Totalcount = 0

        },
        setActiveTypePizza: (state: CartSliceState , action: PayloadAction<currentType>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
                findItem.currentTypePizza = action.payload.type
            }
        },
        setActiveSizePizza: (state: CartSliceState, action: PayloadAction<currentSize>) => {
            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
            findItem.currentSizePizza = action.payload.size }
        }
    }
})

export const selectorCartItems = (state: RootState) => state.cartReducer.items
export const selectorCartTotalCount = (state: RootState) => state.cartReducer.Totalcount
export const selectorCartSum = (state: RootState) => state.cartReducer.sum



export const {
    addItem,
    removeItem,
    clearAll,
    countPlus,
    countMinus,
    setActiveTypePizza,
    setActiveSizePizza
} = cartSlice.actions

export default cartSlice.reducer


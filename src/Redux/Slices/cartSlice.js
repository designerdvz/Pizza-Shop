import React from "react";
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: [],
    sum: 0,
    Totalcount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItem = state.items.find( (item) => item.id === action.payload.id)
            if (findItem) {
                findItem.count ++
            }
            else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.sum = state.items.reduce((total, obj) => {
                return total + (obj.price * obj.count)}, 0)
            state.Totalcount = state.items.reduce((total, obj) => {
                return total + obj.count}, 0)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
            state.sum = state.sum - (action.payload.price * action.payload.count)
            state.Totalcount = state.Totalcount - action.payload.count
        },
        countPlus: (state, action) => {
            const findItem = state.items.find( (item) => item.id === action.payload.id)
            if (findItem) {
                findItem.count ++
            }
            state.sum = state.sum + action.payload.price
            state.Totalcount = state.Totalcount + 1
        },
        countMinus: (state, action) => {
            const findItem = state.items.find((item) => item.id === action.payload.id)
            if (findItem) {
                if (findItem.count === 1) {
                    state.items = state.items.filter((item) => item.id !== action.payload.id)
                } else
                {
                    findItem.count--
                }
            }
            state.sum = state.sum - action.payload.price
            state.Totalcount = state.Totalcount - 1
        },
        clearAll: (state) => {
            state.items = []
            state.sum = 0
            state.Totalcount = 0
    },
        setActiveTypePizza: (state, action) => {
            const findItem = state.items.find( (item) => item.id === action.payload.id)
            findItem.currentTypePizza = action.payload.type
        },
        setActiveSizePizza: (state, action) => {
            const findItem = state.items.find( (item) => item.id === action.payload.id)
            findItem.currentSizePizza = action.payload.size
        }
    }
})

export const {addItem, removeItem, clearAll,  countPlus, countMinus, setActiveTypePizza , setActiveSizePizza} = cartSlice.actions

export default cartSlice.reducer


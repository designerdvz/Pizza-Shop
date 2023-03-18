import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";

//внутри асинхронной функции мы делаем синхронность с помощью async await чтоб получить ответ только после запроса
type TypeParams = {
    order: number,
    sortBy: string,
    categoryType: number,
    search: string,
    currentPage: number
}
type TypeItems = {
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

interface PizzaSliceInterface {
    items: TypeItems [],
    status: string
}

export const fetchPizzas = createAsyncThunk( //санка, эта функция позволяет сделать асинхронный action
    'pizzas/fetchPizzasStatus', //pizzas потому что у нас name "pizza", а fetchPizzasStatus это просто название
    async (params: TypeParams) => {
        const {
            order,
            sortBy,
            categoryType,
            search,
            currentPage
        } = params
        const {data} = await axios.get<TypeItems[]>(
            `https://6325f8aa70c3fa390f924e62.mockapi.io/items?page=${currentPage}&limit=4&${categoryType}&sortBy=${sortBy}&order=${order}&${search}`)
        return data as TypeItems[]
    }
)

const initialState: PizzaSliceInterface = {
    items: [],
    status: 'pending'
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = 'loading'
            state.items = []
        });

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = 'success'
                state.items = action.payload
            });

        builder.addCase(fetchPizzas.rejected, (state, action) => {
                state.status = 'error'
                state.items = []
            })
    }
})
export const selectorPizzaData = (state: RootState) => state.pizzas

export const {addItems} = pizzasSlice.actions

export default pizzasSlice.reducer
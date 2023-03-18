import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './Slices/categorySlice'
import sortReducer from './Slices/sortSlice'
import paginationReducer from './Slices/paginationSlice'
import cartReducer from './Slices/cartSlice'
import pizzasReducer from './Slices/PizzasSlice'
import searchReducer from './Slices/searchSlice'
export const store = configureStore( {
    reducer: {
        categoryReducer: categoryReducer,
        sortReducer: sortReducer,
        pagination: paginationReducer,
        cartReducer: cartReducer,
        pizzas: pizzasReducer,
        search: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState> //создаем тип глобального стейта,
// в котором хранятся все типизации детей стейта
//store.getState - фукция, где хранится весь стейт
//typeof store.getState - функция, результат которой это тип стейта
//ReturnType - возратить только ответ функции в скобках

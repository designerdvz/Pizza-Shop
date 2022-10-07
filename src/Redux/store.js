import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './Slices/categorySlice'
import sortReducer from './Slices/sortSlice'
import paginationReducer from './Slices/paginationSlice'
import cartReducer from './Slices/cartSlice'
export const store = configureStore( {
    reducer: {
        categoryReducer: categoryReducer,
        sortReducer: sortReducer,
        pagination: paginationReducer,
        cartReducer: cartReducer
    }
})
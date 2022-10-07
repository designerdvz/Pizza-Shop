import {createSlice} from "@reduxjs/toolkit";
import React from "react";


const initialState = {
    categories: ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'],
    category: 0
}

export const categorySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCategory: (state, action) => { state.category = action.payload},//это reducer

    }

})

export const { setCategory} = categorySlice.actions //это не action, Это AC
export default categorySlice.reducer
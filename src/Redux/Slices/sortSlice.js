import {createSlice} from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    sort: {
        name: 'популярности',
        sortProperty: 'rating'
    },
    sortList: [
        {name: 'популярности', sortProperty: 'rating'},
        {name: 'самой редкой', sortProperty: '-rating'},
        {name: 'высокой цене', sortProperty: 'price'},
        {name: 'низкой цене', sortProperty: '-price'},
        {name: 'алфавиту', sortProperty: '-title'},
        {name: 'обратному алфавиту', sortProperty: 'title'},
    ]
}
export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setSort: (state, action) => {state.sort = action.payload} //payload Нужен чтоб передавать что-то в action
    } // тут всегда, если что-то нужно в качестве параметра передавать будет (state, action)

})
export const { setSort} = sortSlice.actions // Это AC

export default sortSlice.reducer
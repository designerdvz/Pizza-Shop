import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import React from "react";
import {RootState} from "../store";


type TypeSortList = {
    name: string;
    sortProperty: string;
}

interface SortState {
    sort: TypeSortList;
    sortList: TypeSortList[];
}

const initialState: SortState = {
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
        setSort: (state: SortState, action:PayloadAction<TypeSortList>) => {state.sort = action.payload}
    }

})

export const selectorSort = (state: RootState) => state.sortReducer.sort
export const selectorSortList = (state: RootState) => state.sortReducer.sortList
export const { setSort} = sortSlice.actions // Это AC

export default sortSlice.reducer
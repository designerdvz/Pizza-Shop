import {createSlice} from "@reduxjs/toolkit";
import React from "react";

const initialState = {
    pageCount: 3,
    currentPage: 1
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {state.currentPage = action.payload}
    }
})

export const {setCurrentPage} = paginationSlice.actions

export default paginationSlice.reducer
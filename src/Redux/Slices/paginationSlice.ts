import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


interface typePaginationState {
    pageCount: number;
    currentPage: number;
}

const initialState: typePaginationState = {
    pageCount: 3,
    currentPage: 1
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state:typePaginationState, action: PayloadAction<number>) => {state.currentPage = action.payload}
    }
})
export const selectorCurrentPage = (state: RootState) => state.pagination.currentPage
export const {setCurrentPage} = paginationSlice.actions
export const selectorPageCount = (state: RootState) => state.pagination.pageCount
export default paginationSlice.reducer

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface TypeSearch {
    searchValue: string;
}

const initialState: TypeSearch = {
    searchValue: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state:TypeSearch, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },//это reducer
    }
})
export const selectorSearchValue = (state: RootState) => state.search.searchValue

export const { setSearch} = searchSlice.actions //это не action, Это AC

export default searchSlice.reducer
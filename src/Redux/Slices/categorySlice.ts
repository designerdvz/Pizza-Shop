import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


interface TypeCategorySliceState {
    categories: string[];
    category: number;
}

const initialState: TypeCategorySliceState = {
    categories: ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'],
    category: 0
}

export const categorySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCategory: (state: TypeCategorySliceState, action:PayloadAction<number>) => { state.category = action.payload},//это reducer
    }

})

export const selectorCategories = (state: RootState) => state.categoryReducer.categories
export const selectorCategory = (state: RootState) => state.categoryReducer.category

export const { setCategory} = categorySlice.actions //это не action, Это AC
export default categorySlice.reducer
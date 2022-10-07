import logo from './logo.svg';
import './App.css';
import React from "react";
import './scss/app.scss'
import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, saySum} from './Redux/Slices/categorySlice'
import {store} from "./Redux/store";
export const SearchContext = React.createContext('')

export function Counter() {
const [searchValue, setSearchValue] = React.useState('')

    return (

        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{searchValue,setSearchValue}}>
                <Header />
                <div className="content">
                        <Routes>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/" element={<Home />}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                </div>
                </SearchContext.Provider>
            </div>
        </div>
    )
}

export default Counter;

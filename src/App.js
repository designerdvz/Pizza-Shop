import logo from './logo.svg';
import './App.css';
import React from "react";
import './scss/app.scss'
import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";


function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                        <Routes>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;

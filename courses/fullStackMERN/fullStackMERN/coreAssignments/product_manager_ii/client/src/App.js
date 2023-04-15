import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main/>} path="/" />
                    <Route element={<ProductDetails/>} path="/api/oneProduct/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

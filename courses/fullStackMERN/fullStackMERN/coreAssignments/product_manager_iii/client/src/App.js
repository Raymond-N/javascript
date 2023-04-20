import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/viewProduct/:id" element={<ProductDetails/>} />
                    <Route path="/editProduct/:id" element={<EditProduct/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

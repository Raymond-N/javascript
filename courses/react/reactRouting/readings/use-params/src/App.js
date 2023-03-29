import React from "react";
import { useParams } from "react-router-dom";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import './App.css';

const Location = (props) => {
    const {city} = useParams();

    return (
        <h1>Welcome to {city}!</h1>
    );
}

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <p>
                <Link to="/location/seattle">Seattle</Link>
                | 
                <Link to="/location/chicago">Chicago</Link>
                | 
                <Link to="/location/burbank">Burbank</Link>
            </p>
            <Routes>
                <Route path="/location/:city" element={<Location />}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;

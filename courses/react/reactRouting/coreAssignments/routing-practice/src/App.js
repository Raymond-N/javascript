import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';
import WordColor from './components/WordColor';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/:word" element={<Word/>}/>
                    <Route path="/:word/:color1/:color2" element={<WordColor/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

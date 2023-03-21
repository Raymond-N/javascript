import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import Box from './components/Box';


function App() {

    const [boxArray, setBoxArray] = useState([]);

    return (
        <div className="App">
            <BoxForm boxArray={boxArray} setBoxArray={setBoxArray}/>
            <Box boxArray={boxArray}/>
        </div>
    );
}

export default App;

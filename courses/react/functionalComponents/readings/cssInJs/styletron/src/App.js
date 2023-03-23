import React from 'react';
import { Provider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import SomeOtherComponent from './components/SomeOtherComponent';
import StyledBox from './components/StyledBox';

const engine = new Styletron();

function App() {
    return (
        <Provider value={engine}>
            <SomeOtherComponent/>
        </Provider>
    );
}

export default App;

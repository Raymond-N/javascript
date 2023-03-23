import './App.css';
import Advertisement from './components/Advertisement';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContent from './components/SubContent';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="Nav-Main">
                <Navigation/>
                <Main>
                    <div className="Sub-Contents">
                        <SubContent/>
                        <SubContent/>
                        <SubContent/>
                    </div>
                    <Advertisement/>
                </Main>
            </div>
        </div>
    );
}

export default App;

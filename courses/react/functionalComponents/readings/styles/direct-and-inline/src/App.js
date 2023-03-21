import './App.css';
import MyButton from './components/MyButtonComponent';
import MyNewComponent from './components/MyNewComponent';
import './styles.css'


function App() {
    return (
        <div className="App">
            <MyNewComponent header={ "Header Prop" }>
                <h1>These are children</h1>
                <p>This is a child</p>
                <p>This is another child</p>
                <p>This is even another child</p>
            </MyNewComponent>
            <MyButton>
                <h1>These are children</h1>
                <p>This is a child</p>
                <p>This is another child</p>
                <p>This is even another child</p>
            </MyButton>
        </div>
    );
}

export default App;

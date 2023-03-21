import MyButton from "./components/MyButtonComponent";

function App() {
    return (
        <div className="App">
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

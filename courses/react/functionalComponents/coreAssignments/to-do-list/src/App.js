import { useState } from 'react';
import DisplayToDo from './components/DisplayToDo';
import ToDoForm from './components/ToDoForm'

function App() {
    const [toDoList, setToDoList] = useState([])
    return (
        <div className="App">
            <ToDoForm toDoList={toDoList} setToDoList={setToDoList}/>
            <DisplayToDo toDoList={toDoList} setToDoList={setToDoList}/>
        </div>
    );
}

export default App;

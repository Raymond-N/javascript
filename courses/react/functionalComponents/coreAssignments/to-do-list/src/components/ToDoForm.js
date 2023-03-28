import React, { useState } from 'react';

const ToDoForm = (props) => {

    const {toDoList, setToDoList} = props
    const [toDo, setToDo] = useState({
        toDo: '',
        completedToDo: false
    })

    const changeHandler = (e) => { 
        setToDo({...toDo, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setToDoList([...toDoList, toDo])
        setToDo({
            toDo: '',
            completedToDo: false
        })
    }

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" name="toDo" className="mb-3 form-control" onChange={changeHandler} value={toDo.toDo} placeholder="Enter something to do..."/>
                </div>
                <div>
                    <button className="btn" style={{backgroundColor: "#0019F8", color: "white"}}>Add</button>
                </div>
            </form>
        </div>
    )
}
export default ToDoForm;
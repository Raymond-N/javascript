import React, {useState} from "react";

const DisplayToDo = (props) => {

    const {toDoList, setToDoList} = props

    const toggleToDo = (toDo) => {
        const updatedToDoList = toDoList.map((toDoTask) => {
            if (toDoTask === toDo) {
                toDoTask.completedToDo = !toDoTask.completedToDo
            }
            return toDoTask
        })
        setToDoList(updatedToDoList);
    }

    const deleteHandler = (toDo) => {
        const updatedToDoList = toDoList.filter((toDoTask) => toDoTask !== toDo)
        setToDoList(updatedToDoList)
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            {
                toDoList.map((toDo, idx) => (
                    <div key={idx} className="card w-50 mb-2">
                        <div className="card-body d-flex justify-content-between">
                            <div className="d-flex justify-content-evenly w-50">
                                {
                                    toDo.completedToDo?
                                    <p className="text-decoration-line-through">{toDo.toDo}</p>:
                                    <p>{toDo.toDo}</p>
                                }
                                <input type="checkbox" name="completedToDo" checked={toDo.completedToDo} onClick={() => toggleToDo(toDo)}/>
                            </div>
                            <button className="btn" style={{backgroundColor: "black", color: "white"}} onClick={() => deleteHandler(toDo)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default DisplayToDo;
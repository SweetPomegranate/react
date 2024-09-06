import { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() != ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index){

        const updatedTask = tasks.filter((_, i) => i != index);
        setTasks(updatedTask);

    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index - 1]] =
            [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index + 1]] =
            [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }


    return(
        <div className="to-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange} />

                <button
                    className = "add-button"
                        onClick = {addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((tasks, index) => 
                    <li key = {index}>
                        <span className = "text">{tasks}</span>
                        <button
                            className= "delete-button"
                            onClick = {() => deleteTask(index)}>
                            delete
                        </button>
                        <button
                            className= "up-button"
                            onClick = {() => moveTaskUp(index)}>
                            up
                        </button>
                        <button
                            className= "down-button"
                            onClick = {() => moveTaskDown(index)}>
                            down
                        </button>
                    </li>
                )}
            </ol>

        </div>
    );
}

export default ToDoList
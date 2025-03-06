import React, {useState} from 'react'

function TodoList() {

    // const [getTasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Start Running"]); // taking value in input text
    const [getTasks, setTasks] = useState([]);
    const [getNewTask, setNewTask] = useState(""); // what i would adding, showing by this

    function handleInputChange(event){
        setNewTask(event.target.value); // Allow user give value in text box
    }
    function addTask(){
        if (getNewTask.trim() !=="") {
            setTasks(t=> [...getTasks, getNewTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = getTasks.filter((_, i) => i!==index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if (index>0) {
            const updatedTasks = [...getTasks];
            [updatedTasks[index], updatedTasks[index-1]]=[updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if (index < getTasks.length-1) {
            const updatedTasks = [...getTasks];
            [updatedTasks[index], updatedTasks[index+1]]=[updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }    
  return (
    <div className="to-do-list">
        <h1>Todo List</h1>
        <div>
            <input 
                type="text" 
                placeholder='Enter Value...' 
                value={getNewTask}
                onChange={handleInputChange}
            />
            <button 
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>
        <ol>
            {
              getTasks.map( (element, index2, array)=>
                <li key={index2} className="task-item">
                    <span className="text">{element}</span>
                    <button
                        className="delete-button"
        // why use ()=>
        //if not use than function call, not a function reference
        //function gets called immediately during render, instead of when the user clicks the button
                        onClick={
                            ()=>deleteTask(index2)
                            // this.deleteTask.bind(this, index2) // if not want use ()=>
                            }>
                        ✖
                    </button>
                    <button
                        className="move-up-button"
                        onClick={()=>moveTaskUp(index2)}>
                        👆
                    </button>
                    <button
                        className="move-down-button"
                        onClick={()=>moveTaskDown(index2)}>
                        👇
                    </button>
                </li>
        )}
        </ol>
    </div>);
}

export default TodoList
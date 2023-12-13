import { useState } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState([]); // Add task to list
    const [newTask, setNewTask] = useState(""); // Listen to input element event

    const handleChange = (event) => {
        setNewTask(event.target.value); //Value passed in the input element
    };

    const addTask = () => {
        const newTodo = [...tasks, newTask]; // ...tasks(spread operator) append new task to old todolist array
        setTasks(newTodo);
    };

  return (
    <div className='TodoList'>
        <div className='addTask'>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'></div>
        {tasks.map((task)=>{
            return <h1>{task}</h1>
        })}
    </div>
  )
}

export default TodoList
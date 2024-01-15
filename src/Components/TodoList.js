import { useState } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState([]); // Add task to list
    const [newTask, setNewTask] = useState(""); // Listen to input element event

    const handleChange = (event) => {
        setNewTask(event.target.value); //Value passed in the input element
    };

    const addTask = () => {
        // ...tasks(spread operator) append new task to old todolist array
        const task = {
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        }
        setTasks([...tasks, task]);
    };

    const deleteTask = (id) =>{
        const newTodoList = tasks.filter((task) => {
            // Alternative delete code
            // return task !== taskName;
            if(task.id === id){
                return false;
            }
            else {
                return true;
            }
        });
        setTasks(newTodoList);
    }

    const completeTask = (id) => {
        setTasks(
            tasks.map((task)=>{
                if(task.id === id){
                    return{ ...task, completed: true};
                    
                }else {
                    return task;
                }
            })
        )
    }

  return (
    <div className='TodoList'>
        <div className='addTask'>
            <input onChange={handleChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'></div>
        {tasks.map((task)=>{
            return (
                <div className='task'>
                <h3>{task.taskName}</h3>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={()=> completeTask(task.id)} className={task.completed ? 'completed' : ''}>Complete</button>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList
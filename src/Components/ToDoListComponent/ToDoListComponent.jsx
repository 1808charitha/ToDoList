
import React, { useState } from 'react';
import './ToDoListComponent.css';

const ToDoListComponent = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  
  const addTask = (event) => {
    event.preventDefault();
    if (taskName.trim() === '') return; 
    setTasks([...tasks, taskName]);
    setTaskName('');
  };

 
  const editTask = (index) => {
    setTaskName(tasks[index]);
    setEditIndex(index);
  };


  const updateTask = (event) => {
    event.preventDefault();
    if (taskName.trim() === '') return;
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = taskName;
    setTasks(updatedTasks);
    setTaskName('');
    setEditIndex(null);
  };

 
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <form onSubmit={editIndex !== null ? updateTask : addTask}>
        <label><h1>ToDo List</h1></label>
        <input
          type='text'
          placeholder='Enter a task'
          value={taskName}
          onChange={handleTaskNameChange}
        />
        {editIndex !== null ? (
          <button type='submit'>Update Task</button>
        ) : (
          <button type='submit'>Add Task</button>
        )}
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoListComponent;

import React, { useState } from "react";

function Todolist() {
  const [tasks, setTasks] = useState(["walk", "run", "eat", "take a shower"]);
  const [newTask, setNewtTask] = useState("");

  function handleInputchange(event) {
    setNewtTask(event.target.value);
  }
  function AddTask() {
    if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((elemets, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskUp(index) {
    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = 
        [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="Todo-list">
        <h1> To-do-lsit</h1>
        <div>
          <input
            type="text"
            placeholder="eneter a task"
            value={newTask}
            onChange={handleInputchange}
          />
          <button className="Add-button" onClick={AddTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                ☝
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Todolist;

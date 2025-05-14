import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
const App = () => {
  const [tasks,setTasks]=useState([]);
  const addTask=()=>
  {
    const t=document.getElementById('text');
    if(t.value.trim()=='')
    {

    }
    else
    {
    const newTasks=[...tasks,{text:t.value,completed:false}]
    setTasks(newTasks);
    t.value='';
    }
  }
  const deleteTask=(i)=>
  {
const newTasks=tasks.filter((_,j)=>j!=i)
setTasks(newTasks)
  }
useEffect(()=>
{
  const stored=localStorage.getItem('tasks')
  if(stored)
  {
    setTasks(JSON.parse(stored));
  }
},[]);
useEffect(()=>
{
  localStorage.setItem('tasks',JSON.stringify(tasks));
},[tasks])
  return (
    <div className="container-fluid d-flex justify-content-center taskc">
    <div className='card'>
      <h2 className='card-header' style={{textAlign:'center'}}>React Todo List</h2>
      <div className="card-body d-flex flex-column justify-content-center">
      <input type="text" id='text' placeholder='Enter Task' className='form-control'/><br />
      <button onClick={addTask} className='btn btn-primary'>Add Task</button>
      <ul className='mt-5'>
        {
        tasks.length===0?(<li className='nav-item'>No Tasks</li>):
        tasks.map((task,index)=>(
          <div key={index} className='Task'>{task.text}<button onClick={function(){deleteTask(index)}} className='btn btn-danger' style={{fontSize:'10px'}}>❌</button></div>
        ))
        }
      </ul>
      </div>
    </div>
    </div>
  )
}

export default App

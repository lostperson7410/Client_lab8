import React, { Component, useState, useEffect } from 'react';
import firebase from 'firebase';
import {firestore} from './index'
import Task from './Task'



function App(){
  

  const[task,setTask]= useState([
    { id: 1,name:"do homewaork"},
    {      id:2,name:"Write node js"}
  ])
  
  const[name,setName] = useState('')



  useEffect(() =>{
    retriverData()
  },[])

  const retriverData = () => {
    firestore.collection("task").onSnapshot((snapshot)=>{
      console.log(snapshot.docs)
      let mytask =snapshot.docs.map(d => {
        const {id,name} = d.data()
        console.log(id,name)
        return{id,name}
      })
      setTask(mytask)
    })
  } 

  const addTask  = () => {
    let id =(task.length === 0)?1:task[task.length-1].id + 1
    firestore.collection("task").doc(id+'').set({id,name})
  }


  const renderTask = () =>{
    if( task&&task.length)
    return(
      task.map((task,index)=>{
        return(
        <Task key={index} task={task} deleteTask={deleteTask} editTask={editTask}/>
         )
       }
      )
    )
    else
    return(<li>No Task</li>)
  }
  const editTask = (id) => {
    firestore.collection("task").doc(id + '').set({id,name})
}

const deleteTask = (id) =>{
  firestore.collection("task").doc(id + '').delete()
}

  return(
    <div>
      <h1>Todo<br></br>
      <input type="text" name="name" onChange={(e)=> setName(e.target.value)}/> 
      <button onClick={addTask}>Add</button>

        <ul style={{display:'flex',listStyle:'none'}}>{renderTask()}</ul>
      </h1>
    </div>
  );
}

export default App;
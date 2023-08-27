import React,{useEffect, useState} from 'react'
import Task from './Task'
const Home = () => {
  const initialArray=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
  const [tasks,setTask]=useState(initialArray)
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")


  const submitHandler=(e)=>{
    e.preventDefault();
    setTask([...tasks,{
      title,description
    }])
    setTitle("");
    setDescription("");
  }
    useEffect (()=>{
      localStorage.setItem("tasks",JSON.stringify(tasks));

    },[tasks])
  // }
  const deleteTask =(index)=>{
    const filteredArr=tasks.filter((val,i)=>{
      return i !== index;
    })
    // console.log(filteredArr)
    setTask(filteredArr);

  }
  return (
    <div className='container'>
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder='title' value={title} onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <textarea placeholder='Description' value={description} onChange={(e)=>{
          setDescription(e.target.value)
        }}></textarea>
        <button type="submit">ADD</button>
      </form>
      {tasks.map((item,index)=>(
        <Task 
        key={index} 
        title={item.title} 
        description={item.description} 
        deleteTask={deleteTask}
        index={index}/>
      ))}
    </div>
    
  )
}

export default Home

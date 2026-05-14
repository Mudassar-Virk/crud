import { useState } from "react"

import './Components/App.css'

function App() {

const [task, settask] = useState([]);
const [Input, SetInput]= useState("")

const handletask = ()=>{

if(Input.trim() !==""){

  settask([...task,Input])
  SetInput("")
 
}

}

const handleupdate =(item)=>{

  const updatedtasks = prompt("Enter new task" , task[item])

  if(updatedtasks){

    const uptasks = task.map((tkr , i)=> i === item? updatedtasks : tkr)
    settask(uptasks)
  }

}
const handledelete =(item)=>{

const updatetask = task.filter((_ , i)=>{ i!== item})
settask(updatetask)
  
}


  return (
    <>
    <div>
      <h1>CRUD App using React</h1>
      <input type="text"  placeholder="Enter tasks here" 
      value={Input} onChange={(e)=>{SetInput(e.target.value)}}></input>

      <button onClick={handletask}>Add Task</button>

      <ul>
{
task.map((tk,item)=>(
<>
<li key={item}>
  {tk}
  <button onClick={()=>handledelete(item)}>Delete</button>
  <button onClick={()=>handleupdate(item)}>Update</button>
</li>

</>

))

}


      </ul>

      </div>
    </>
  )
}

export default App

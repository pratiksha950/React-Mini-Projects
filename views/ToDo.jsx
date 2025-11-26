import React, { useState } from 'react'
import "./ToDo.css"
import { v4 as uuidv4 } from 'uuid';

function ToDo() {
    let [toDo,setToDo]=useState([{task:"Sample task",id:uuidv4(),isDone:false}]);
    let [newToDo,setNewTodo]=useState("");

    let addNewTask=()=>{
        setToDo((preToDO)=>{
            return [...preToDO,{task:newToDo,id:uuidv4(),isDone:false}];
        });
        setNewTodo("");
    };
    let updateToDoValue=(event)=>{
       setNewTodo(event.target.value);
    }
    let deleteToDo=(id)=>{
         setToDo((preToDO) => preToDO.filter((item) => item.id !== id));
       
    }
let markAllDone = () => {
  setToDo((preToDO) => {
    return preToDO.map((todo) => {
      return {
        ...todo,
        isDone:true
      };
    });
  });
};

let markAsDone=(id)=>{
  setToDo((preToDO) => {
    return preToDO.map((todo) => {

      if(todo.id===id){
      return {
        ...todo,
        isDone:true,
      }
      }else{
        return todo;
      }
    });
  });
}

  return (
    <div>ToDo
        <input placeholder='Add a task' value={newToDo} onChange={updateToDoValue}/>
        <button onClick={addNewTask}>Add Task</button>
        <br/> <br/> <br/>
        <h4>Tasks ToDo</h4>
        <ul>
            {
                toDo.map((toDo)=>(
                   <li key={toDo.id}>
                    <span style={toDo.isDone?{textDecorationLine:"line-through"}:{}}>{toDo.task}</span>
                    <button onClick={()=>markAsDone(toDo.id)}>markAsDone</button>
                     <button onClick={()=>deleteToDo(toDo.id)}>Delete</button>
                     
                    </li>
                   
              ))
            }
        </ul>
        <button onClick={markAllDone}>markAllDone</button>
    </div>
  )
}

export default ToDo
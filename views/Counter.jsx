import React, { useState } from 'react'
import "./Counter.css"

function Counter() {
    let [count,setCount]=useState(0);
    console.log("Component is render");
    function incCount(){
        setCount((currValue)=>{
        return currValue+1;
        });
        setCount((currValue)=>{
        return currValue+1;
        });
        setCount(25);
        console.log(count)
    }
  return (
    <div className='state'>
        <h2>count :{count}</h2>
        <button onClick={incCount}>Increase the count</button>
        
    </div>
  )
}

export default Counter
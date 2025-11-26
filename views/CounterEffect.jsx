import React, { useState ,useEffect} from 'react'

function CounterEffect() {
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);


    let incCountx=()=>{
        setCountx(currCount=>currCount+1);
    }

    let incCounty=()=>{
        setCounty(currCount=>currCount+1);
    }

    useEffect(function printSomething(){
        console.log("This is the sideEffect")
    },[countx ,county ])

  return (
    <div>CounterEffect
        <h3>{countx}</h3>
        <button onClick={incCountx}>+1</button>
        <h3>{county}</h3>
        <button onClick={incCounty}>+1</button>

    </div>
  )
}

export default CounterEffect
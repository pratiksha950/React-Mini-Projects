import React, { useState } from 'react'
import "./Ludo.css"
import { useEffect } from "react";



function Ludo() {
   let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
   let [arr,setArr]=useState(["no moves"]);

  let updateBlue=()=>{
    setMoves((preMoves)=>{
      return {...preMoves,blue:preMoves.blue+1};
    });
    setArr((prev) => [...prev, "Blue moved"]);
  };

     let updateYellow=()=>{
    setMoves((preMoves)=>{
      return {...preMoves,yellow:preMoves.yellow+1};
    });
    setArr((prev) => [...prev, "Yellow moved"]);
  };

  let updateGreen = () => {                 
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
    setArr((prev) => [...prev, "Green moved"]);
  };

   let updateRed = () => {
    setMoves(preMoves => {
      return { ...preMoves, red: preMoves.red + 1 };
    });
     setArr((prev) => [...prev, "Red moved"]);
  };

  useEffect(() => {
  console.log("Array updated:", arr);
}, [arr]);


  return (
    <div>
        <div className="game-bigins">
            Game Bigins
        <p>Blue moves:{moves.blue}</p>
        <button style={{backgroundColor:"blue",color:"white"}} onClick={updateBlue} >+1</button>
        <p>Yellow moves:{moves.yellow}</p>
        <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
        <p>Green moves:{moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        <p>Red moves:{moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
        </div>
    </div>
  )
}

export default Ludo
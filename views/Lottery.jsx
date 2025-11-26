import React from 'react'
import "./Lottery.css"
import {useState} from 'react'
import {genTicket,sum} from "./HelperTicket.js"
import Ticket from './Ticket.jsx'


function Lottery({n=3,winCondition}) {
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);
 

    let BuyTicket=()=>{
        setTicket(genTicket(n))
    }
  return (
    <div>
        <h1>Lottery game!!!!</h1>
            <Ticket ticket={ticket}/>
     
        <button onClick={BuyTicket}>Buy New Ticket</button>
        <h3>{isWinning&&"Congratulations.............you won!!!"}</h3>
    </div>
  )
}

export default Lottery
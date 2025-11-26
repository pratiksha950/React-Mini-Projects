import React from 'react'
import './Ticket.css'
import TicketNum from './TicketNum'

function Ticket({ticket}) {
  return (
    <div className='Ticket'>
        <p>Ticket</p>&nbsp;&nbsp;&nbsp;
       {ticket.map((num,idx)=>(
        <TicketNum num={num} key={idx}/>
      ))}

    </div>
  )
}

export default Ticket
import React from 'react'
import "./TicketNum.css"

function TicketNum({num}) {
  return (
    <div>
        <span className='TicketNum'>{num}</span>
    </div>
  )
}

export default TicketNum
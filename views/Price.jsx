import React from 'react'
import './Price.css'

function Price({oldPrices,newPrices}) {
    let style={
        color:"red",
        textDecoration:"line-through"
    };
    let style1={
        fontWeight:"bold",
        fontSize:"20px"
    };
  return (
    <div className='back'>
        <p style={style}>{oldPrices}</p>
        <p style={style1}>{newPrices}</p>
    </div>
  )
}

export default Price
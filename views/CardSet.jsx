import React from 'react'
import AmazonCard from './AmazonCard'
import './CardSet.css'

function CardSet() {
  return (
    <div className='row'>
         <AmazonCard title="pratiksha" idx={0}/>
          <AmazonCard title="samiksha" idx={1}/>
           <AmazonCard title="akanksha" idx={2}/>
           <AmazonCard title="akanksha" idx={3}/>
    </div>
  )
}

export default CardSet
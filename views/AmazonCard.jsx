import React from 'react'
import './AmazonCard.css'
import Price from './Price';

function AmazonCard({title,idx}) {
  let oldPrices=["99","89","77","100"];
  let newPrices=["77","100", "77","100"];
  let description=["lorem*3","lorem*3lorem*3","lorem*3lorem*3lorem*3","description"]
  return (
    <div className='Product'>
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrices={newPrices[idx]} newPrices={oldPrices[idx]}/>
    </div>
  );
}
export default AmazonCard
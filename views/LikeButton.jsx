import React, { useState } from 'react'
import "./LikeButton.css"

function LikeButton() {
  let [isLike,setIsLike]=useState(false);
  let [Clicked,setClicked]=useState(0);
  function toggleLike(){
      setIsLike(!isLike);
      setClicked(Clicked+1);

   }
  return (
    <div className='Like1'>
        <p className='p' onClick={toggleLike}>
          {
            isLike?(<i className="fa-regular fa-heart"></i>):(<i className="fa-solid fa-heart"></i>)
          }

       Clicked:{Clicked}
         </p>
        </div>
  )
}

export default LikeButton
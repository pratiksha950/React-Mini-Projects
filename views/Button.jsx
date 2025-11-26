import React from 'react'
import "./Button.css"

function doSomething(event){
    console.log("successfully clicked");
    // alert("successfully clicked");
    console.log(event)
}
function Button() {
  return (
    <div>
        <button onClick={doSomething}>Click me</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque cupiditate, magnam veniam animi inventore placeat, repellendus praesentium, aut facilis at pariatur laudantium! Laboriosam temporibus magnam quibusdam dolores consequuntur quas.
        explicabo deserunt odio tempora esse! Quod adipisci dolore mollitia, ea nihil doloremque           ipsam in aspernatur temporibus, possimus aperiam reiciendis!</p>
         </div>
  )
}

export default Button
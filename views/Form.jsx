import React from 'react'

function handleFormSubmit(event){
  event.preventDefault();
    console.log("Form is submitted");
}
function Form() {
  return (
    <div>
        <form>
            <input placeholder='write something'></input>
            
            <button onClick={handleFormSubmit}>submit</button>
        </form>
    </div>
  )
}

export default Form
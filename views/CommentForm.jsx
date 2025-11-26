import React, { useState } from 'react'
import "./CommentForm.css"

function CommentForm() {
    let [formData,setFormData]=useState({
      username:"",
      remark:"",
      rating:"5"
    })

let handleInputChange=(event)=>{
    setFormData((currData)=>{
      return {...currData,[event.target.name]:event.target.value}
    })
}

let handleSubmit=(event)=>{
    console.log(formData)
    event.preventDefault();
    setFormData
}

return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">UserName :</label>
            <input placeholder='username'type='text' value={formData.username} onChange={handleInputChange} id='userName' name='username'/><br/>
            <label htmlFor="remark">Remark :</label>
            <textarea value={formData.remark} placeholder='Add few remarks' onChange={handleInputChange}id='remark' name='remark'>remarks</textarea><br/>
            <label htmlFor="rating">Rating :</label>
            <input placeholder='rating' type='number' min={1} max={5} value={formData.rating} onChange={handleInputChange} id='rating' name='rating'/><br/><br/>
            <button>Add Comments</button>
        </form>
    </div>
  )
}

export default CommentForm
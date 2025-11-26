import React, { useState } from 'react'
import "./FormImp.css"

function FormImp() {
    let [formData,setFormData]=useState({
        fullName:"",
        userName:"",
        password:""
    });

    // let handleNameChange=(event)=>{
    //    setFullName(event.target.value);
    // }
    let handleInputChange=(event)=>{

        setFormData((currData)=>{
           
            return {...currData,
               [event.target.name]:event.target.value
            };
        })
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            userName:"",
            password:""
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fullName'>fullName: &nbsp;</label>
            <input placeholder='Enter your full Name' 
            type='text' 
            value={formData.fullName}
            onChange={handleInputChange}
            id='fullName'
            name='fullName'
            />

            <label htmlFor='username'>username: &nbsp;</label>
            <input placeholder='Enter your Username' 
            type='text' 
            onChange={handleInputChange}
            value={formData.userName}
            id='username'
            name='userName'
            />

            <label htmlFor='password'>password: &nbsp;</label>
            <input placeholder='Enter password' 
            type='password' 
            onChange={handleInputChange}
            value={formData.password}
            id='password'
            name='password'
            />


            
            <button className='btn' >Submit</button>
        </form>
    </div>
  )
}

export default FormImp
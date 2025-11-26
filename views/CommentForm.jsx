import React, { useState } from "react";
import "./CommentForm.css";


function CommentForm({ addNewComment }) {

  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "5"
  });

  let [isValid,setIsValid]=useState(true);

  let handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value
    }));
  };

  let handleSubmit = (event) => {
  
    if(!formData.username){
      console.log("username is null");
       event.preventDefault();
      setIsValid(false);
      return;
    }

    addNewComment(formData);
      event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: "5"
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="username">UserName :</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      {!isValid&&<p className="warning">username can not be empty</p>}

      <label htmlFor="remark">Remark :</label>
      <textarea
        name="remark"
        value={formData.remark}
        onChange={handleInputChange}
      />

      <label htmlFor="rating">Rating :</label>
      <input
        type="number"
        min={1}
        max={5}
        name="rating"
        value={formData.rating}
        onChange={handleInputChange}
      />

      <button type="submit">Add Comments</button>
    </form>
  );
}

export default CommentForm;

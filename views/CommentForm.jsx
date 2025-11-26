import React, { useState } from "react";
import "./CommentForm.css";

function CommentForm({ addNewComment }) {

  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "5"
  });

  let handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value
    }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted", formData);  // TO VERIFY

    addNewComment(formData);

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

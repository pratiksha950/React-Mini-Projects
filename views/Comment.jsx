import React, { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";

function Comment() {
  let [comments, setComments] = useState([
    {
      username: "pratiksha",
      remark: "Goood",
      rating: "5"
    }
  ]);

  let addNewComment = (newComment) => {
    setComments((currComments) => [...currComments, newComment]);
  };

  return (
    <div>
      <h1>All Comments</h1>

      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>UserName: {comment.username}</span>
          <span>Remark: {comment.remark}</span>
          <span>Rating: {comment.rating}</span>
        </div>
      ))}

      <CommentForm addNewComment={addNewComment} />
    </div>
  );
}

export default Comment;

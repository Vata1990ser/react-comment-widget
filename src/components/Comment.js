import React from "react";

const Comment = ({ comment, deleteComment }) => {
  return (
    <li>
      <div>{comment.author}</div>
      <div>{comment.dateTime.toLocaleString()}</div>
      <div>{comment.text}</div>
      <button onClick={deleteComment}>X</button>
    </li>
  );
};

export default Comment;

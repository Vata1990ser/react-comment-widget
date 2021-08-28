import React from "react";
import Comment from "./Comment";

const Widget = ({ comments, deleteComment }) => {
  if (!comments || !comments.length) return <div>No comments</div>;
  return (
    <ul>
      {comments.map((comment, index) => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={() => deleteComment(index)}
        />
      ))}
    </ul>
  );
};

export default Widget;

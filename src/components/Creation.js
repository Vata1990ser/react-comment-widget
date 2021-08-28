import React from "react";

const Creation = ({
  author,
  comment,
  onCommentChange,
  onAuthorChange,
  addComment,
}) => {
  return (
    <div>
      <input
        type="input"
        placeholder="Type comment"
        value={comment}
        onChange={onCommentChange}
      />
      <input
        type="input"
        placeholder="Type Name"
        value={author}
        onChange={onAuthorChange}
      />
      <button
        type="submit"
        onClick={addComment}
        disabled={author && comment ? false : true}
      >
        Отправить
      </button>
    </div>
  );
};

export default Creation;

import React from "react";
import CommentsList from "./CommentsList";
import Creation from "./Creation";

class Widget extends React.Component {
  constructor() {
    super();
    let comments = JSON.parse(localStorage.getItem("idjetComments"));
    if (!comments) comments = [];
    this.state = {
      comments,
      comment: "",
      author: "",
    };
  }

  addComment = () => {
    let comments = [
      ...this.state.comments,
      {
        id: new Date().getTime(),
        author: this.state.author,
        text: this.state.comment,
        dateTime: new Date().toISOString(),
      },
    ];

    localStorage.setItem("idjetComments", JSON.stringify(comments));

    this.setState({
      comments,
      author: "",
      comment: "",
    });
  };

  onCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  onAuthorChange = (e) => {
    this.setState({ author: e.target.value });
  };

  deleteComment = (i) => {
    let comments = this.state.comments.filter((el, index) => index !== i);
    localStorage.setItem("idjetComments", JSON.stringify(comments));
    this.setState({
      comments,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <CommentsList
          comments={this.state.comments}
          deleteComment={this.deleteComment}
        />
        <Creation
          onAuthorChange={this.onAuthorChange}
          onCommentChange={this.onCommentChange}
          addComment={this.addComment}
          comment={this.state.comment}
          author={this.state.author}
        />
      </div>
    );
  }
}

export default Widget;

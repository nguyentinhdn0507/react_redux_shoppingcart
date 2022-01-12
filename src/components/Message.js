import React, { Component } from "react";

export class Message extends Component {
  render() {
    var {message} =this.props //được prop từ MessageContainer
    console.log(message);
    return (
      <div>
        <h3>
          <span className="badge amber darken-2">{message}</span>
        </h3>
      </div>
    );
  }
}

export default Message;

import React, { Component } from "react";
import { GrChat } from "react-icons/gr";

export default class Contact extends Component {
  handleEmailClick = () => {
    window.location.href = "mailto:erwinfabro@gmail.com";
  };

  render() {
    return (
      <div className="contact-container">
        <h2 className="contact-title">
          <GrChat /> Contact Us
        </h2>
        <p className="contact-content" onClick={this.handleEmailClick}>
          erwinfabro@gmail.com
        </p>
        <p className="contact-content">Github • Linkedin </p>
      </div>
    );
  }
}

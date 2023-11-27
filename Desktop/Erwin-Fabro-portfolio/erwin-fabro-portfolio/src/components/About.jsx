import React, { Component } from 'react';
import Avatar from '../imgs/avatar.png';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor: '#000', // Establecer el color inicial a #000
    };
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleMouseOver = () => {
    this.setState({
      randomColor: this.getRandomColor(),
    });
  };

  render() {
    const { randomColor } = this.state;

    const titleStyle = {
      color: randomColor,
    };

    return (
      <div className="about-container">
        <div className="avatar">
          <img src={Avatar} alt="Erwin Fabro Avatar" />
        </div>
        <div className="about-text">
          <h2
            className="about-title"
            style={titleStyle}
            onMouseOver={this.handleMouseOver}
          >
            Hello, I'm Erwin Fabro
          </h2>
          <p className="about-content">Web Developer.</p>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { FaReact, FaJs, FaNode, FaHtml5, FaCss3 } from 'react-icons/fa';

const techIcons = [FaReact, FaJs, FaNode, FaHtml5, FaHtml5, FaCss3];

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIcon: this.getRandomIcon(),
      currentColor: this.getRandomColor(),
    };
  }

  getRandomIcon() {
    const randomIndex = Math.floor(Math.random() * techIcons.length);
    const RandomIcon = techIcons[randomIndex];
    return <RandomIcon />;
  }

  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  handleClick = () => {
    this.setState({
      currentIcon: this.getRandomIcon(),
      currentColor: this.getRandomColor(),
    });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    const iconStyle = {
      color: this.state.currentColor,
    };

    return (
      <div className="skills-container">
        <h2 className="skills-title">
          <div className="skill-icon" style={iconStyle}>
            {this.state.currentIcon}

            Skills </div>
        </h2>
        <ul className="skills-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>React</li>
        </ul>
      </div>
    );
  }
}

export default Skills;

import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header-content'>
          <div className="logo"></div>
          <NavBar />
        </div>
      </header>
    );
  }
}

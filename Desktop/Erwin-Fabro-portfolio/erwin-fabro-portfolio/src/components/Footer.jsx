import React, { Component } from 'react';
import Bandera from "../imgs/argentina.png";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        
        <p className="footer-text">
          <img src={Bandera} alt="Argentinian Flag" className="footer-img"/> 
          Buenos Aires - Argentina. © 2023 </p>
          <p className="footer-text"></p>
      </footer>
    );
  }
}

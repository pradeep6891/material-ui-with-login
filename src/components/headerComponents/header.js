import React, { Component } from 'react';
import {
	Link
}	
 from 'react-router-dom';
import './header.css';

class Header extends Component {
  render() {
    return (
	 <header>
		<div className="logo">
          <h2>LOGO</h2>
        </div>
        <nav>
          <ul>
			<li> <Link to="/">Home Page</Link></li>
			<li>  <Link to="/services">Services</Link></li>
			<li>  <Link to="/about-us">About us</Link></li>
		  </ul>
        </nav>
      
	 </header>
      
    );
  }
}

export default Header;

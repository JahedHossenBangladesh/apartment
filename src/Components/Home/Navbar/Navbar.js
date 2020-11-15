import React from 'react';
import {
  Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-dark  static-top">
  
    <div className="container">
  
      <a className="navbar-brand newBrand" href="#">
  
          <img src="https://i.ibb.co/54XkMnQ/Logo.png"  style={{height:'47px' ,width:'150px'}}alt=""/>
  
          </a>
  
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
  
            <span className="navbar-toggler-icon"></span>
  
          </button>
  
      <div className="collapse navbar-collapse" id="navbarResponsive">
  
        <ul className="navbar-nav ml-auto">
  
          <li className="nav-item active p-3">
  
            <a className="nav-link text-dark active hoverColor" href="#">Home
  
                  <span className="sr-only">(current)</span>
  
                </a>
  

  
          </li>
  
          <li className="nav-item p-3">
  
            <a className="nav-link text-dark hoverColor" href="#">About</a>
  
          </li>
  
          <li className="nav-item p-3">
  
            <a className="nav-link text-dark hoverColor " href="#">Services</a>
  
          </li>
  
          <li className="nav-item p-3">
  
            <a className="nav-link text-dark hoverColor" href="#">Contact</a>
  
          </li>
  
          <li className="nav-item p-3">
  
            <a className="nav-link text-dark hoverColor" href="#"> <Link to='/admin'>Admin</Link>   </a>
  
          </li>
  
          <li className="nav-item p-3">
  
            <a className="nav-link text-dark hoverColor" href="#"> <button style={{border:"none",backgroundColor:"golden"}}>Sign out</button></a>
  
          </li>
  
          <li className="nav-item p-3">
  
            <a className="nav-link text-dark hoverColor" href="#"> <Link to='/login'>Login</Link>   </a>
  
          </li>
  
        
  
        </ul>
  
      </div>
  
    </div>
  
  </nav>
  
  </div>
    );
};

export default Navbar;
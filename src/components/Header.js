import logo from '../images/R_logo.png';
import '../css/Header.css'; 
import React, { useState } from "react";
import { Link } from 'react-router-dom';

/* https://blog.logrocket.com/how-create-dropdown-menu-react/ */ 

export default function Header() {
  
    const [Open, setOpen] = useState (false);
  
    const toggleMenu = () => {
      setOpen((prev) => !prev); 
    };
    
    return (
        <header className = "nav">
            <div>
            <Link to="/">
            <img src= {logo} alt= "Richelle's logo" className="logo" />
            </Link>
            </div>


            <nav className="menu">
              <button className="toggle-menu" onClick={toggleMenu}>menu</button>
            
            {Open && (
            <div className="menu-dropdown">
              <ul>
            <li className="navItem">
                <Link to="/webdev">WebDev</Link>
              </li>
              <li className="navItem">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="navItem">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="navItem">
                <Link to="/photography">Photography</Link>
              </li>
              <li className="navItem">
                <Link to="/typography">Typography</Link>
              </li>
              <li className="navItem">
                <Link to="/ux">UX</Link>
              </li>
              <li className="navItem">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="navItem">
                <Link to="/art">Art</Link>
              </li>
              <li className="navItem">
                <Link to="/Works">Works</Link>
              </li>
              <li className="navItem">
                <Link to="/about">About</Link>
              </li>
            </ul>
            </div>
            )}
          </nav>
        </header>
    );
}
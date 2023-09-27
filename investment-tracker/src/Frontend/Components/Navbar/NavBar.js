import React from 'react';
import './navbar.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import {Link} from 'react-router-dom'



const NavBar = () => {
    const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
                <p className="navbar-brand">Portfolio Watcher</p>
                <button className="navbar-toggler" 
                    onClick={toggleNavbar}
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    {expanded? <FontAwesomeIcon icon={faTimesCircle} />:<span className="navbar-toggler-icon"></span>}
                    
                </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Login/Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/learn">Learn</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/support">Help and Support<FontAwesomeIcon icon={faQuestionCircle} /></Link>
                    </li>   
                </ul>
            </div>
        </div>
        </nav> 
    </div>
  )
}

export default NavBar

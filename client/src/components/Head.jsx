import React from "react"
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaTachometerAlt, FaGamepad } from "react-icons/fa";
import logo from "../assets/websitelogo.png";

const Head = () => {
  return (
    <header>
      <div className="header-logo-wrapper">
        <Link to="/" aria-label="Go to homepage" className="logo-link">
          <img src={logo} alt="CodeVibe Logo" title="CodeVibe - Learn. Practice. Master." />
        </Link>
      </div>
      
      <div className="header-nav">
        <Link to="/Login" className="nav-link">
          <FaSignInAlt className="nav-icon" />
          <span>Login</span>
        </Link>

        <Link to="/Signup" className="nav-link">
          <FaUserPlus className="nav-icon" />
          <span>Sign Up</span>
        </Link>

        <Link to="/Dashboard" className="nav-link">
          <FaTachometerAlt className="nav-icon" />
          <span>Dashboard</span>
        </Link>
      </div>

      <h1>
        <FaGamepad style={{ marginRight: '0.5rem' }} />
        CodeVibe
        <FaGamepad style={{ marginLeft: '0.5rem' }} />
      </h1>
      <p>Learn • Practice • Master • Code | Level Up Your Programming Skills</p>
    </header>
  );
}

export default Head;

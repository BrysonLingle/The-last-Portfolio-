import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import '../App.js'
function Header() {
  return (
    <header>
      <h1 class='glow'>My Portfolio Page</h1>
      <nav className="nav-container">
        {/* <Link to="/" className="link-button">
          HOME
        </Link> */}
        <Link to="/about" className="link-button">
          ABOUT
        </Link>
        <Link to="/projects" className="link-button">
          PROJECTS
        </Link>
      </nav>
    </header>
  );
  }
export default Header;

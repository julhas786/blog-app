// src/components/Header.js
import React from "react";
import "./Header.css"; // Create this CSS file for styling
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

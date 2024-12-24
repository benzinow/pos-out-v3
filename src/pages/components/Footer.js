import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="nav-list">
        <Link className="nav-list-item" to="/">
          Home
        </Link>
        <Link className="nav-list-item" to="/certifications">
          Certifications and Awards
        </Link>
        <Link className="nav-list-item" to="/resources">
          Life Changing Resources
        </Link>
        <Link className="nav-list-item" to="/faq">
          Frequently Asked Questions
        </Link>
        <Link className="nav-list-item" to="/contact">
          Contact
        </Link>
      </div>
      <div className="icon"></div>
      <a href="https://www.benziholler.com/" target="_blank" rel="noreferrer">
        <div className="credit">
          <p>Design, copy, and code by</p>
          <p> Benzi Holler</p>
          <p> 2024 &copy;</p>
        </div>
      </a>
    </div>
  );
}

export default Footer;

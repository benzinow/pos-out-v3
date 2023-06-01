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
      <div className="credit">
        <p>Design, copy, and code by</p>
        <p> Benzi Holler</p>
        <p> 2023. &copy;</p>
      </div>
    </div>
  );
}

export default Footer;

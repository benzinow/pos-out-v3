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
        <Link className="nav-list-item" to="/water">
          Congan Water Machine
        </Link>
        <Link className="nav-list-item" to="/sauna">
          Infared Sauna
        </Link>
        <Link className="nav-list-item" to="/faq">
          FAQ
        </Link>
        <Link className="nav-list-item" to="/contact">
          Contact
        </Link>
        <Link className="nav-list-item" to="/contact">
          Book Consultation
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

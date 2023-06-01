import React from "react";
import { Link } from "react-router-dom";

function Request() {
  return (
    <div className="request-box">
      <div className="design-line"></div>
      <Link className="request-button" to="/contact">
        <p>Request an Appointment</p>
      </Link>
      <div className="design-line"></div>
    </div>
  );
}

export default Request;

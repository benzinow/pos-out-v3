import React, { useState } from "react";
import $ from "jquery";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const form = document.getElementById("myForm");
    if (form.checkValidity()) {
      // Only make the AJAX request if the form is valid
      $.ajax({
        url: "https://api.apispreadsheets.com/data/pIjUOnGPsYRxt4oc/",
        type: "post",
        data: $("#myForm").serializeArray(),
        headers: {
          accessKey: "ec25634c0b76881de31907a74f469bf7",
          secretKey: "3e3d4945e635e5ae299301de6b74aa25",
        },
        success: function () {
          setSubmitted(true);
        },
        error: function () {
          console.log("There was an error :(");
        },
      });
    } else {
      form.reportValidity(); // Display the native HTML validation error messages
    }
  };

  return (
    <div className="form-body">
      <h1 className="page-title">Get in Contact</h1>

      <div className={submitted ? "see-form hidden" : "see-form"}>
        <form id="myForm" className="form">
          <div className="form-items">
            <div>
              <label>Name</label>
              <input name="Name" type="text" required />
            </div>

            <div>
              <label>Email</label>
              <input name="Email" type="email" required />
            </div>

            <div>
              <label>Phone</label>
              <input name="Phone" type="tel" required />
            </div>
          </div>
          <div className="form-item">
            <label>I prefer to be contacted:</label>
            <div>
              <input name="byEmail" type="checkbox" />
              <label>by Email</label>
            </div>
            <div>
              <input name="byPhone" type="checkbox" />
              <label>by Phone</label>
            </div>
          </div>

          <div className="form-item">
            <label className="long-label">
              Let me know your general availability and if you have any
              preferred time slots for appointments.
            </label>
            <textarea
              name="Availability"
              id="txtArea"
              rows="5"
              cols="80"
            ></textarea>
          </div>

          <div className="form-item">
            <label className="long-label">
              Feel free to include any additional comments, questions, or
              concerns you may have.
            </label>
            <textarea
              name="Comments"
              id="txtArea"
              rows="5"
              cols="80"
            ></textarea>
          </div>
          <p>
            I will never share your contact information with third parties
            without your permission.
          </p>
        </form>

        <div className="submit-box">
          <div className="submit-design-line"></div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="submit-button"
          >
            Submit
          </button>

          <div className="submit-design-line"></div>
        </div>
      </div>
      <div className={submitted ? "thank-you" : "thank-you hidden"}>
        <p>Thank you!</p>
        <p>I have your information, and I will be in touch soon.</p>
      </div>
    </div>
  );
}

export default Contact;

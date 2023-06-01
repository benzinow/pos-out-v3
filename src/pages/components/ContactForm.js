<form id="myForm" className="form">
  <div className="form-items">
    <div>
      {" "}
      <label>Name</label>
      <input name="Name" type="text" required />
    </div>

    <div>
      {" "}
      <label>Email</label>
      <input name="Email" type="email" required />
    </div>

    <div>
      {" "}
      <label>Phone</label>
      <input name="Phone" type="tel" required />
    </div>
  </div>
  <div className="form-item">
    <label>I prefer to be contacted</label>

    <input name="byEmail" type="checkbox" />
    <label>by Email</label>

    <input name="byPhone" type="checkbox" />
    <label>by Phone</label>
  </div>
  <div className="form-item">
    <label>Im interest in</label>

    <input name="Hypnotherapy" type="checkbox" />
    <label>Hypnotherapy</label>

    <input name="Kangen" type="checkbox" />
    <label>Kangen Alkalized Water</label>
  </div>
  <div className="form-item">
    <label className="long-label">
      Let me know your general availability and if you have any preferred time
      slots for appointments.
    </label>
    <textarea name="Availability" id="txtArea" rows="5" cols="80"></textarea>
  </div>

  <div className="form-item">
    <label className="long-label">
      Feel free to include any additional comments, questions, or concerns you
      may have.
    </label>
    <textarea name="Comments" id="txtArea" rows="5" cols="80"></textarea>
  </div>
  <p>
    I will never share your contact information with third parties without your
    permission.
  </p>
</form>;

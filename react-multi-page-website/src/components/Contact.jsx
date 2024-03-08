import React, { useState } from "react";

const ApplyNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [draft, setDraft] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAndConditions) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("gender", gender);
    formData.append("age", age);
    if (resume) {
      formData.append("resume", resume);
    }
    if (coverLetter) {
      formData.append("coverLetter", coverLetter);
    }
    // Submit the form data to your server here
    alert("Application submitted successfully!");
    if (draft) {
      // Save the application as a draft
      // Save the draft data to your server here
      const draftData = {
        name,
        email,
        phone,
        gender,
        age,
        resume,
        coverLetter,
      };
      // Save the draft data to your server here
      // For example, you can use the following code to save the draft data to the local storage:
      localStorage.setItem("draftData", JSON.stringify(draftData));
      alert("Application saved as draft.");
    }
  };

  return (
    <div className="apply-now">
      <div className="container">
        <h1 className="text-center">Apply Now</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Upload Resume</label>
            <input
              type="file"
              className="form-control-file"
              id="resume"
              onChange={(e) => setResume(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coverLetter">Upload Cover Letter</label>
            <input
              type="file"
              className="form-control-file"
              id="coverLetter"
              onChange={(e) => setCoverLetter(e.target.files[0])}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplyNow;
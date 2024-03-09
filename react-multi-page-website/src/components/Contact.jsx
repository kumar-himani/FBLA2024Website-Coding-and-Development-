import React, { useState } from "react";

const ApplyNow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [citizen, setCitizen] = useState("");
  const [workAuth, setWorkAuth] = useState("");
  const [driversLicense, setDriversLicense] = useState("");
  const [physicallyAble, setPhysicallyAble] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [positions, setPositions] = useState([]);
  const [availability, setAvailability] = useState("");
  const [startDate, setStartDate] = useState("");
  const [desiredPay, setDesiredPay] = useState("");
  const [education, setEducation] = useState("");
  const [jobExperience, setJobExperience] = useState("");
  const [references, setReferences] = useState("");
  const [reason, setReason] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [draft, setDraft] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const handlePositionChange = (position, isChecked) => {
    if (isChecked) {
      setPositions([...positions, position]);
    } else {
      setPositions(positions.filter((p) => p !== position));
    }
  };

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
    formData.append("citizen", citizen);
    formData.append("workAuth", workAuth);
    formData.append("driversLicense", driversLicense);
    formData.append("physicallyAble", physicallyAble);
    formData.append("interestedIn", interestedIn);
    positions.forEach((position) => formData.append("positions", position));
    formData.append("availability", availability);
    formData.append("startDate", startDate);
    formData.append("desiredPay", desiredPay);
    formData.append("education", education);
    formData.append("jobExperience", jobExperience);
    formData.append("references", references);
    formData.append("reason", reason);
    formData.append("hobbies", hobbies);
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
        "name": name,
        "email": email,
        "phone": phone,
        "gender": gender,
        "age": age,
        "citizen": citizen,
        "workAuth": workAuth,
        "driversLicense": driversLicense,
        "physicallyAble": physicallyAble,
        "interestedIn": interestedIn,
        "positions": positions,
        "availability": availability,
        "startDate": startDate,
        "desiredPay": desiredPay,
        "education": education,
        "jobExperience": jobExperience,
        "references": references,
        "reason": reason,
        "hobbies": hobbies,
        "resume": resume,
        "coverLetter": coverLetter
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
          <input type="text"
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
          <label htmlFor="citizen">Are you a US Citizen?</label>
          <select
            className="form-control"
            id="citizen"
            value={citizen}
            onChange={(e) => setCitizen(e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
          {citizen === "no" && (
          <div className="form-group">
            <label htmlFor="workAuth">Are you authorized to work in the US?</label>
            <select
              className="form-control"
              id="workAuth"
              value={workAuth}
              onChange={(e) => setWorkAuth(e.target.value)}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          )}
          <div className="form-group">
          <label htmlFor="driversLicense">Do you have a valid driver's license and/or dependable transportation?</label>
          <select
            className="form-control"
            id="driversLicense"
            value={driversLicense}
            onChange={(e) => setDriversLicense(e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          </div>
          <div className="form-group">
          <label htmlFor="physicallyAble">Are you physically able to stand for long periods of time, bend, twist and lift up to 40lbs?</label>
                      <div className="form-group"></div>
            <label htmlFor="position">Position you are applying for (check all that interest you)</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Server"
              id="positionServer"
              checked={positions.includes("Server")}
              onChange={(e) => handlePositionChange("Server", e.target.checked)}
            />
            <label className="form-check-label" htmlFor="positionServer">
              Server
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Pizza Maker"
              id="positionPizzaMaker"
              checked={positions.includes("Pizza Maker")}
              onChange={(e) => handlePositionChange("Pizza Maker", e.target.checked)}
            />
            <label className="form-check-label" htmlFor="positionPizzaMaker">
              Pizza Maker
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Counter"
              id="positionCounter"
              checked={positions.includes("Counter")}
              onChange={(e) => handlePositionChange("Counter", e.target.checked)}
            />
            <label className="form-check-label" htmlFor="positionCounter">
              Counter
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Host/ess"
              id="positionHostess"
              checked={positions.includes("Host/ess")}
              nChange={(e) => handlePositionChange("Host/ess", e.target.checked)}
            />
            <label className="form-check-label" htmlFor="positionHostess">
              Host/ess
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Manager"
              id="positionManager"
              checked={positions.includes("Manager")}
              onChange={(e) => handlePositionChange("Manager", e.target.checked)}
            />
            <label className="form-check-label" htmlFor="positionManager">
              Manager
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Sous Chef"
              id="positionSousChef"
              checked={positions.includes("Sous Chef")}
              onChange={(e) => handlePositionChange("Sous Chef", e.target.checked)}
            />
            <label className="form-check-label" htmlFor="positionSousChef">
              Sous Chef
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Line Cook"
              id="positionLineCook"
              checked={positions.includes("Line Cook")}
              onChange={(e) => handlePositionChange("Line Cook", e.target.checked)}
            />
            <label className="form-check-label" htmlFor="positionLineCook">
              Line Cook
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Prep Cook"
              id="positionPrepCook"
              checked={positions.includes("Prep Cook")}
              onChange={(e) => handlePositionChange("Prep Cook", e.target.checked)}
            />
            <label className="form-label"></label>
            <div className="form-group">
            <label htmlFor="availability">Availability</label>
            <textarea
              className="form-control"
              id="availability"
              rows="3"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">When can you begin working?</label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desiredPay">Desired salary/hourly pay?</label>
            <input
              type="text"
              className="form-control"
              id="desiredPay"
              value={desiredPay}
              onChange={(e) => setDesiredPay(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">What's the highest level of education you completed?</label>
            <input
              type="text"
              className="form-control"
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="experience">Please list any/all previous relevant job experience: (Include length of employment and location of company)</label>
            <textarea
              className="form-control"
              id="experience"
              rows="3"
              value={jobExperience}
              onChange={(e) => setJobExperience(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="references">Please list your professional references: (Three supervisors names and contact info)</label>
            <textarea
              className="form-control"
              id="references"
              rows="3"
              value={references}
              onChange={(e) => setReferences(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="reason">Why do you want to work at Naples Pizza?</label>
            <textarea
              className="form-control"
              id="reason"
              rows="3"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="hobbies">Tell us something interesting about yourself:</label>
            <textarea
              className="form-control"
              id="hobbies"
              rows="3"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="draft"
              checked={draft}
              onChange={(e) => setDraft(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="draft">
              Save as draft
            </label>
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsAndConditions"
              checked={termsAndConditions}
              onChange={(e) => setTermsAndConditions(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="termsAndConditions">
              I agree to the Terms and Conditions
            </label>

          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>

        </div>
    </form>
  </div>
  </div>
 );
}


export default ApplyNow; 

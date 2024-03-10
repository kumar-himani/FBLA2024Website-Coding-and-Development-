import React, { useState } from "react";
import { useParams } from "react-router";

function Statistics() {
  let { postSlug } = useParams();
  const [education, setEducation] = useState(0);
  const [experience, setExperience] = useState(0);
  const [skills, setSkills] = useState(0);
  const [qualificationPercentage, setQualificationPercentage] = useState(0);
  const [jobYieldRate, setJobYieldRate] = useState(0);
  const [driversLicense, setDriversLicense] = useState(false);
  const [physicallyAble, setPhysicallyAble] = useState(false);
  const [interestedPositions, setInterestedPositions] = useState([]);
  const [availability, setAvailability] = useState("");
  const [startDate, setStartDate] = useState("");
  const [desiredPay, setDesiredPay] = useState(0);
  const [highestEducation, setHighestEducation] = useState("");
  const [references, setReferences] = useState("");
  const [reason, setReason] = useState("");
  const [hobbies, setHobbies] = useState("");

  const calculateQualification = () => {
    const totalWeight = 0.3 + 0.5 + 0.2;
    const weightedEducation = (education / 100) * 0.3;
    const weightedExperience = (experience / 100) * 0.5;
    const weightedSkills = (skills / 100) * 0.2;
    const totalQualification = weightedEducation + weightedExperience + weightedSkills;
    setQualificationPercentage(Math.round(totalQualification / totalWeight * 100));
    setJobYieldRate(Math.round(totalQualification * 100));
  };

  const handleInterestedPositionsChange = (e) => {
    const position = e.target.value;
    if (interestedPositions.includes(position)) {
      setInterestedPositions(interestedPositions.filter((p) => p !== position));
    } else {
      setInterestedPositions([...interestedPositions, position]);
    }
  };

  return (
    <div className="home2">
      <div class="container2">
        <hr/>
        <h2 className="mb-5">The job qualification calculation is based on the following criteria:</h2>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="col-lg-4">
            <p>
              Education (30%):
            </p>
            <input type="range" min="0" max="100" value={education} onChange={e => setEducation(e.target.value)} />
          </div>
          <div className="col-lg-4">
            <p>
              Experience (50%):
            </p>
            <input type="range" min="0" max="100" value={experience} onChange={e => setExperience(e.target.value)} />
          </div>
          <div className="col-lg-4">
            <p>
              Skills (20%):
            </p>
            <input type="range" min="0" max="100" value={skills} onChange={e => setSkills(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <p>
              Do you have a valid driver's license and/or dependable transportation?
            </p>
            <select value={driversLicense ? "Yes" : "No"} onChange={e => setDriversLicense(e.target.value === "Yes")}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-lg-4">
            <p>
              When can you begin working?
            </p>
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
          </div>
          <div className="col-lg-4">
            <p>
              Desired salary/hourly pay?
            </p>
            <input type="number" value={desiredPay} onChange={e => setDesiredPay(e.target.value)} />
          </div>
          <div className="col-lg-4">
            <p>
              What's the highest level of education you completed?
            </p>
            <select value={highestEducation} onChange={e => setHighestEducation(e.target.value)}>
              <option value="High School Diploma">High School Diploma</option>
              <option value="Associate's Degree">Associate's Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Doctoral Degree">Doctoral Degree</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Please list any/all previous relevant job experience:
            </p>
            <textarea value={references} onChange={e => setReferences(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Please list your professional references: (Three supervisors names and contact info)
            </p>
            <textarea value={references} onChange={e => setReferences(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Why do you want to work at Naples Pizza?
            </p>
            <textarea value={reason} onChange={e => setReason(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>
              Tell us something interesting about yourself: (Hobbies, travel, exciting times in your life)
            </p>
            <textarea value={hobbies} onChange={e => setHobbies(e.target.value)} />
          </div>
        </div>
        <p>
          Based on your submitted qualifications, you are {qualificationPercentage}% qualified for this position.
        </p>
        <p>
          With this qualification percentage, you have a {jobYieldRate}% chance of getting this job or similar positions.
        </p>
        <p>
          You have a higher chance of getting this position if you have a degree in a related field (+10%), 5+ years of experience (+15%), or specific technical skills (+5% for each skill).
        </p>
        <button onClick={calculateQualification}>Calculate Qualification</button>
        <hr/>
        <hr/>
      </div>
    </div>
  );
}

export default Statistics;
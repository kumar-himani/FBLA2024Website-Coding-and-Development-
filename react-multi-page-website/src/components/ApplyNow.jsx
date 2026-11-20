import React, { useState } from "react";
import { validateApplication } from "../utils/validation";
import { readJSON, writeJSON, removeKey, appendToList } from "../utils/storage";

const DRAFT_KEY = "naplesApplicationDraft";
const APPLICATIONS_KEY = "naplesApplications";

const POSITIONS = ["Server", "Pizza Maker", "Counter", "Host/ess", "Manager", "Sous Chef", "Line Cook", "Prep Cook"];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  over16: "",
  workAuth: "",
  driversLicense: "",
  positions: [],
  availability: "",
  startDate: "",
  desiredPay: "",
  education: "",
  jobExperience: "",
  references: "",
  reason: "",
  hobbies: "",
  termsAndConditions: false,
};

// Order matters: when validation fails, the page jumps to the first field with an error.
const FIELD_ORDER = Object.keys(emptyForm);

function fieldId(field) {
  return field === "positions" ? "apply-position-0" : `apply-${field}`;
}

function ApplyNow() {
  // Load a saved draft, if there is one, the first time the page renders.
  const [form, setForm] = useState(() => ({ ...emptyForm, ...readJSON(DRAFT_KEY, {}) }));
  const [files, setFiles] = useState({ resume: null, coverLetter: null });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const setField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleChange = (field) => (e) => setField(field, e.target.value);

  const togglePosition = (position, isChecked) => {
    const positions = isChecked
      ? [...form.positions, position]
      : form.positions.filter((p) => p !== position);
    setField("positions", positions);
  };

  const handleFileChange = (field) => (e) => {
    setFiles({ ...files, [field]: e.target.files[0] || null });
  };

  const saveDraft = () => {
    const saved = writeJSON(DRAFT_KEY, form);
    setStatus(
      saved
        ? "Draft saved. It'll be here when you come back (uploaded files aren't saved in drafts)."
        : "Couldn't save a draft in this browser."
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateApplication(form);
    setErrors(newErrors);
    setStatus("");

    const firstError = FIELD_ORDER.find((field) => newErrors[field]);
    if (firstError) {
      const element = document.getElementById(fieldId(firstError));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.focus({ preventScroll: true });
      }
      return;
    }

    // No backend for this demo, so the application is saved in the browser.
    const application = appendToList(APPLICATIONS_KEY, {
      ...form,
      resumeFileName: files.resume ? files.resume.name : null,
      coverLetterFileName: files.coverLetter ? files.coverLetter.name : null,
    });
    removeKey(DRAFT_KEY);
    setSubmitted(application);
  };

  const startOver = () => {
    setForm(emptyForm);
    setFiles({ resume: null, coverLetter: null });
    setErrors({});
    setSubmitted(null);
    window.scrollTo(0, 0);
  };

  const inputClass = (field) => `form-control${errors[field] ? " is-invalid" : ""}`;
  const errorText = (field) =>
    errors[field] && <div className="invalid-feedback d-block">{errors[field]}</div>;

  if (submitted) {
    return (
      <div className="apply-now">
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "6rem" }}>
          <h1 className="text-center" style={{ color: "#886839" }}>Application received!</h1>
          <div className="alert alert-success mt-4" role="status">
            Thanks, {submitted.name}! We received your application for{" "}
            <strong>{submitted.positions.join(", ")}</strong>. We'll reach out at {submitted.email}.
          </div>
          <p>Confirmation number: <strong>{submitted.id.toUpperCase()}</strong></p>
          <button type="button" className="btn btn-secondary" onClick={startOver}>
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  const yesNoSelect = (field, label) => (
    <div className="form-group">
      <label htmlFor={fieldId(field)}>{label}</label>
      <select className={inputClass(field)} id={fieldId(field)} value={form[field]} onChange={handleChange(field)}>
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      {errorText(field)}
    </div>
  );

  const textArea = (field, label) => (
    <div className="form-group">
      <label htmlFor={fieldId(field)}>{label}</label>
      <textarea
        className={inputClass(field)}
        id={fieldId(field)}
        rows="3"
        value={form[field]}
        onChange={handleChange(field)}
      />
      {errorText(field)}
    </div>
  );

  return (
    <div className="apply-now">
      <div className="container" style={{ paddingBottom: "6rem" }}>
        <h1 className="text-center" style={{ color: "#886839", paddingTop: "3rem" }}>Apply Now</h1>
        <p className="text-center text-muted">Fields marked * are required.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor={fieldId("name")}>Name *</label>
            <input type="text" className={inputClass("name")} id={fieldId("name")} value={form.name} onChange={handleChange("name")} />
            {errorText("name")}
          </div>
          <div className="form-group">
            <label htmlFor={fieldId("email")}>Email *</label>
            <input type="email" className={inputClass("email")} id={fieldId("email")} value={form.email} onChange={handleChange("email")} />
            {errorText("email")}
          </div>
          <div className="form-group">
            <label htmlFor={fieldId("phone")}>Phone *</label>
            <input type="tel" className={inputClass("phone")} id={fieldId("phone")} placeholder="(860) 555-1234" value={form.phone} onChange={handleChange("phone")} />
            {errorText("phone")}
          </div>

          {yesNoSelect("over16", "Are you 16 or older? *")}
          {yesNoSelect("workAuth", "Are you legally authorized to work in the US? *")}
          {yesNoSelect("driversLicense", "Do you have a valid driver's license and/or dependable transportation?")}

          <fieldset className="form-group">
            <legend className="col-form-label">Position you are applying for (check all that interest you) *</legend>
            {POSITIONS.map((position, index) => (
              <div className="form-check" key={position}>
                <input
                  className={`form-check-input${errors.positions ? " is-invalid" : ""}`}
                  type="checkbox"
                  id={`apply-position-${index}`}
                  checked={form.positions.includes(position)}
                  onChange={(e) => togglePosition(position, e.target.checked)}
                />
                <label className="form-check-label" htmlFor={`apply-position-${index}`}>
                  {position}
                </label>
              </div>
            ))}
            {errorText("positions")}
          </fieldset>

          <hr />

          {textArea("availability", "Availability *")}
          <div className="form-group">
            <label htmlFor={fieldId("startDate")}>When can you begin working? *</label>
            <input type="date" className={inputClass("startDate")} id={fieldId("startDate")} value={form.startDate} onChange={handleChange("startDate")} />
            {errorText("startDate")}
          </div>
          <div className="form-group">
            <label htmlFor={fieldId("desiredPay")}>Desired salary/hourly pay?</label>
            <input type="text" className="form-control" id={fieldId("desiredPay")} value={form.desiredPay} onChange={handleChange("desiredPay")} />
          </div>
          <div className="form-group">
            <label htmlFor={fieldId("education")}>What's the highest level of education you completed?</label>
            <input type="text" className="form-control" id={fieldId("education")} value={form.education} onChange={handleChange("education")} />
          </div>
          {textArea("jobExperience", "Please list any/all previous relevant job experience: (Include length of employment and location of company)")}
          {textArea("references", "Please list your professional references: (Three supervisors' names and contact info)")}
          {textArea("reason", "Why do you want to work at Naples Pizza?")}
          {textArea("hobbies", "Tell us something interesting about yourself:")}

          <div className="form-group">
            <label htmlFor="apply-resume">Resume (PDF or Word)</label>
            <input type="file" className="form-control-file" id="apply-resume" accept=".pdf,.doc,.docx" onChange={handleFileChange("resume")} />
          </div>
          <div className="form-group">
            <label htmlFor="apply-coverLetter">Cover letter (optional)</label>
            <input type="file" className="form-control-file" id="apply-coverLetter" accept=".pdf,.doc,.docx" onChange={handleFileChange("coverLetter")} />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className={`form-check-input${errors.termsAndConditions ? " is-invalid" : ""}`}
              id={fieldId("termsAndConditions")}
              checked={form.termsAndConditions}
              onChange={(e) => setField("termsAndConditions", e.target.checked)}
            />
            <label className="form-check-label" htmlFor={fieldId("termsAndConditions")}>
              I agree to the Terms and Conditions *
            </label>
            {errorText("termsAndConditions")}
          </div>

          {status && <div className="alert alert-info" role="status">{status}</div>}

          <button type="button" className="btn btn-secondary mr-2" onClick={saveDraft}>
            Save as draft
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyNow;

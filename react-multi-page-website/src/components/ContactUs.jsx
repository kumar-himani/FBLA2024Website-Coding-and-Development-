import React, { useState } from "react";
import { validateContact } from "../utils/validation";
import { appendToList } from "../utils/storage";

const textColor = { color: "#58483A" };
const emptyForm = { name: "", email: "", message: "" };

function ContactUs() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sentTo, setSentTo] = useState(null);

  const updateField = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    // Clear a field's error as soon as the user starts fixing it.
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateContact(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // No backend for this demo, so messages are kept in the browser.
    appendToList("naplesContactMessages", form);
    setSentTo(form.name.trim());
    setForm(emptyForm);
  };

  const inputClass = (field) => `form-control${errors[field] ? " is-invalid" : ""}`;

  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <h1 className="font-weight-light" style={textColor}>Contact Us!</h1>
            <p style={textColor}>
              <strong>Address:</strong> 838 Farmington Ave, Farmington, CT 06032
            </p>
            <p style={textColor}>
              <strong>Phone:</strong> (860) 674-8876
            </p>
            <p style={textColor}>
              <strong>Email:</strong>{" "}
              <a href="mailto:naplesapizza@gmail.com" style={{ color: "#90A74C" }}>naplesapizza@gmail.com</a>
            </p>

            {sentTo && (
              <div className="alert alert-success" role="status">
                Thanks, {sentTo}! We got your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  className={inputClass("name")}
                  id="contact-name"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={updateField("name")}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email address</label>
                <input
                  type="email"
                  className={inputClass("email")}
                  id="contact-email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={updateField("email")}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  className={inputClass("message")}
                  id="contact-message"
                  rows="3"
                  value={form.message}
                  onChange={updateField("message")}
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#90A74C", color: "white" }}>
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="embed-responsive embed-responsive-21by9">
              <iframe
                title="Map showing Naples Pizza in Farmington, CT"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.670533537371!2d-72.82908332371294!3d41.72762777125874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7ae18171cc9f9%3A0xd799c5143b2ca148!2sNaples%20Pizza!5e0!3m2!1sen!2sus!4v1709787871737!5m2!1sen!2sus"
                width="600"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

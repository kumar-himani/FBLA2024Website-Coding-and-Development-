import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

import { validateSignUp, validateLogin } from "../../utils/validation";
import { signUp, logIn, logOut, getCurrentUser } from "../../utils/auth";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [user, setUser] = useState(() => getCurrentUser());

  const updateField = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const switchTo = (nextAction) => {
    setAction(nextAction);
    setErrors({});
    setFormError("");
    setNotice("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setNotice("");
    const newErrors = action === "Sign Up" ? validateSignUp(form) : validateLogin(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setBusy(true);
    try {
      const signedIn = action === "Sign Up" ? await signUp(form) : await logIn(form);
      setUser(signedIn);
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setFormError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const handleLogOut = () => {
    logOut();
    setUser(null);
    switchTo("Login");
  };

  // The two buttons work like tabs: clicking the other one switches modes,
  // and clicking the highlighted one submits the form.
  // The highlighted button is the form's submit button, so pressing Enter also submits.
  const handleButton = (buttonAction) => () => {
    if (buttonAction !== action) switchTo(buttonAction);
  };

  if (user) {
    return (
      <div className="containerlogin">
        <div className="header">
          <div className="text">Welcome, {user.name}!</div>
          <div className="underline"></div>
        </div>
        <p className="login-message">You're logged in as {user.email}.</p>
        <div className="submit-container">
          <button type="button" className="submit" onClick={handleLogOut}>
            Log out
          </button>
        </div>
        <p className="demo-note">Demo only: accounts are saved in this browser, not on a server.</p>
      </div>
    );
  }

  return (
    <form className="containerlogin" onSubmit={handleSubmit} noValidate>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div>
            <div className="input">
              <img className="icon" src={user_icon} alt="" />
              <input type="text" placeholder="Name" aria-label="Name" value={form.name} onChange={updateField("name")} />
            </div>
            {errors.name && <p className="field-error">{errors.name}</p>}
          </div>
        )}
        <div>
          <div className="input">
            <img className="icon" src={email_icon} alt="" />
            <input type="email" placeholder="Email Address" aria-label="Email address" value={form.email} onChange={updateField("email")} />
          </div>
          {errors.email && <p className="field-error">{errors.email}</p>}
        </div>
        <div>
          <div className="input">
            <img className="icon" src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              autoComplete={action === "Sign Up" ? "new-password" : "current-password"}
              value={form.password}
              onChange={updateField("password")}
            />
          </div>
          {errors.password && <p className="field-error">{errors.password}</p>}
        </div>
      </div>

      {action === "Login" && (
        <div className="forgot-password">
          Forgot Password?{" "}
          <span
            role="button"
            tabIndex={0}
            onClick={() => setNotice("This is a demo, so passwords can't be reset. You can sign up again with a different email.")}
          >
            Click Here!
          </span>
        </div>
      )}

      {formError && <p className="form-error" role="alert">{formError}</p>}
      {notice && <p className="login-message">{notice}</p>}

      <div className="submit-container">
        <button
          type={action === "Sign Up" ? "submit" : "button"}
          className={action === "Sign Up" ? "submit" : "submit gray"}
          onClick={handleButton("Sign Up")}
          disabled={busy}
        >
          Sign Up
        </button>
        <button
          type={action === "Login" ? "submit" : "button"}
          className={action === "Login" ? "submit" : "submit gray"}
          onClick={handleButton("Login")}
          disabled={busy}
        >
          Login
        </button>
      </div>
      <p className="demo-note">Demo only: accounts are saved in this browser, not on a server.</p>
    </form>
  );
};

export default LoginSignup;

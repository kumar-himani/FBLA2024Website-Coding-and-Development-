// Shared form validation helpers used by the Apply Now, Contact Us, and Login pages.

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_PATTERN.test(String(email).trim());
}

// Accepts common US formats like (860) 555-1234, 860-555-1234, or +1 860 555 1234.
export function isValidPhone(phone) {
  const digits = String(phone).replace(/\D/g, "");
  return digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
}

function isBlank(value) {
  return String(value ?? "").trim() === "";
}

// Returns an object mapping field names to error messages. An empty object means the form is valid.
export function validateContact({ name, email, message }) {
  const errors = {};
  if (isBlank(name)) errors.name = "Please enter your name.";
  if (isBlank(email)) errors.email = "Please enter your email.";
  else if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (isBlank(message)) errors.message = "Please enter a message.";
  return errors;
}

export function validateApplication(form) {
  const errors = {};
  if (isBlank(form.name)) errors.name = "Please enter your name.";
  if (isBlank(form.email)) errors.email = "Please enter your email.";
  else if (!isValidEmail(form.email)) errors.email = "Please enter a valid email address.";
  if (isBlank(form.phone)) errors.phone = "Please enter your phone number.";
  else if (!isValidPhone(form.phone)) errors.phone = "Please enter a 10-digit phone number.";
  if (isBlank(form.over16)) errors.over16 = "Please answer this question.";
  if (isBlank(form.workAuth)) errors.workAuth = "Please answer this question.";
  if (!form.positions || form.positions.length === 0) {
    errors.positions = "Please choose at least one position.";
  }
  if (isBlank(form.availability)) errors.availability = "Please tell us when you're available.";
  if (isBlank(form.startDate)) errors.startDate = "Please choose a start date.";
  if (!form.termsAndConditions) errors.termsAndConditions = "Please agree to the terms and conditions.";
  return errors;
}

export function validateSignUp({ name, email, password }) {
  const errors = {};
  if (isBlank(name)) errors.name = "Please enter your name.";
  if (isBlank(email)) errors.email = "Please enter your email.";
  else if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (String(password ?? "").length < 8) errors.password = "Password must be at least 8 characters.";
  return errors;
}

export function validateLogin({ email, password }) {
  const errors = {};
  if (isBlank(email)) errors.email = "Please enter your email.";
  else if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (isBlank(password)) errors.password = "Please enter your password.";
  return errors;
}

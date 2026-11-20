import {
  isValidEmail,
  isValidPhone,
  validateContact,
  validateApplication,
  validateSignUp,
} from "./validation";

describe("isValidEmail", () => {
  test("accepts normal addresses", () => {
    expect(isValidEmail("himani@example.com")).toBe(true);
    expect(isValidEmail("  spaced@example.org ")).toBe(true);
  });

  test("rejects malformed addresses", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("no-at-sign.com")).toBe(false);
    expect(isValidEmail("missing@tld")).toBe(false);
    expect(isValidEmail("two words@example.com")).toBe(false);
  });
});

describe("isValidPhone", () => {
  test("accepts common US formats", () => {
    expect(isValidPhone("(860) 674-8876")).toBe(true);
    expect(isValidPhone("860-674-8876")).toBe(true);
    expect(isValidPhone("+1 860 674 8876")).toBe(true);
  });

  test("rejects numbers with the wrong number of digits", () => {
    expect(isValidPhone("674-8876")).toBe(false);
    expect(isValidPhone("2 860 674 8876")).toBe(false);
  });
});

describe("validateContact", () => {
  test("requires every field", () => {
    const errors = validateContact({ name: "", email: "", message: " " });
    expect(Object.keys(errors).sort()).toEqual(["email", "message", "name"]);
  });

  test("passes a complete message", () => {
    expect(validateContact({ name: "Himani", email: "h@example.com", message: "Hi!" })).toEqual({});
  });
});

describe("validateApplication", () => {
  const complete = {
    name: "Himani",
    email: "h@example.com",
    phone: "860-674-8876",
    over16: "yes",
    workAuth: "yes",
    positions: ["Server"],
    availability: "Weekends",
    startDate: "2026-12-01",
    termsAndConditions: true,
  };

  test("passes a complete application", () => {
    expect(validateApplication(complete)).toEqual({});
  });

  test("requires at least one position and agreeing to the terms", () => {
    const errors = validateApplication({ ...complete, positions: [], termsAndConditions: false });
    expect(errors.positions).toBeDefined();
    expect(errors.termsAndConditions).toBeDefined();
  });

  test("flags a bad phone number", () => {
    expect(validateApplication({ ...complete, phone: "12345" }).phone).toBeDefined();
  });
});

describe("validateSignUp", () => {
  test("requires a password of at least 8 characters", () => {
    expect(validateSignUp({ name: "H", email: "h@example.com", password: "short" }).password).toBeDefined();
    expect(validateSignUp({ name: "H", email: "h@example.com", password: "longenough" })).toEqual({});
  });
});

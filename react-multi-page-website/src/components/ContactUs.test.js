import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "./ContactUs";

beforeEach(() => {
  window.localStorage.clear();
});

test("shows errors when the form is submitted empty", () => {
  render(<ContactUs />);
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
  expect(screen.getByText("Please enter your email.")).toBeInTheDocument();
  expect(screen.getByText("Please enter a message.")).toBeInTheDocument();
});

test("thanks the user after a valid submission", () => {
  render(<ContactUs />);
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Himani" } });
  fireEvent.change(screen.getByLabelText("Email address"), { target: { value: "h@example.com" } });
  fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Do you cater?" } });
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByRole("status")).toHaveTextContent("Thanks, Himani!");
});

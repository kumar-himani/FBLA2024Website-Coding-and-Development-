import { render, screen, fireEvent } from "@testing-library/react";
import ApplyNow from "./ApplyNow";

beforeEach(() => {
  window.localStorage.clear();
  // jsdom doesn't implement scrolling, so stub it out.
  Element.prototype.scrollIntoView = jest.fn();
});

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText("Name *"), { target: { value: "Himani" } });
  fireEvent.change(screen.getByLabelText("Email *"), { target: { value: "h@example.com" } });
  fireEvent.change(screen.getByLabelText("Phone *"), { target: { value: "860-674-8876" } });
  fireEvent.change(screen.getByLabelText("Are you 16 or older? *"), { target: { value: "yes" } });
  fireEvent.change(screen.getByLabelText("Are you legally authorized to work in the US? *"), { target: { value: "yes" } });
  fireEvent.click(screen.getByLabelText("Server"));
  fireEvent.change(screen.getByLabelText("Availability *"), { target: { value: "Weekends" } });
  fireEvent.change(screen.getByLabelText("When can you begin working? *"), { target: { value: "2026-12-01" } });
  fireEvent.click(screen.getByLabelText("I agree to the Terms and Conditions *"));
}

test("won't submit until required fields are filled in", () => {
  render(<ApplyNow />);
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  expect(screen.getByText("Please choose at least one position.")).toBeInTheDocument();
  expect(screen.queryByText("Application received!")).not.toBeInTheDocument();
});

test("shows a confirmation and saves the application", () => {
  render(<ApplyNow />);
  fillRequiredFields();
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  expect(screen.getByText("Application received!")).toBeInTheDocument();
  const saved = JSON.parse(window.localStorage.getItem("naplesApplications"));
  expect(saved).toHaveLength(1);
  expect(saved[0].positions).toEqual(["Server"]);
});

test("a saved draft is loaded back in", () => {
  const { unmount } = render(<ApplyNow />);
  fireEvent.change(screen.getByLabelText("Name *"), { target: { value: "Draft Person" } });
  fireEvent.click(screen.getByRole("button", { name: "Save as draft" }));
  unmount();

  render(<ApplyNow />);
  expect(screen.getByLabelText("Name *")).toHaveValue("Draft Person");
});

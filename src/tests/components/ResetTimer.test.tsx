import React from "react";
import { render, screen } from "@testing-library/react";
import ResetTimer from "../../components/ResetTimer/ResetTimer";

test("ResetTimer renders", () => {
  render(<ResetTimer />);
  const component = screen.getByText(/In/);
  expect(component).toBeInTheDocument();
});

test("The timer counts down to Pacific midnight", () => {
  // 12 hours, 34 minutes, and 56 seconds until midnight
  jest.useFakeTimers().setSystemTime(new Date("2020-01-01T11:25:04"));
  render(<ResetTimer />);
  const timer = screen.getByText(/In/);
  expect(timer).toHaveTextContent("In 12:34:56");
});

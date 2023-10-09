import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import AnimatedValue from "../../components/AnimatedValue/AnimatedValue";

test("AnimatedValue renders", () => {
  render(<AnimatedValue value={3} direction="up" />);
  const component = screen.getByText(3);
  expect(component).toBeInTheDocument();
});

test("AnimatedValue's rendered value changes", async () => {
  let value = 3;
  const { rerender } = render(<AnimatedValue value={value} direction="up" />);
  const beforeChange = screen.getByText(3);
  expect(beforeChange).toBeInTheDocument();
  value = 4;
  rerender(<AnimatedValue value={value} direction="up" />);
  const afterChange = await screen.findByText("4");
  expect(afterChange).toBeInTheDocument();
  const oldValue = screen.queryByText(3);
  expect(oldValue).toBeNull();
});

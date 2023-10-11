import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

test("LoadingSkeleton renders", () => {
  render(<LoadingSkeleton quantity={1} width="100%" hasContainer={false} />);
  const divsInclContainer = screen.getAllByRole("generic");
  expect(divsInclContainer.length).toBe(2);
});

test("The number of LoadingSkeletons can be adjusted", () => {
  render(<LoadingSkeleton quantity={5} width="100%" hasContainer={false} />);
  const divsInclContainer = screen.getAllByRole("generic");
  expect(divsInclContainer.length).toBe(6);
});

test("An extra container can wrap the LoadingSkeletons", () => {
  render(<LoadingSkeleton quantity={1} width="100%" hasContainer={true} />);
  const divsInclContainer = screen.getAllByRole("generic");
  expect(divsInclContainer.length).toBe(3);
});

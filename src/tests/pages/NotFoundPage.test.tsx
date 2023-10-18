import React from "react";
import { render, screen } from "@testing-library/react";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

test("NotFoundPage renders", () => {
  render(<NotFoundPage />);
  const header1 = screen.getByRole("heading", { name: "404" });
  const header2 = screen.getByRole("heading", {
    name: "How about we explore the area ahead of us later?",
  });
  const kokomiOfGreed = screen.getByAltText(
    "A rendition of the Yu-Gi-Oh! card Pot of Greed styled after Kokomi."
  );
  expect(header1).toBeInTheDocument();
  expect(header2).toBeInTheDocument();
  expect(kokomiOfGreed).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { GameDataType } from "../../__generated__/graphql";

test("PageHeader renders", () => {
  render(
    <PageHeader
      title={GameDataType.Character}
      dataLoaded={true}
      solvedValue={0}
    />
  );
  const component = screen.getByRole("banner");
  const paimonImage = screen.getByAltText(
    "A thinking Paimon sticker from a Genshin Impact web event on the Chinese servers."
  );
  expect(component).toBeInTheDocument();
  expect(paimonImage).toBeInTheDocument();
});

describe("The text changes depending on the title prop", () => {
  test("with character", () => {
    render(
      <PageHeader
        title={GameDataType.Character}
        dataLoaded={true}
        solvedValue={0}
      />
    );
    const header = screen.getByText(
      "Which Character is Paimon Thinking of...?"
    );
    const solvedText = screen.getByText(
      "Travelers have guessed Paimon's character today!"
    );
    expect(header).toBeInTheDocument();
    expect(solvedText).toBeInTheDocument();
  });
  test("with weapon", () => {
    render(
      <PageHeader
        title={GameDataType.Weapon}
        dataLoaded={true}
        solvedValue={0}
      />
    );
    const header = screen.getByText("Which Weapon is Paimon Thinking of...?");
    const solvedText = screen.getByText(
      "Travelers have guessed Paimon's weapon today!"
    );
    expect(header).toBeInTheDocument();
    expect(solvedText).toBeInTheDocument();
  });
});

test("The solved text is grammatically correct when the solvedValue is 1", () => {
  render(
    <PageHeader title={GameDataType.Weapon} dataLoaded={true} solvedValue={1} />
  );
  const solvedText = screen.getByText(
    "Traveler has guessed Paimon's weapon today!"
  );
  expect(solvedText).toBeInTheDocument();
});

test("The solved text is replaced with a LoadingSkeleton when data hasn't loaded yet", () => {
  render(
    <PageHeader
      title={GameDataType.Weapon}
      dataLoaded={false}
      solvedValue={0}
    />
  );
  // testing wrapper + header container + LoadingSkeleton
  const numOfDivs = 3;
  const divs = screen.getAllByRole("generic");
  expect(divs.length).toBe(numOfDivs);
});

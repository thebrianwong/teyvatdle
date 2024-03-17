import React from "react";
import { render, screen } from "@testing-library/react";
import TalentConstellationImage from "../../components/TalentConstellationImage/TalentConstellationImage";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import {
  ConstellationData,
  GameDataType,
  TalentData,
  TalentType,
} from "../../__generated__/graphql";

const talentData: TalentData = {
  talentId: "1",
  talentName: "Eat",
  talentType: TalentType.NormalAttack,
  talentImageUrl: "dummy talent",
  characterName: "Paimon",
  characterImageUrl: "dummy",
};

const constellationData: ConstellationData = {
  constellationId: "1",
  constellationName: "Sleep",
  constellationLevel: 1,
  constellationImageUrl: "dummy constellation",
  characterName: "Paimon",
  characterImageUrl: "dummy",
};

test("TalentConstellationImage renders", () => {
  render(
    <TalentConstellationImage type={GameDataType.Talent} data={talentData} />
  );
  const component = screen.getByRole("img");
  expect(component).toBeInTheDocument();
});

describe("The src is pulled from data", () => {
  test("talent", () => {
    render(
      <TalentConstellationImage type={GameDataType.Talent} data={talentData} />
    );
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "dummy talent");
  });
  test("constellation", () => {
    render(
      <TalentConstellationImage
        type={GameDataType.Constellation}
        data={constellationData}
      />
    );
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "dummy constellation");
  });
});

describe("The alt text varies based on type", () => {
  test("talent", () => {
    render(
      <TalentConstellationImage type={GameDataType.Talent} data={talentData} />
    );
    const img = screen.getByAltText("Daily talent.");
    expect(img).toBeInTheDocument();
  });
  test("constellation", () => {
    render(
      <TalentConstellationImage
        type={GameDataType.Constellation}
        data={constellationData}
      />
    );
    const img = screen.getByAltText("Daily constellation.");
    expect(img).toBeInTheDocument();
  });
});

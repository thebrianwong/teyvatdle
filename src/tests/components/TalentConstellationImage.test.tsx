import React from "react";
import { render, screen } from "@testing-library/react";
import TalentConstellationImage from "../../components/TalentConstellationImage/TalentConstellationImage";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";

const talentData: TalentAPIData = {
  talent_id: 1,
  talent_name: "Eat",
  talent_type: "Normal Attack",
  talent_image_url: "dummy talent",
  character_name: "Paimon",
  character_image_url: "dummy",
};

const constellationData: ConstellationAPIData = {
  constellation_id: 1,
  constellation_name: "Sleep",
  constellation_level: 1,
  constellation_image_url: "dummy constellation",
  character_name: "Paimon",
  character_image_url: "dummy",
};

test("TalentConstellationImage renders", () => {
  render(<TalentConstellationImage type="talent" data={talentData} />);
  const component = screen.getByRole("img");
  expect(component).toBeInTheDocument();
});

describe("The src is pulled from data", () => {
  test("talent", () => {
    render(<TalentConstellationImage type="talent" data={talentData} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "dummy talent");
  });
  test("constellation", () => {
    render(
      <TalentConstellationImage type="constellation" data={constellationData} />
    );
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "dummy constellation");
  });
});

describe("The alt text varies based on type", () => {
  test("talent", () => {
    render(<TalentConstellationImage type="talent" data={talentData} />);
    const img = screen.getByAltText("Daily talent.");
    expect(img).toBeInTheDocument();
  });
  test("constellation", () => {
    render(
      <TalentConstellationImage type="constellation" data={constellationData} />
    );
    const img = screen.getByAltText("Daily constellation.");
    expect(img).toBeInTheDocument();
  });
});

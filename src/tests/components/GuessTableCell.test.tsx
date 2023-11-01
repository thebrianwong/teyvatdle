import React from "react";
import { render, screen } from "@testing-library/react";
import GuessTableCell from "../../components/GuessTableCell/GuessTableCell";
import {
  BooleanSingle,
  ImageDouble,
  MainImage,
  TextDouble,
  TextImageCombo,
  TextSingle,
} from "../../types/data/cellVariations.type";

const mainImageData: MainImage = {
  answerAccuracy: "correct",
  dataType: "mainImage",
  content: "main image",
  altText: "main image alt text",
};

const textSingleData: TextSingle = {
  answerAccuracy: "correct",
  dataType: "textSingle",
  content: "text single",
};

const textDoubleData: TextDouble = {
  answerAccuracy: "correct",
  dataType: "textDouble",
  content1: "text double content 1",
  content2: "text double content 2",
};

const textImageComboData: TextImageCombo = {
  answerAccuracy: "correct",
  dataType: "textImageCombo",
  content1: "text image content 1",
  content2: "text image content 2",
  altText2: "content 2 alt text",
};

const imageDoubleStringData: ImageDouble = {
  answerAccuracy: "correct",
  dataType: "imageDouble",
  content1: "image double content 1 string",
  altText1: "content 1 alt text",
  content2: "image double content 2 string",
  altText2: "content 2 alt text",
};

const imageDoubleArrayData: ImageDouble = {
  answerAccuracy: "correct",
  dataType: "imageDouble",
  content1: ["item 1", "item 2"],
  altText1: ["alt text 1", "alt text 2"],
  content2: "image double content 2 string",
  altText2: "content 2 alt text",
};

const booleanSingleTrueData: BooleanSingle = {
  answerAccuracy: "correct",
  dataType: "booleanSingle",
  content: true,
};

const booleanSingleFalseData: BooleanSingle = {
  answerAccuracy: "correct",
  dataType: "booleanSingle",
  content: false,
};

const TableContainer = ({ child }) => {
  return (
    <table>
      <tbody>
        <tr>{child}</tr>
      </tbody>
    </table>
  );
};

test("GuessTableCell renders", () => {
  render(
    <TableContainer
      child={
        <GuessTableCell
          cellData={mainImageData}
          cellNumber={0}
          complete={false}
          playAnimations={false}
        />
      }
    />
  );
  const cellData = screen.getByRole("cell");
  expect(cellData).toBeInTheDocument();
});

describe("GuessTableCell contents depend on data", () => {
  test("mainImage", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={mainImageData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const mainImg = screen.getByAltText("main image alt text");
    expect(mainImg).toBeInTheDocument();
    expect(mainImg).toHaveAttribute("src", "main image");
  });
  test("textSingle", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={textSingleData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const singleText = screen.getByText("text single");
    expect(singleText).toBeInTheDocument();
  });
  test("textDouble", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={textDoubleData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const content1 = screen.getByText(/text double content 1/);
    const content2 = screen.getByText(/text double content 2/);
    expect(content1).toBeInTheDocument();
    expect(content2).toBeInTheDocument();
  });
  test("textImageCombo", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={textImageComboData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const content1 = screen.getByText("text image content 1");
    const content2 = screen.getByAltText("content 2 alt text.");
    expect(content1).toBeInTheDocument();
    expect(content2).toBeInTheDocument();
    expect(content2).toHaveAttribute("src", "text image content 2");
  });
  test("imageDoubleString", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={imageDoubleStringData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const content1 = screen.getByAltText("content 1 alt text.");
    const content2 = screen.getByAltText("content 2 alt text.");
    expect(content1).toBeInTheDocument();
    expect(content1).toHaveAttribute("src", "image double content 1 string");
    expect(content2).toBeInTheDocument();
    expect(content2).toHaveAttribute("src", "image double content 2 string");
  });
  test("imageDoubleArray", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={imageDoubleArrayData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const content1Item1 = screen.getByAltText("alt text 1.");
    const content1Item2 = screen.getByAltText("alt text 2.");
    const content2 = screen.getByAltText("content 2 alt text.");
    expect(content1Item1).toBeInTheDocument();
    expect(content1Item1).toHaveAttribute("src", "item 1");
    expect(content1Item2).toBeInTheDocument();
    expect(content1Item2).toHaveAttribute("src", "item 2");
    expect(content2).toBeInTheDocument();
  });
  test("booleanSingleTrue", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={booleanSingleTrueData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const checkmark = screen.getByText("✔️");
    expect(checkmark).toBeInTheDocument();
  });
  test("booleanSingleFalse", () => {
    render(
      <TableContainer
        child={
          <GuessTableCell
            cellData={booleanSingleFalseData}
            cellNumber={0}
            complete={false}
            playAnimations={false}
          />
        }
      />
    );
    const xMark = screen.getByText("✗");
    expect(xMark).toBeInTheDocument();
  });
});

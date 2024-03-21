import AnswerOptions from "./answerOptions.type";

type BaseCell = {
  answerAccuracy: AnswerOptions;
};

type MainImage = BaseCell & {
  dataType: "mainImage";
  content: string;
  altText: string;
};

type TextSingle = BaseCell & {
  dataType: "textSingle";
  content: string | null;
};

type TextDouble = BaseCell & {
  dataType: "textDouble";
  content1: string;
  elementalText1?: boolean;
  content2: string | null;
  elementalText2?: boolean;
};

type TextImageCombo = BaseCell & {
  dataType: "textImageCombo";
  content1: string | null;
  content2: string;
  altText2: string;
  numOfImgs2: number;
};

type ImageDouble = BaseCell & {
  dataType: "imageDouble";
  content1: string | string[];
  altText1: string | string[];
  numOfImgs1: number;
  content2: string | null;
  altText2: string | null;
  numOfImgs2: number;
};

type BooleanSingle = BaseCell & {
  dataType: "booleanSingle";
  content: boolean;
};

export type {
  MainImage,
  TextSingle,
  TextDouble,
  TextImageCombo,
  ImageDouble,
  BooleanSingle,
};

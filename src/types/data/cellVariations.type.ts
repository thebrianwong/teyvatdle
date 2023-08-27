type MainImage = {
  dataType: "mainImage";
  content: string;
  altText: string;
};

type TextSingle = {
  dataType: "textSingle";
  content: string | null;
};

type TextDouble = {
  dataType: "textDouble";
  content1: string;
  elementalText1?: boolean;
  content2: string | null;
  elementalText2?: boolean;
};

type TextImageCombo = {
  dataType: "textImageCombo";
  content1: string | null;
  content2: string;
  altText2: string;
};

type ImageDouble = {
  dataType: "imageDouble";
  content1: string | string[];
  altText1: string | string[];
  content2: string | null;
  altText2: string | null;
};

type BooleanSingle = {
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

type MainImage = {
  dataType: "mainImage";
  content: string;
  altText: string;
};

type TextSingle = {
  dataType: "textSingle";
  content: string;
};

type TextDouble = {
  dataType: "textDouble";
  content1: string;
  elementalText1?: boolean;
  content2: string;
  elementalText2?: boolean;
};

type TextImageCombo = {
  dataType: "textImageCombo";
  content1: string;
  content2: string;
  altText2: string;
};

type ImageDouble = {
  dataType: "imageDouble";
  content1: string | string[];
  altText1: string | string[];
  content2: string;
  altText2: string;
};

type BooleanSingle = {
  dataType: "booleanSingle";
  content: boolean;
};

type GuessTableCellProps = {
  cellData:
    | MainImage
    | TextSingle
    | TextDouble
    | TextImageCombo
    | ImageDouble
    | BooleanSingle;
};

export default GuessTableCellProps;

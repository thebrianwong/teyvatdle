import {
  BooleanSingle,
  ImageDouble,
  MainImage,
  TextDouble,
  TextImageCombo,
  TextSingle,
} from "../../types/data/cellVariations.type";

type GuessTableCellProps = {
  cellData:
    | MainImage
    | TextSingle
    | TextDouble
    | TextImageCombo
    | ImageDouble
    | BooleanSingle;
  cellNumber: number;
  complete: boolean;
  playAnimations: boolean;
};

export default GuessTableCellProps;

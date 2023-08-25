type GuessTableCellProps = {
  cellData:
    | string
    | {
        attribute1: string | string[] | number | boolean | null;
        altText1?: string;
        attribute2: string | string[] | number | boolean | null;
        altText2?: string;
      };
  cellType: string;
};

export default GuessTableCellProps;

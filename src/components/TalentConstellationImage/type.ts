import { GameDataType } from "../../__generated__/graphql";
import ListData from "../../types/listData.type";

type TalentConstellationImageProps = {
  type: GameDataType.Talent | GameDataType.Constellation;
  data: ListData;
};

export default TalentConstellationImageProps;

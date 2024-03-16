import { GameDataType } from "../../__generated__/graphql";
import ListAPIData from "../../types/data/listAPIData.type";

type TalentConstellationImageProps = {
  type: GameDataType.Talent | GameDataType.Constellation;
  data: ListAPIData;
};

export default TalentConstellationImageProps;

import ListAPIData from "../../types/data/listAPIData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import GameMode from "../../types/gameMode.type";

type PageHeaderProps = {
  title: GameMode;
  dataLoaded: boolean;
  solvedValue: number;
};

export default PageHeaderProps;

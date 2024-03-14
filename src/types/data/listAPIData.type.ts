import { ConstellationData, TalentData } from "../../__generated__/graphql";
import ConstellationAPIData from "./constellationAPIData.type";
import TalentAPIData from "./talentAPIData.type";

// type ListAPIData = TalentAPIData | ConstellationAPIData;
type ListAPIData = TalentData | ConstellationData;

export default ListAPIData;

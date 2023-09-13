import allCharData from "../../allChars.json";
import dummyConstellation from "../../constellationPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import {
  loadCharacters,
  loadDailyConstellation,
} from "../../redux/apiDataSlice";
import {
  selectDailyConstellationID,
  selectDailyConstellationSolved,
} from "../../redux/dailyRecordSlice";
import ConstellationPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

const ConstellationPage = ({ dailyRecordID }: ConstellationPageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyConstellationID = useAppSelector(selectDailyConstellationID);
  const dailyConstellationData = useAppSelector((state) =>
    loadDailyConstellation(state, dailyConstellationID)
  );
  const dailyConstellationSolved = useAppSelector(
    selectDailyConstellationSolved
  );

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <div>
          <h1>Which Constellation is Paimon Thinking of...?</h1>
          {dailyConstellationData ? (
            <p
              style={{ fontStyle: "italic" }}
            >{`${dailyConstellationSolved} Travelers have guessed Paimon's constellation today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} />
          )}
        </div>
      </div>
      {dailyConstellationData ? (
        <GameArea
          gameType="constellation"
          selectType="character"
          data={characterData}
          dailyEntity={dailyConstellationData!}
          dailyRecordID={dailyRecordID}
        />
      ) : (
        <LoadingSkeleton quantity={5} width="100%" />
      )}
    </>
  );
};

export default ConstellationPage;

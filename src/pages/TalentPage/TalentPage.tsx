import allCharData from "../../allChars.json";
import dummyTalent from "../../talentPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import CharacterAPIData from "../../types/data/characterAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters, loadDailyTalent } from "../../redux/apiDataSlice";
import {
  selectDailyTalentID,
  selectDailyTalentSolved,
} from "../../redux/dailyRecordSlice";
import TalentPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";

const TalentPage = ({ dailyRecordID }: TalentPageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyTalentID = useAppSelector(selectDailyTalentID);
  const dailyTalentData = useAppSelector((state) =>
    loadDailyTalent(state, dailyTalentID)
  );
  const dailyTalentSolved = useAppSelector(selectDailyTalentSolved);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <div>
          <h1>Which Talent is Paimon Thinking of...?</h1>
          {dailyTalentData ? (
            <p
              style={{ fontStyle: "italic" }}
            >{`${dailyTalentSolved} Travelers have guessed Paimon's talent today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} />
          )}
        </div>
      </div>
      {dailyTalentData && (
        <GameArea
          gameType="talent"
          selectType="character"
          data={characterData}
          dailyEntity={dailyTalentData!}
          dailyRecordID={dailyRecordID}
        />
      )}
    </>
  );
};

export default TalentPage;

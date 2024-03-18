import GameArea from "../../components/GameArea/GameArea";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters } from "../../redux/apiDataSlice";
import {
  selectDailyConstellation,
  selectDailyConstellationSolved,
} from "../../redux/dailyRecordSlice";
import ConstellationPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tooltip from "../../components/Tooltip/Tooltip";
import Credits from "../../components/Credits/Credits";
import { useEffect } from "react";
import { GameDataType } from "../../__generated__/graphql";

const ConstellationPage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: ConstellationPageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyConstellationData = useAppSelector(selectDailyConstellation);
  const dailyConstellationSolved = useAppSelector(
    selectDailyConstellationSolved
  );

  useEffect(() => {
    document.title = "Teyvatdle | Constellation";

    if (!complete) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageHeader
        title={GameDataType.Constellation}
        dataLoaded={Object.keys(dailyConstellationData).length ? true : false}
        solvedValue={dailyConstellationSolved}
      />
      {Object.keys(dailyConstellationData).length ? (
        <GameArea
          gameType={GameDataType.Constellation}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={dailyConstellationData!}
          dailyRecordID={dailyRecordID}
          guessesCounter={guessesCounter}
          complete={complete}
          guesses={guesses}
          setGuessCounter={setGuessCounter}
          setCompletedState={setCompletedState}
          updateGuesses={updateGuesses}
        />
      ) : (
        <LoadingSkeleton quantity={5} width="100%" hasContainer={true} />
      )}
      <Credits />
      <Tooltip type={GameDataType.Constellation} />
    </>
  );
};

export default ConstellationPage;

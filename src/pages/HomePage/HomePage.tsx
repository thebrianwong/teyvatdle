import GameArea from "../../components/GameArea/GameArea";
import { useAppSelector } from "../../redux/hooks";
import { loadCharacters } from "../../redux/apiDataSlice";
import {
  selectDailyCharacter,
  selectDailyCharacterSolved,
} from "../../redux/dailyRecordSlice";
import HomePageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tooltip from "../../components/Tooltip/Tooltip";
import Credits from "../../components/Credits/Credits";
import { useEffect } from "react";
import { GameDataType } from "../../__generated__/graphql";

const HomePage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: HomePageProps) => {
  const characterData = useAppSelector(loadCharacters);
  const dailyCharacterData = useAppSelector(selectDailyCharacter);
  const dailyCharacterSolved = useAppSelector(selectDailyCharacterSolved);

  useEffect(() => {
    document.title = "Teyvatdle";

    if (!complete) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageHeader
        title={GameDataType.Character}
        dataLoaded={dailyCharacterData ? true : false}
        solvedValue={dailyCharacterSolved}
      />
      {Object.keys(dailyCharacterData).length ? (
        <GameArea
          gameType={GameDataType.Character}
          selectType={GameDataType.Character}
          gameData={characterData}
          dailyEntity={dailyCharacterData!}
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
      <Tooltip type={GameDataType.Character} />
    </>
  );
};

export default HomePage;

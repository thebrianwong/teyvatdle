import GameArea from "../../components/GameArea/GameArea";
import { useAppSelector } from "../../redux/hooks";
import { loadFoods } from "../../redux/apiDataSlice";
import {
  selectDailyFood,
  selectDailyFoodSolved,
} from "../../redux/dailyRecordSlice";
import FoodPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tooltip from "../../components/Tooltip/Tooltip";
import Credits from "../../components/Credits/Credits";
import { useEffect } from "react";
import { GameDataType } from "../../__generated__/graphql";

const FoodPage = ({
  dailyRecordID,
  guessesCounter,
  complete,
  guesses,
  setGuessCounter,
  setCompletedState,
  updateGuesses,
}: FoodPageProps) => {
  const foodData = useAppSelector(loadFoods);
  const dailyFoodData = useAppSelector(selectDailyFood);
  const dailyFoodSolved = useAppSelector(selectDailyFoodSolved);

  useEffect(() => {
    document.title = "Teyvatdle | Food";

    if (!complete) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <PageHeader
        title={GameDataType.Food}
        dataLoaded={dailyFoodData ? true : false}
        solvedValue={dailyFoodSolved}
      />
      {Object.keys(dailyFoodData).length ? (
        <GameArea
          gameType={GameDataType.Food}
          selectType={GameDataType.Food}
          gameData={foodData}
          dailyEntity={dailyFoodData!}
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
      <Tooltip type={GameDataType.Food} />
    </>
  );
};

export default FoodPage;

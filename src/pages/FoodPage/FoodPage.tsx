import GameArea from "../../components/GameArea/GameArea";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadDailyFood, loadFoods } from "../../redux/apiDataSlice";
import {
  selectDailyFoodID,
  selectDailyFoodSolved,
} from "../../redux/dailyRecordSlice";
import FoodPageProps from "./type";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import PageHeader from "../../components/PageHeader/PageHeader";

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
  const dailyFoodID = useAppSelector(selectDailyFoodID);
  const dailyFoodData = useAppSelector((state) =>
    loadDailyFood(state, dailyFoodID)
  );
  const dailyFoodSolved = useAppSelector(selectDailyFoodSolved);

  return (
    <>
      <PageHeader
        title="food"
        dataLoaded={dailyFoodData ? true : false}
        solvedValue={dailyFoodSolved}
      />
      {dailyFoodData ? (
        <GameArea
          gameType="food"
          selectType="food"
          data={foodData}
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
    </>
  );
};

export default FoodPage;

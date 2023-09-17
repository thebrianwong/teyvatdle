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
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <div>
          <h1>Which Food is Paimon Thinking of...?</h1>
          {dailyFoodData ? (
            <p
              style={{ fontStyle: "italic" }}
            >{`${dailyFoodSolved} Travelers have guessed Paimon's food today!`}</p>
          ) : (
            <LoadingSkeleton quantity={1} width={"50%"} />
          )}
        </div>
      </div>
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
        <LoadingSkeleton quantity={5} width="100%" />
      )}
    </>
  );
};

export default FoodPage;

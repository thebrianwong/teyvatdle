import allFoodData from "../../allFoods.json";
import dummyFood from "../../foodPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import FoodAPIData from "../../types/data/foodAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";
import { useAppSelector } from "../../redux/hooks";
import { loadDailyFood, loadFoods } from "../../redux/apiDataSlice";
import { selectDailyFoodID } from "../../redux/dailyRecordSlice";

const FoodPage = () => {
  const foodData = useAppSelector(loadFoods);
  const dailyFoodID = useAppSelector(selectDailyFoodID);
  const dailyFoodData = useAppSelector((state) =>
    loadDailyFood(state, dailyFoodID)
  );

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Food is Paimon Thinking of...?</h1>
      </div>
      {dailyFoodData && (
        <GameArea
          gameType="food"
          selectType="food"
          data={foodData}
          dailyEntity={dailyFoodData!}
        />
      )}
    </>
  );
};

export default FoodPage;

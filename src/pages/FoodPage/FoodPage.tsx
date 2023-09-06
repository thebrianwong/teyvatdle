import allFoodData from "../../allFoods.json";
import dummyFood from "../../foodPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import FoodAPIData from "../../types/data/foodAPIData.type";

const FoodPage = () => {
  // will later get from redux
  const foods = allFoodData as FoodAPIData[];
  const foodDaily = dummyFood as FoodAPIData;

  return (
    <GameArea
      gameType="food"
      selectType="food"
      data={foods}
      dailyEntity={foodDaily}
    />
  );
};

export default FoodPage;

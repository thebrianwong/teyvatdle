import allFoodData from "../../allFoods.json";
import dummyFood from "../../foodPlaceholder.json";
import GameArea from "../../components/GameArea/GameArea";
import FoodAPIData from "../../types/data/foodAPIData.type";
import paimonImage from "../../assets/title/paimonThinking.png";

const FoodPage = () => {
  // will later get from redux
  const foods = allFoodData as FoodAPIData[];
  const foodDaily = dummyFood as FoodAPIData;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={paimonImage} alt="" />
        <h1>Which Food is Paimon Thinking of...?</h1>
      </div>
      <GameArea
        gameType="food"
        selectType="food"
        data={foods}
        dailyEntity={foodDaily}
      />
    </>
  );
};

export default FoodPage;

import {
  BooleanSingle,
  MainImage,
  TextDouble,
  TextSingle,
} from "./cellVariations.type";

type FoodTransformedData = {
  foodImage: MainImage;
  name: TextSingle;
  rarityType: TextDouble;
  special: BooleanSingle;
  purchasable: BooleanSingle;
  recipe: BooleanSingle;
  event: BooleanSingle;
};

export default FoodTransformedData;

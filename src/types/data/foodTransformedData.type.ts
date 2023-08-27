import {
  BooleanSingle,
  MainImage,
  TextDouble,
  TextSingle,
} from "./cellVariations.type";

type FoodTransformedData = {
  food_image: MainImage;
  name: TextSingle;
  rarity_type: TextDouble;
  special: BooleanSingle;
  purchasable: BooleanSingle;
  recipe: BooleanSingle;
  event: BooleanSingle;
};

export default FoodTransformedData;

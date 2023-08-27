import {
  ImageDouble,
  MainImage,
  TextDouble,
  TextImageCombo,
  TextSingle,
} from "./cellVariations.type";

type CharacterTransformedData = {
  character_image: MainImage;
  name: TextSingle;
  gender_height: TextDouble;
  rarity_region: TextDouble;
  ele_weapon: TextDouble;
  stat_material: TextImageCombo;
  local_ascension: ImageDouble;
  book_talent: ImageDouble;
  birthday: TextSingle;
};

export default CharacterTransformedData;

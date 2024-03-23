import {
  ImageDouble,
  MainImage,
  TextDouble,
  TextImageCombo,
  TextSingle,
} from "./cellVariations.type";

type CharacterTransformedData = {
  characterImage: MainImage;
  name: TextSingle;
  genderHeight: TextDouble;
  rarityRegion: TextDouble;
  eleWeapon: TextDouble;
  statMaterial: TextImageCombo;
  localAscension: ImageDouble;
  bookTalent: ImageDouble;
  birthday: TextSingle;
};

export default CharacterTransformedData;

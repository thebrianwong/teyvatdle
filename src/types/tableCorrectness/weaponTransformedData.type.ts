import {
  BooleanSingle,
  ImageDouble,
  MainImage,
  TextDouble,
  TextImageCombo,
  TextSingle,
} from "./cellVariations.type";

type WeaponTransformedData = {
  weaponImage: MainImage;
  name: TextSingle;
  rarityType: TextDouble;
  statMaterial: TextImageCombo;
  eliteCommon: ImageDouble;
  gacha: BooleanSingle;
};

export default WeaponTransformedData;

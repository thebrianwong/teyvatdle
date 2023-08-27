import {
  BooleanSingle,
  ImageDouble,
  MainImage,
  TextDouble,
  TextImageCombo,
  TextSingle,
} from "./cellVariations.type";

type WeaponTransformedData = {
  weapon_image: MainImage;
  name: TextSingle;
  rarity_type: TextDouble;
  stat_material: TextImageCombo;
  elite_common: ImageDouble;
  gacha: BooleanSingle;
};

export default WeaponTransformedData;

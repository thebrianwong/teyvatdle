import Region from "../region.type";
import GenshinElement from "../element.type";
import WeaponType from "../weaponType.type";
import Stat from "../stat.type";

type CharacterAPIData = {
  character_id: number;
  character_name: string;
  gender: string;
  height: string;
  rarity: number;
  region: Region | null;
  element: GenshinElement;
  weapon_type: WeaponType;
  ascension_stat: Stat;
  birthday: string | null;
  character_image_url: string;
  local_specialty: string;
  local_specialty_image_url: string;
  enhancement_material: string;
  enhancement_material_image_url: string;
  ascension_boss_material: string | null;
  ascension_boss_material_image_url: string | null;
  talent_boss_material: string;
  talent_boss_material_image_url: string;
  talent_book: string[];
  talent_book_image_url: string[];
};

export default CharacterAPIData;

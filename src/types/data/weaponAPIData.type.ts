import WeaponType from "../weaponType.type";
import Stat from "../stat.type";

type WeaponAPIData = {
  weapon_id: number;
  weapon_name: string;
  rarity: number;
  weapon_type: WeaponType;
  sub_stat: Stat | null;
  weapon_image_url: string;
  weapon_domain_material: string;
  weapon_domain_material_image_url: string;
  elite_enemy_material: string;
  elite_enemy_material_image_url: string;
  common_enemy_material: string;
  common_enemy_material_image_url: string;
  gacha: boolean;
};

export default WeaponAPIData;

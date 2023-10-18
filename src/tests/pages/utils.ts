import CharacterAPIData from "../../types/data/characterAPIData.type";
import WeaponAPIData from "../../types/data/weaponAPIData.type";
import FoodAPIData from "../../types/data/foodAPIData.type";
import TalentAPIData from "../../types/data/talentAPIData.type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import DailyRecordAPIData from "../../types/data/dailyRecordAPIData.type";

const invalidDailyIdState: {
  apiData: {
    characters: CharacterAPIData[];
    weapons: WeaponAPIData[];
    foods: FoodAPIData[];
    talents: TalentAPIData[];
    constellations: ConstellationAPIData[];
  };
  dailyRecord: DailyRecordAPIData;
} = {
  apiData: {
    characters: [
      {
        character_id: 1,
        character_name: "Paimon",
        gender: "Female",
        height: "Short",
        rarity: 5,
        region: "Mondstadt",
        element: "Anemo",
        weapon_type: "Catalyst",
        ascension_stat: "ATK",
        birthday: null,
        character_image_url: "dummy",
        character_correct_image_url: "Correct!",
        character_wrong_image_url: "Wrong...",
        local_specialty: "dummy",
        local_specialty_image_url: "dummy",
        enhancement_material: "dummy",
        enhancement_material_image_url: "dummy",
        ascension_boss_material: "dummy",
        ascension_boss_material_image_url: "dummy",
        talent_boss_material: "dummy",
        talent_boss_material_image_url: "dummy",
        talent_book: ["dummy"],
        talent_book_image_url: ["dummy"],
      },
    ],
    weapons: [
      {
        weapon_id: 1,
        weapon_name: "Cubes",
        rarity: 5,
        weapon_type: "Catalyst",
        sub_stat: "ATK",
        weapon_image_url: "dummy",
        weapon_domain_material: "dummy",
        weapon_domain_material_image_url: "dummy",
        elite_enemy_material: "dummy",
        elite_enemy_material_image_url: "dummy",
        common_enemy_material: "dummy",
        common_enemy_material_image_url: "dummy",
        gacha: true,
      },
    ],
    foods: [
      {
        food_id: 1,
        food_name: "Paimon (Emergency Food)",
        rarity: 5,
        food_type: "Adventurer's Dishes",
        special_dish: false,
        purchasable: false,
        recipe: false,
        event: true,
        food_image_url: "dummy",
      },
    ],
    talents: [
      {
        talent_id: 1,
        talent_name: "Eat",
        talent_type: "Normal Attack",
        talent_image_url: "dummy talent",
        character_name: "Paimon",
        character_image_url: "dummy",
      },
    ],
    constellations: [
      {
        constellation_id: 1,
        constellation_name: "Sleep",
        constellation_level: 1,
        constellation_image_url: "dummy constellation",
        character_name: "Paimon",
        character_image_url: "dummy",
      },
    ],
  },
  dailyRecord: {
    daily_record_id: 0,
    character_id: 10,
    character_solved: 0,
    weapon_id: 10,
    weapon_solved: 0,
    talent_id: 10,
    talent_solved: 0,
    constellation_id: 10,
    constellation_solved: 0,
    food_id: 10,
    food_solved: 0,
  },
};

export default invalidDailyIdState;

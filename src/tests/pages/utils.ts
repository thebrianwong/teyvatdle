import {
  CharacterData,
  ConstellationData,
  DailyRecordData,
  FoodData,
  FoodType,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  TalentData,
  TalentType,
  WeaponData,
  WeaponType,
} from "../../__generated__/graphql";

const invalidDailyIdState: {
  apiData: {
    characters: CharacterData[];
    weapons: WeaponData[];
    foods: FoodData[];
    talents: TalentData[];
    constellations: ConstellationData[];
  };
  dailyRecord: DailyRecordData;
} = {
  apiData: {
    characters: [
      {
        characterId: "1",
        characterName: "Paimon",
        gender: Gender.Female,
        height: Height.Short,
        rarity: 5,
        region: Region.Mondstadt,
        element: GenshinElement.Anemo,
        weaponType: WeaponType.Catalyst,
        ascensionStat: Stat.Atk,
        birthday: null,
        characterImageUrl: "dummy",
        characterCorrectImageUrl: "Correct!",
        characterWrongImageUrl: "Wrong...",
        localSpecialty: "dummy",
        localSpecialtyImageUrl: "dummy",
        enhancementMaterial: "dummy",
        enhancementMaterialImageUrl: "dummy",
        ascensionBossMaterial: "dummy",
        ascensionBossMaterialImageUrl: "dummy",
        talentBossMaterial: "dummy",
        talentBossMaterialImageUrl: "dummy",
        talentBook: ["dummy"],
        talentBookImageUrl: ["dummy"],
      },
    ],
    weapons: [
      {
        weaponId: "1",
        weaponName: "Cubes",
        rarity: 5,
        weaponType: WeaponType.Catalyst,
        subStat: Stat.Atk,
        weaponImageUrl: "dummy",
        weaponDomainMaterial: "dummy",
        weaponDomainMaterialImageUrl: "dummy",
        eliteEnemyMaterial: "dummy",
        eliteEnemyMaterialImageUrl: "dummy",
        commonEnemyMaterial: "dummy",
        commonEnemyMaterialImageUrl: "dummy",
        gacha: true,
      },
    ],
    foods: [
      {
        foodId: "1",
        foodName: "Paimon (Emergency Food)",
        rarity: 5,
        foodType: FoodType.AdventurersDishes,
        specialDish: false,
        purchasable: false,
        recipe: false,
        event: true,
        foodImageUrl: "dummy",
      },
    ],
    talents: [
      {
        talentId: "1",
        talentName: "Eat",
        talentType: TalentType.NormalAttack,
        talentImageUrl: "dummy talent",
        characterName: "Paimon",
        characterImageUrl: "dummy",
      },
    ],
    constellations: [
      {
        constellationId: "1",
        constellationName: "Sleep",
        constellationLevel: 1,
        constellationImageUrl: "dummy constellation",
        characterName: "Paimon",
        characterImageUrl: "dummy",
      },
    ],
  },
  dailyRecord: {
    dailyRecordId: "1",
    character: {},
    characterSolved: 0,
    weapon: {},
    weaponSolved: 0,
    talent: {},
    talentSolved: 0,
    constellation: {},
    constellationSolved: 0,
    food: {},
    foodSolved: 0,
  },
};

export default invalidDailyIdState;

import { memo, useEffect, useState } from "react";
import GuessTableCell from "../GuessTableCell/GuessTableCell";
import GuessTableRowProps from "./type";
import CharacterTransformedData from "../../types/data/characterTransformedData.type";
import WeaponTransformedData from "../../types/data/weaponTransformedData.type";
import FoodTransformedData from "../../types/data/foodTransformedData.type";
import TableAPIData from "../../types/data/tableAPIData.type";
import formatBirthday from "../../utils/formatBirthday";
import checkForQuotes from "../../utils/checkForQuotes";
import determineCorrectness from "./determineCorrectness";
import CharacterAnswerAccuracy from "../../types/data/characterAnswerAccuracy.type";
import WeaponAnswerAccuracy from "../../types/data/weaponAnswerAccuracy.type";
import FoodAnswerAccuracy from "../../types/data/foodAnswerAccuracy.type";
import {
  CharacterData,
  FoodData,
  FoodType,
  GameDataType,
  Stat,
  WeaponData,
} from "../../__generated__/graphql";

const GuessTableRow = memo(
  ({
    rowType,
    rowDataProp,
    answer,
    complete,
    playAnimations,
  }: GuessTableRowProps) => {
    const [rowData, setRowData] = useState<
      CharacterTransformedData | WeaponTransformedData | FoodTransformedData
    >();

    const foodTypeEnumMap = {
      [FoodType.AdventurersDishes]: "Adventurer's Dishes",
      [FoodType.RecoveryDishes]: "Recovery Dishes",
      [FoodType.DefBoostingDishes]: "DEF-Boosting Dishes",
      [FoodType.AtkBoostingDishes]: "ATK-Boosting Dishes",
      [FoodType.Potions]: "Potions",
      [FoodType.EssentialOils]: "Essential Oils",
    };

    const statEnumMap = {
      [Stat.Atk]: "ATK",
      [Stat.AnemoDmgBonus]: "Anemo DMG Bonus",
      [Stat.CritDmg]: "CRIT DMG",
      [Stat.CritRate]: "CRIT Rate",
      [Stat.CryoDmgBonus]: "Cryo DMG Bonus",
      [Stat.Def]: "DEF",
      [Stat.DendroDmgBonus]: "Dendro DMG Bonus",
      [Stat.ElectroDmgBonus]: "Electro DMG Bonus",
      [Stat.ElementalMastery]: "Elemental Mastery",
      [Stat.EnergyRecharge]: "Energy Recharge",
      [Stat.GeoDmgBonus]: "Geo DMG Bonus",
      [Stat.Hp]: "Healing Bonus",
      [Stat.HealingBonus]: "HP",
      [Stat.HydroDmgBonus]: "Hydro DMG Bonus",
      [Stat.PhysicalDmgBonus]: "Physical DMG Bonus",
      [Stat.PyroDmgBonus]: "Pyro DMG Bonus",
    };

    const transformData = (rawData: TableAPIData) => {
      switch (rowType) {
        case GameDataType.Character:
          const rawCharacterData = { ...rawData } as CharacterData;
          const {
            charNameAccuracy,
            genderHeightAccuracy,
            rarityRegionAccuracy,
            eleWeaponAccuracy,
            statMaterialAccuracy,
            localAscensionAccuracy,
            bookTalentAccuracy,
            birthdayAccuracy,
          } = determineCorrectness(
            rowType,
            rawCharacterData,
            answer
          ) as CharacterAnswerAccuracy;
          const transformedCharacterData: CharacterTransformedData = {
            characterImage: {
              dataType: "mainImage",
              content: rawCharacterData.characterImageUrl!,
              altText: `Party select icon of ${rawCharacterData.characterName}.`,
              answerAccuracy: "default",
            },
            name: {
              dataType: "textSingle",
              content: rawCharacterData.characterName!,
              answerAccuracy: charNameAccuracy,
            },
            genderHeight: {
              dataType: "textDouble",
              content1: rawCharacterData.gender!,
              content2: rawCharacterData.height!,
              answerAccuracy: genderHeightAccuracy,
            },
            rarityRegion: {
              dataType: "textDouble",
              content1: `${rawCharacterData.rarity} ⭐`,
              content2: rawCharacterData.region || null,
              answerAccuracy: rarityRegionAccuracy,
            },
            eleWeapon: {
              dataType: "textDouble",
              content1: rawCharacterData.element!,
              elementalText1: true,
              content2: rawCharacterData.weaponType!,
              answerAccuracy: eleWeaponAccuracy,
            },
            statMaterial: {
              dataType: "textImageCombo",
              content1: statEnumMap[rawCharacterData.ascensionStat!],
              content2: rawCharacterData.enhancementMaterialImageUrl!,
              altText2: rawCharacterData.enhancementMaterial!,
              numOfImgs2: 3,
              answerAccuracy: statMaterialAccuracy,
            },
            localAscension: {
              dataType: "imageDouble",
              content1: rawCharacterData.localSpecialtyImageUrl!,
              altText1: rawCharacterData.localSpecialty!,
              numOfImgs1: 1,
              content2: rawCharacterData.ascensionBossMaterialImageUrl || null,
              altText2: rawCharacterData.ascensionBossMaterial || null,
              answerAccuracy: localAscensionAccuracy,
              numOfImgs2: 1,
            },
            bookTalent: {
              dataType: "imageDouble",
              content1: rawCharacterData.talentBookImageUrl!,
              altText1: rawCharacterData.talentBook!,
              numOfImgs1: 3,
              content2: rawCharacterData.talentBossMaterialImageUrl!,
              altText2: rawCharacterData.talentBossMaterial!,
              answerAccuracy: bookTalentAccuracy,
              numOfImgs2: 1,
            },
            birthday: {
              dataType: "textSingle",
              content: formatBirthday(rawCharacterData.birthday),
              answerAccuracy: birthdayAccuracy,
            },
          };
          setRowData(transformedCharacterData);
          break;
        case GameDataType.Weapon:
          const rawWeaponData = { ...rawData } as WeaponData;
          const {
            weapNameAccuracy,
            rarityWeapTypeAccuracy,
            subStatMaterialAccuracy,
            eliteCommonAccuracy,
            gachaAccuracy,
          } = determineCorrectness(
            rowType,
            rawWeaponData,
            answer
          ) as WeaponAnswerAccuracy;
          const transformedWeaponData: WeaponTransformedData = {
            weaponImage: {
              dataType: "mainImage",
              content: rawWeaponData.weaponImageUrl!,
              altText: checkForQuotes(rawWeaponData.weaponName!),
              answerAccuracy: "default",
            },
            name: {
              dataType: "textSingle",
              content: rawWeaponData.weaponName!,
              answerAccuracy: weapNameAccuracy,
            },
            rarityType: {
              dataType: "textDouble",
              content1: `${rawWeaponData.rarity} ⭐`,
              content2: rawWeaponData.weaponType!,
              answerAccuracy: rarityWeapTypeAccuracy,
            },
            statMaterial: {
              dataType: "textImageCombo",
              content1: rawWeaponData.subStat
                ? statEnumMap[rawWeaponData.subStat]
                : null,
              content2: rawWeaponData.weaponDomainMaterialImageUrl!,
              altText2: rawWeaponData.weaponDomainMaterial!,
              numOfImgs2: 4,
              answerAccuracy: subStatMaterialAccuracy,
            },
            eliteCommon: {
              dataType: "imageDouble",
              content1: rawWeaponData.eliteEnemyMaterialImageUrl!,
              altText1: rawWeaponData.eliteEnemyMaterial!,
              numOfImgs1: 3,
              content2: rawWeaponData.commonEnemyMaterialImageUrl!,
              altText2: rawWeaponData.commonEnemyMaterial!,
              numOfImgs2: 3,
              answerAccuracy: eliteCommonAccuracy,
            },
            gacha: {
              dataType: "booleanSingle",
              content: rawWeaponData.gacha!,
              answerAccuracy: gachaAccuracy,
            },
          };
          setRowData(transformedWeaponData);
          break;
        case GameDataType.Food:
          const rawFoodData = { ...rawData } as FoodData;
          const {
            foodNameAccuracy,
            rarityFoodTypeAccuracy,
            specialAccuracy,
            purchasableAccuracy,
            recipeAccuracy,
            eventAccuracy,
          } = determineCorrectness(
            rowType,
            rawFoodData,
            answer
          ) as FoodAnswerAccuracy;
          const transformedFoodData: FoodTransformedData = {
            foodImage: {
              dataType: "mainImage",
              content: rawFoodData.foodImageUrl!,
              altText: checkForQuotes(rawFoodData.foodName!),
              answerAccuracy: "default",
            },
            name: {
              dataType: "textSingle",
              content: rawFoodData.foodName!,
              answerAccuracy: foodNameAccuracy,
            },
            rarityType: {
              dataType: "textDouble",
              content1: `${rawFoodData.rarity} ⭐`,
              content2: foodTypeEnumMap[rawFoodData.foodType!],
              answerAccuracy: rarityFoodTypeAccuracy,
            },
            special: {
              dataType: "booleanSingle",
              content: rawFoodData.specialDish!,
              answerAccuracy: specialAccuracy,
            },
            purchasable: {
              dataType: "booleanSingle",
              content: rawFoodData.purchasable!,
              answerAccuracy: purchasableAccuracy,
            },
            recipe: {
              dataType: "booleanSingle",
              content: rawFoodData.recipe!,
              answerAccuracy: recipeAccuracy,
            },
            event: {
              dataType: "booleanSingle",
              content: rawFoodData.event!,
              answerAccuracy: eventAccuracy,
            },
          };
          setRowData(transformedFoodData);
          break;
        default:
          break;
      }
    };

    useEffect(() => {
      transformData(rowDataProp);
    }, []);

    return (
      <tr>
        {rowData &&
          Object.keys(rowData).map((key, index) => {
            return (
              <GuessTableCell
                key={`${rowData.name.content}-${key}`}
                cellData={rowData[key as keyof typeof rowData]}
                cellNumber={index}
                complete={complete}
                playAnimations={playAnimations}
              />
            );
          })}
      </tr>
    );
  }
);

export default GuessTableRow;

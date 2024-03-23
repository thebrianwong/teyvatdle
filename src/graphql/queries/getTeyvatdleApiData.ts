import { gql } from "../../__generated__";

export const GET_TEYVATDLE_API_DATA = gql(`
  query GetTeyvatdleAPIData {
    dailyRecordData {
      dailyRecordId
      characterSolved
      weaponSolved
      talentSolved
      constellationSolved
      foodSolved
      character {
        characterId
        characterName
        gender
        height
        rarity
        region
        element
        weaponType
        ascensionStat
        birthday
        characterImageUrl
        characterCorrectImageUrl
        characterWrongImageUrl
        localSpecialty
        localSpecialtyImageUrl
        enhancementMaterial
        enhancementMaterialImageUrl
        ascensionBossMaterial
        ascensionBossMaterialImageUrl
        talentBossMaterial
        talentBossMaterialImageUrl
        talentBook
        talentBookImageUrl
      }
      weapon {
        weaponId
        weaponName
        rarity
        weaponType
        subStat
        weaponImageUrl
        weaponDomainMaterial
        weaponDomainMaterialImageUrl
        eliteEnemyMaterial
        eliteEnemyMaterialImageUrl
        commonEnemyMaterial
        commonEnemyMaterialImageUrl
        gacha
      }
      talent {
        talentId
        talentName
        talentType
        talentImageUrl
        characterName
        # characterImageUrl
      }
      constellation {
        constellationId
        constellationName
        constellationLevel
        constellationImageUrl
        characterName
        # characterImageUrl
      }
      food {
        foodId
        foodName
        rarity
        foodType
        specialDish
        purchasable
        recipe
        event
        foodImageUrl
      }
    }
    characterData {
      characterId
      characterName
      gender
      height
      rarity
      region
      element
      weaponType
      ascensionStat
      birthday
      characterImageUrl
      characterCorrectImageUrl
      characterWrongImageUrl
      localSpecialty
      localSpecialtyImageUrl
      enhancementMaterial
      enhancementMaterialImageUrl
      ascensionBossMaterial
      ascensionBossMaterialImageUrl
      talentBossMaterial
      talentBossMaterialImageUrl
      talentBook
      talentBookImageUrl
    }
    # constellationData {
    #   constellationId
    #   constellationName
    #   constellationLevel
    #   constellationImageUrl
    #   characterName
    #   characterImageUrl
    # }
    foodData {
      foodId
      foodName
      rarity
      foodType
      specialDish
      purchasable
      recipe
      event
      foodImageUrl
    }
    # talentData {
    #   talentId
    #   talentName
    #   talentType
    #   talentImageUrl
    #   characterName
    #   characterImageUrl
    # }
    weaponData {
      weaponId
      weaponName
      rarity
      weaponType
      subStat
      weaponImageUrl
      weaponDomainMaterial
      weaponDomainMaterialImageUrl
      eliteEnemyMaterial
      eliteEnemyMaterialImageUrl
      commonEnemyMaterial
      commonEnemyMaterialImageUrl
      gacha
    }
  }
`);

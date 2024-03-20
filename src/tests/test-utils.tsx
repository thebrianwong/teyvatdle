import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { AppStore, RootState } from "../redux/store";
// As a basic setup, import your same slice reducers
// import userReducer from '../features/users/userSlice'
import apiDataReducer from "../redux/apiDataSlice";
import dailyRecordReducer from "../redux/dailyRecordSlice";
import {
  FoodType,
  GameDataType,
  Gender,
  GenshinElement,
  Height,
  Region,
  Stat,
  TalentType,
  WeaponType,
} from "../__generated__/graphql";
import { MockedProvider } from "@apollo/client/testing";
import { UPDATE_DAILY_RECORD } from "../graphql/mutations/updateDailyRecord";
import { GET_TEYVATDLE_API_DATA } from "../graphql/queries/getTeyvatdleApiData";
import { LISTEN_FOR_DAILY_RECORD_UPDATES } from "../graphql/subscriptions/listenForDailyRecordUpdates";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
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
        dailyRecordId: "0",
        character: {
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
        characterSolved: 0,
        weapon: {
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
        weaponSolved: 0,
        talent: {
          talentId: "1",
          talentName: "Eat",
          talentType: TalentType.NormalAttack,
          talentImageUrl: "dummy talent",
          characterName: "Paimon",
          characterImageUrl: "dummy",
        },
        talentSolved: 0,
        constellation: {
          constellationId: "1",
          constellationName: "Sleep",
          constellationLevel: 1,
          constellationImageUrl: "dummy constellation",
          characterName: "Paimon",
          characterImageUrl: "dummy",
        },
        constellationSolved: 0,
        food: {
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
        foodSolved: 0,
      },
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        apiData: apiDataReducer,
        dailyRecord: dailyRecordReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    const mocks = [
      {
        request: {
          query: UPDATE_DAILY_RECORD,
          variables: {
            id: "0",
            type: GameDataType.Character,
          },
        },
        result: {
          data: {
            updateDailyRecord: { updateDailyRecord: "mock" },
          },
        },
      },
      {
        request: {
          query: UPDATE_DAILY_RECORD,
          variables: {
            id: "0",
            type: GameDataType.Talent,
          },
        },
        result: {
          data: {
            updateDailyRecord: { updateDailyRecord: "mock" },
          },
        },
      },
      {
        request: {
          query: GET_TEYVATDLE_API_DATA,
        },
        result: {
          data: {
            dailyRecordData: {
              dailyRecordId: "1",
              character: {
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
              characterSolved: 0,
              weapon: {
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
              weaponSolved: 0,
              talent: {
                talentId: "1",
                talentName: "Eat",
                talentType: TalentType.NormalAttack,
                talentImageUrl: "dummy talent",
                characterName: "Paimon",
                characterImageUrl: "dummy",
              },
              talentSolved: 0,
              constellation: {
                constellationId: "1",
                constellationName: "Sleep",
                constellationLevel: 1,
                constellationImageUrl: "dummy constellation",
                characterName: "Paimon",
                characterImageUrl: "dummy",
              },
              constellationSolved: 0,
              food: {
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
              foodSolved: 0,
            },
            characterData: [],
            weaponData: [],
            foodData: [],
            talentData: [],
            constellationData: [],
          },
        },
      },
      {
        request: {
          query: LISTEN_FOR_DAILY_RECORD_UPDATES,
        },
        result: {
          data: {
            dailyRecordUpdated: {
              type: GameDataType.Character,
              newSolvedValue: 1,
            },
          },
        },
      },
    ];

    return (
      <Provider store={store}>
        <MockedProvider mocks={mocks}>{children}</MockedProvider>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

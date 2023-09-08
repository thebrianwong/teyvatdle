import { createSlice } from "@reduxjs/toolkit";

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState: {
    characters: {},
    weapons: {},
    foods: {},
    talents: {},
    constellations: {},
  },
  reducers: {
    getDataFromAPI: (state, action) => {
      // state[action.type as keyof typeof state] = {...state[action.type as keyof typeof state], }
      state[action.type as keyof typeof state] = action.payload;
    },
  },
});

export const { getDataFromAPI } = apiDataSlice.actions;

export default apiDataSlice.reducer;

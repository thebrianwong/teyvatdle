import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./gameDataSlice";
import dailyRecordReducer from "./dailyRecordSlice";

export const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    dailyRecord: dailyRecordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

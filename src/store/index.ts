/** @format */

import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "@/store/features/characters/characterSlice";
import episodeReducer from "@/store/features/episodes/episodeSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    episodes: episodeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

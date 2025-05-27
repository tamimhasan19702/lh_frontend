/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import characterReducer from "@/store/features/characters/characterSlice";
import episodeReducer from "@/store/features/episodes/episodeSlice";
import locationReducer from "@/store/features/locations/locationSlice";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    episodes: episodeReducer,
    locations: locationReducer,
  },
});

export const rootReducer = combineReducers({
  characters: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;

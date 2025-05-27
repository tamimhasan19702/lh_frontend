/** @format */

import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "@/store/features/characters/characterSlice";
import episodeReducer from "@/store/features/episodes/episodeSlice";
import locationReducer from "@/store/features/locations/locationSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    episodes: episodeReducer,
    locations: locationReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

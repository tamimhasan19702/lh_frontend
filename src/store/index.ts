/** @format */

import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "@/store/features/characters/characterSlice";
import { client } from "@/utils/apolloClient";

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          apolloClient: client,
        },
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

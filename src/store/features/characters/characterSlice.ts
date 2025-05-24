/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "@/utils/apolloClient";
import { GET_CHARACTERS } from "@/hooks/useRickAndMorty";

interface CharacterState {
  list: any[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
}

const initialState: CharacterState = {
  list: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
  hasNextPage: false,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (page: number = 1, thunkAPI) => {
    try {
      const { data } = await client.query({
        query: GET_CHARACTERS,
        variables: { page },
        fetchPolicy: "network-only",
      });

      return data.characters;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.list = [...state.list, ...action.payload.results];
        state.currentPage = action.payload.info.page;
        state.totalPages = action.payload.info.pages;
        state.hasNextPage = !!action.payload.info.next;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default characterSlice.reducer;

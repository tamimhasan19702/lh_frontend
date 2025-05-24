/** @format */

// src/store/features/characters/characterSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (page: number = 1) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page= ${page}`
    );
    return response.data;
  }
);

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
        state.error = action.error.message || "Failed to fetch characters";
      });
  },
});

export default characterSlice.reducer;

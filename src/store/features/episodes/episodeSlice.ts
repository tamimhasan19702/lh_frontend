/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define types
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

interface EpisodeState {
  list: Episode[];
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  loading: boolean;
  error: string | null;
  currentPage: number;
}

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode`);
    return response.data;
  }
);

const initialState: EpisodeState = {
  list: [],
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  loading: false,
  error: null,
  currentPage: 1,
};

const episodeSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = [...state.list, ...action.payload.results];
        state.info = action.payload.info;
        state.currentPage = action.payload.info.page;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch episodes";
      });
  },
});

export default episodeSlice.reducer;

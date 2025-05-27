/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define Location type
export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface LocationState {
  list: Location[];
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

export const fetchLocations = createAsyncThunk(
  "locations/fetchLocations",
  async (page: number = 1) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/location?page= ${page}`
    );
    return response.data;
  }
);

const initialState: LocationState = {
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

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.list = [...state.list, ...action.payload.results];
        state.info = action.payload.info;
        state.currentPage = action.payload.info.page;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load locations";
      });
  },
});

export default locationSlice.reducer;

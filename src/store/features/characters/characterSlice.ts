/** @format */

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

export const fetchCharacterById = createAsyncThunk(
  "characters/fetchCharacterById",
  async (id: number) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/ ${id}`
      );

      // Fetch episode details concurrently
      const episodePromises = response.data.episode.map((url: string) =>
        axios.get(url).then((res) => res.data.name)
      );
      const episodeNames = await Promise.all(episodePromises);

      return {
        ...response.data,
        episodeNames,
      };
    } catch (error: any) {
      throw new Error("Character not found");
    }
  }
);

export const fetchEpisodeDetails = createAsyncThunk(
  "characters/fetchEpisodeDetails",
  async (episodeUrls: string[]) => {
    const episodePromises = episodeUrls.map((url) =>
      axios.get(url).then((response) => response.data.name)
    );
    return Promise.all(episodePromises);
  }
);

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterState {
  list: Character[];
  selectedCharacter: Character | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  episodeDetails: string[];
}

const initialState: CharacterState = {
  list: [],
  selectedCharacter: null,
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
  hasNextPage: false,
  episodeDetails: [],
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

    builder
      .addCase(fetchCharacterById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCharacter = action.payload;
      })
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch character";
      });
  },
});

export default characterSlice.reducer;

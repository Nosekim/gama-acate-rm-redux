import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IBookmarksState,
  Character,
  IBookmarks,
} from "../../models/characterType";
import { findPositionById } from "../../utils/utils";
//import { fetchCount } from "./counterAPI";

const initialState: IBookmarks = {
  bookmarks: [],
  status: "idle",
};

/* export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
); */

/* export const counterSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
}); */

const BookmarkData = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggleBookmarks: (state: IBookmarks, action: PayloadAction<string>) => {
      const position = findPositionById(action.payload, state.bookmarks);
      if (position === -1) {
        state.bookmarks = [...state.bookmarks, action.payload];
      } else {
        state.bookmarks.splice(position, 1);
      }
    },
  },
});

export const { toggleBookmarks } = BookmarkData.actions;

export const bookmarkStateData = (state: IBookmarksState) =>
  state.bookmark.bookmarks;

export default BookmarkData.reducer;

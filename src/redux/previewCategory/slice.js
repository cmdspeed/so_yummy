import { createSlice } from "@reduxjs/toolkit";

import { fetchPreviewCategories } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleError = (state) => {
  state.isLoading = false;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    isLoading: false,
  },

  extraReducers: {
    [fetchPreviewCategories.pending]: handlePending,
    [fetchPreviewCategories.rejected]: handleError,
    [fetchPreviewCategories.fulfilled](state, { payload }) {
      state.recipes = payload;

      state.isLoading = false;
    },
  },
});

const recipesReducer = recipesSlice.reducer;
export default recipesReducer;

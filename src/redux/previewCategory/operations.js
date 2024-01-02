import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { BACKEND_URL } from "../../vars/vars";

axios.defaults.baseURL = `${BACKEND_URL}/api`;

export const fetchPreviewCategories = createAsyncThunk(
  "recipes/fetchPreviewCategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/recipes/");

      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

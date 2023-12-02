import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { logIn, register, logOut, refreshUser } from "./authOperations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleError = (state) => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, email: null, avatar: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },

  extraReducers: {
    [register.pending]: handlePending,
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected]: handleError,
    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [logIn.rejected]: handleError,
    [logOut.pending]: handlePending,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, avatarURL: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: handleError,
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.token = null;
      state.isRefreshing = false;
    },
  },
});

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

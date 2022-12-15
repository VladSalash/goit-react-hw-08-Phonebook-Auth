import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    signUp: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    signIn: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    signOut: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    refreshToken: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export const { signUp, signIn, signOut, refreshToken } = authSlice.actions;

export default authSlice;

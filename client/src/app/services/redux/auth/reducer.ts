import { createReducer } from '@reduxjs/toolkit';

import { initialState } from './state';
import { changeAuthState, resetAuthError, signIn, signOut, signUp } from './actions';

export const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeAuthState, (state, action) => {
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('access_token', action.payload.accessToken);
    })
    .addCase(resetAuthError, (state, action) => {
      state.error = '';
    })
    .addCase(signOut, (state, action) => {
      state.loggedIn = false;
      state.accessToken = undefined;
      localStorage.removeItem('access_token');
    })
    .addCase(signIn.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = '';
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('access_token', action.payload.accessToken);
    })
    .addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    })
    .addCase(signUp.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = '';
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.loggedIn = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('access_token', action.payload.accessToken);
    })
    .addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    });
});

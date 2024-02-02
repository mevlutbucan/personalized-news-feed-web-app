import { createReducer } from '@reduxjs/toolkit';

import { initialState } from './state';
import { changeAuthState, signIn, signOut, signUp } from './actions';

export const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeAuthState, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.loggedIn = !!action.payload.accessToken;
    })
    .addCase(signOut, (state, action) => {
      state.loggedIn = false;
      localStorage.removeItem('access_token');
    })
    .addCase(signIn.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = '';
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.loggedIn = true;
      state.loading = false;
      state.success = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('access_token', state.accessToken);
    })
    .addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.payload!;
    })
    .addCase(signUp.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = '';
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.loggedIn = true;
      state.loading = false;
      state.success = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('access_token', state.accessToken);
    })
    .addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      // state.errorCode = action.payload!;
    });
});

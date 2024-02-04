import { createReducer } from '@reduxjs/toolkit';

import { initialState } from './state';
import { changeUserState, updatePreferences } from './actions';

export const UserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeUserState, (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.preferences = action.payload.preferences;
    })
    .addCase(updatePreferences.pending, (state, action) => {
      state.loading = true;
      state.success = false;
      state.error = '';
    })
    .addCase(updatePreferences.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.preferences = action.payload.preferences;
    })
    .addCase(updatePreferences.rejected, (state, action) => {
      state.loading = false;
      // state.error = action.payload!;
    });
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponseBody, SignInFieldValues } from '@shared/core';

import { authService } from '../../..';

export default createAsyncThunk<AuthResponseBody, SignInFieldValues, { rejectValue: string }>(
  'auth/signIn',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await authService.signin(data);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

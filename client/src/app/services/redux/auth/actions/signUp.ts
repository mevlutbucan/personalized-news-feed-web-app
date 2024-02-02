import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponseBody, SignUpFieldValues } from '@shared/core';

import { authService } from '../../..';

export default createAsyncThunk<AuthResponseBody, SignUpFieldValues, { rejectValue: string }>(
  'auth/signUp',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await authService.signup(data);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error as string);
    }
  }
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import type { AuthErrorResponse, AuthResponseBody, SignInFieldValues } from '@shared/core';

import { authService } from '../../..';

export default createAsyncThunk<AuthResponseBody, SignInFieldValues, { rejectValue: AuthErrorResponse }>(
  'auth/signIn',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await authService.signin(data);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data as AuthErrorResponse);
    }
  }
);

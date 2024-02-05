import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios';
import type { AuthErrorResponse, AuthResponseBody, SignUpFieldValues } from '@shared/core';

import { authService } from '../../..';

export default createAsyncThunk<AuthResponseBody, SignUpFieldValues, { rejectValue: AuthErrorResponse }>(
  'auth/signUp',
  async (data, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await authService.signup(data);
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data as AuthErrorResponse);
    }
  }
);

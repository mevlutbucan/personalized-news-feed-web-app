import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserResponseBody, UserUpdateRequestBody } from '@shared/core';

import { userService } from '../../..';

export default createAsyncThunk<
  UserResponseBody,
  { accessToken: string; preferences: NonNullable<UserUpdateRequestBody['preferences']> },
  { rejectValue: string }
>('user/updatePreferences', async (data, { fulfillWithValue, rejectWithValue }) => {
  try {
    const response = await userService.updateUser(data.accessToken, { preferences: data.preferences });
    return fulfillWithValue(response.data);
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

import { createAction } from '@reduxjs/toolkit';
import { UserResponseBody } from '@shared/core';

export const changeUserState = createAction<UserResponseBody>('user/changeState');

export { default as updatePreferences } from './updatePreferences';

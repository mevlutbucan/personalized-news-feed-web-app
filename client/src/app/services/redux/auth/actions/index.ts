import { createAction } from '@reduxjs/toolkit';
import { AuthResponseBody } from '@shared/core';

export const changeAuthState = createAction<AuthResponseBody>('auth/changeState');
export const signOut = createAction('auth/signOut');

export { default as signIn } from './signIn';
export { default as signUp } from './signUp';

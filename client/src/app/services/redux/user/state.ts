import { Source } from '@shared/core';

interface UserPreferences {
  source: Source;
  sections: string[];
}

export interface UserState {
  firstName?: string;
  lastName?: string;
  email?: string;
  preferences: UserPreferences | null;
  loading: boolean;
  success: boolean;
  error?: string;
  // errorCode: string;
}

export const initialState: UserState = {
  preferences: null,
  loading: false,
  success: false,
};

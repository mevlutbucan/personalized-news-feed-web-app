export interface AuthState {
  loggedIn: boolean;
  accessToken?: string;
  loading: boolean;
  success: boolean;
  error?: string;
  // errorCode: string;
}

export const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  success: false,
};

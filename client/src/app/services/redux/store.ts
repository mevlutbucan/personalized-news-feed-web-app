import { configureStore } from '@reduxjs/toolkit';

import { AuthReducer } from './auth/reducer';

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

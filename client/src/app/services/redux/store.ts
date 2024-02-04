import { configureStore } from '@reduxjs/toolkit';

import { AuthReducer } from './auth/reducer';
import { UserReducer } from './user/reducer';

export default configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

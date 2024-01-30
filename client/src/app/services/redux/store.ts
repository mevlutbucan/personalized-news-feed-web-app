import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    // auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

import { configureStore } from '@reduxjs/toolkit';
import { versionApi } from './version';

export const store = configureStore({
  reducer: {
    [versionApi.reducerPath]: versionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(versionApi.middleware),
});

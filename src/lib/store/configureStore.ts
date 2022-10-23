import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";

// Store Api Services
import { podcastsApi } from "@pdcast/lib/store/services/podcasts";

export const store = configureStore({
  reducer: {
    [podcastsApi.reducerPath]: podcastsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const servicesMiddleware = [podcastsApi.middleware];

    if (process.env.NODE_ENV === "development") {
      return getDefaultMiddleware().concat(logger).concat(servicesMiddleware);
    }
    return getDefaultMiddleware().concat(servicesMiddleware);
  },
});

setupListeners(store.dispatch);

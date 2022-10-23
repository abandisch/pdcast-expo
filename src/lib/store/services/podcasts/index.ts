// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "@pdcast/lib/constants";
import type { Podcast } from "@pdcast/lib/types";

// Define a service using a base URL and expected endpoints
export const podcastsApi = createApi({
  reducerPath: "podcastsApi",
  baseQuery: fetchBaseQuery({ baseUrl: api.URL }),
  endpoints: (builder) => ({
    getPodcasts: builder.query({
      query: () => "podcasts",
    }),
    getPodcastById: builder.query<Podcast[], string>({
      query: (id) => `podcasts/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPodcastsQuery, useGetPodcastByIdQuery } = podcastsApi;

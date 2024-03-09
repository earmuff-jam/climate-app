// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const versionApi = createApi({
  reducerPath: 'versionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getVersionDetails: builder.query({
      query: () => `version`,
    }),
  }),
});

export const { useGetVersionDetailsQuery } = versionApi;

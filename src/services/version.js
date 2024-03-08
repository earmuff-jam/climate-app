// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MongoClient, ServerApiVersion } from 'mongodb';

export const getMongoDbConn = () => {
  const credentials = '/dev-cert.perm';
  const client = new MongoClient(
    'mongodb+srv://climate-cluster.oofdrjc.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority&appName=climate-cluster',
    {
      tlsCertificateKeyFile: credentials,
      serverApi: ServerApiVersion.v1,
    }
  );
  return client;
};

export const ping = async () => {
  const client = getMongoDbConn();
  const data = await client.db('items').collection('items').find().toArray();
  console.log('data - ', data);
};

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

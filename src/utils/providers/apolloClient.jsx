"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const adminKey =  process.env.GOOGLE_ID
console.log(adminKey)

const apolloClient = new ApolloClient({
  uri: "https://assuring-seasnail-67.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
    process.env.NEXT_PUBLIC_HASURA_ADMIN_KEY
  },
});

export default apolloClient;

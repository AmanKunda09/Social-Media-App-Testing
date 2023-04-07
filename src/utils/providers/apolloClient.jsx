"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://assuring-seasnail-67.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "Content-Type": "application/json",
    "x-hasura-admin-secret":
      "42HQlvIDUziHuvhg0uq7f05T2Cy0RdhDX7b6mBgt4eM9oF62KM0D5sr9zMowQ4Ut",
  },
});

export default apolloClient;

import { gql } from "@apollo/client";

export const MY_QUERY = gql`
  query MyQuery {
    users {
      username
      id
      gender
      age
    }
  }
`;

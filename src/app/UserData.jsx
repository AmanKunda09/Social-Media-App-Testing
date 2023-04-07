"use client";
import { useQuery } from "@apollo/client";

import { MY_QUERY } from "../graphql/queries";

export default function UserData() {
  const { loading, error, data } = useQuery(MY_QUERY);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something wrong!!!!</h1>;
  if (data) console.log(data.users)
  return (
    <div>
      {data &&
        data.users.map((data) => (
          <div key={data.id}>
            <h1>{data.username}</h1>
          </div>
        ))}
    </div>
  );
}

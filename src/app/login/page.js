"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {

  // const handleLogin = async () => {
  //   const result = await signIn();
  //   console.log("result :", result);
   
    
  // };

  const { data: session } = useSession()
    if (session) {
      return (
        <div>
          <h1>Signed in as {session.user.name} </h1>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
}



import UserData from "./UserData";

export default async function Home() {
  
  return (
    <div>
      <UserData/>
    </div>
  );
}


// 'use client'

// import { useSession, signIn, signOut } from "next-auth/react"
// export default function Home() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <div>
//         <h1>Signed in as {session.user.name} </h1>
//         <button onClick={() => signOut()}>Sign out</button>
//       </div>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
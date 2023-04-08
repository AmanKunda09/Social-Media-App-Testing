import UserData from "./UserData";

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative w-[100%] ">
      <UserData />
    </div>
  );
}

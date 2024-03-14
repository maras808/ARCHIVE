import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
export default async function user() {
  const session = await getServerSession();
  return <pre>{JSON.stringify(session)}</pre>;
}

import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prisma from "../prisma/exportclient";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "text", placeholder: "password" },
      },
      async authorize(credentials) {
        const users = [
          {
            username: "test1",
            password: "pass",
          },
        ];
        const user = users.find(
          (user) =>
            user.username === credentials.username &&
            user.password === credentials.password
        );
        return user ? { name: user.username } : null;
      },
    }),
  ],
});

"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { getAll } from "./ssr";

export const set = async (options: ResponseCookie) => {
  (await cookies()).set({ ...options, httpOnly: true, secure: true });
};

export const remove = async (name: string) => {
  (await cookies()).delete(name);
};

export const removeAll = async () => {
  //(await cookies()).clear(); as of 28.11.24 doesn't work

  (await getAll()).map((cookie) => {
    remove(cookie.name);
  });
};
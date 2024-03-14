import { cookies } from "next/headers";

export const get = async (name: string) => {
  return (await cookies()).get(name);
};

export const getMatching = async (name: string) => {
  return (await cookies()).getAll(name);
};

export const getAll = async () => {
  return (await cookies()).getAll();
};

export const exists = async (name: string) => {
  return (await cookies()).has(name);
};
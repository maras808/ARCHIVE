"use server";

import { cookies } from "next/headers";

export async function Fcookie(method, name, value?) {
  if (method === "set") {
    cookies().set(`${name}`, `${value}`);
  }
  if (method === "get") {
    return cookies().get(`${name}`)?.value;
  }
}

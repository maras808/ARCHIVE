import { redirect } from "next/navigation";

export default function catchAll() {
  return redirect("/");
}

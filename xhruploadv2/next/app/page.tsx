import CustomSuspense from "@/src/_features/_home/components/customsuspense";
import Home from "@/src/_features/_home/home";
import { Suspense } from "react";

export default async function HomeRoot() {
  return (
    <Suspense fallback={<CustomSuspense></CustomSuspense>}>
      <Home></Home>
    </Suspense>
  );
}

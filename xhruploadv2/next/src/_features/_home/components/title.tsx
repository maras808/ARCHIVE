import Typewriter from "@/src/components/typewriter";
import { getTitle } from "../cms/queries";

export default async function Title() {
  const res = await getTitle();

  return (
    <Typewriter sx={{ textAlign: "center", fontSize: "2rem" }}>
      {res.data.home.title}
    </Typewriter>
  );
}

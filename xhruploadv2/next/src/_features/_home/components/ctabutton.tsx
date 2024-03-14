import { getButton } from "../cms/queries";
import ButtonClient from "./buttonclient";

export default async function CTAButton() {
  const res = await getButton();
  return (
    <ButtonClient href={res.data.home.button.href.value}>
      {res.data.home.button.name}
    </ButtonClient>
  );
}

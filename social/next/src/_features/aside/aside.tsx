import { Stack } from "@mui/material";
import { getAside } from "./cms/queries";
import Entry from "./components/entry";

export default async function Aside() {
  const cms = await getAside();

  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        gap: 1,
      }}
    >
      {cms.data.aside.entries.map((entry, index) => {
        return <Entry key={index} icon={entry.icon} link={entry.link}></Entry>;
      })}
    </Stack>
  );
}

import { Stack } from "@mui/material";
import Buttons from "./components/Buttons";
import Friend from "./components/Friend";

export default function Contacts() {
  return (
    <Stack gap={4} height={"100%"}>
      <Stack gap={1} flexGrow={1}>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
      </Stack>
      <Buttons></Buttons>
    </Stack>
  );
}

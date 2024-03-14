import { Link, LinkProps } from "@mui/material";
import NextLink from "next/link";

export default function MuiLink(props: LinkProps) {
  return <Link component={NextLink} {...props} color="inherit"></Link>;
}

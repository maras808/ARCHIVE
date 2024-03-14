import { NavigationRouteType } from "@/utils/globals";
import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { ReactNode, useContext } from "react";
import Backdrop from "./backdrop";
import NavbarDropdown from "./navbardropdown";
import { NavigationContext } from "./navigation";

type NavigationEntryType = {
  entry: NavigationRouteType;
  children: ReactNode;
};

export default function NavigationEntry({
  entry,
  children,
}: NavigationEntryType) {
  const { isActive, setIsActive } = useContext(NavigationContext);

  return (
    <>
      <Box onClick={() => setIsActive(entry.displayName)}>
        {entry.displayName}
      </Box>
      <AnimatePresence>
        {isActive === entry.displayName && (
          <>
            <NavbarDropdown>{children}</NavbarDropdown>
            <Backdrop></Backdrop>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

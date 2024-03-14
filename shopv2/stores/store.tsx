import { proxy } from "valtio";

interface store {
  isSmallWidth: number;
  isSmall: boolean;
}

const store = proxy<store>({
  isSmallWidth: 1100,
  isSmall: false,
});

export default store;

import { proxy } from "valtio";

interface mainStore {
  isSmallWidth: number;
  isSmall: boolean;
}

const mainStore = proxy<mainStore>({
  isSmallWidth: 1000,
  isSmall: false,
});

export default mainStore;

import { proxy } from "valtio";

interface store {
  currentId: string;

  changeCurrentId: (newid: string) => void;
}

const store = proxy<store>({
  currentId: "",
  changeCurrentId(newid) {
    store.currentId = newid;
  },
});

export default store;

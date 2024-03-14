import { proxy } from "valtio";

interface store {
  sortArr: any;
  genArr: () => void;
  shuffleArr: () => void;
  clearArr: () => void;
}

const store = proxy<store>({
  sortArr: [],
  genArr() {
    for (let i = 1; i <= 50; i++) {
      store.sortArr.push(i);
    }
  },
  shuffleArr() {
    for (let i = store.sortArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [store.sortArr[i], store.sortArr[j]] = [
        store.sortArr[j],
        store.sortArr[i],
      ];
    }
  },
  clearArr() {
    store.sortArr = [];
  },
});

export default store;

import { proxy } from "valtio";

interface store {
  darkmode: boolean;
  renderCookies: boolean;
}

const store = proxy<store>({
  darkmode: false,
  renderCookies: true,
});

export default store;

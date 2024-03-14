import { proxy } from "valtio";

interface store {
  mobile: boolean;
  small: boolean;
  mobileWidth: number;
  smallWidth: number;
  menu: boolean;
}

const store = proxy<store>({
  mobile: true,
  small: true,
  mobileWidth: 1050,
  smallWidth: 1450,
  menu: false,
});

export default store;

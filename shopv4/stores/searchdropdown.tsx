import { proxy } from "valtio";

interface searchdropdown {
  isOn: boolean;
  payload: {
    name: String;
  };
}

const searchdropdown = proxy<searchdropdown>({
  isOn: false,
  payload: {
    name: "",
  },
});

export default searchdropdown;

import { proxy } from "valtio";

interface optionsstripdropdown {
  isOn: boolean;
  resetArr: boolean;
  payload: Object;
}

const optionsstripdropdown = proxy<optionsstripdropdown>({
  isOn: false,
  resetArr: false,
  payload: {},
});

export default optionsstripdropdown;

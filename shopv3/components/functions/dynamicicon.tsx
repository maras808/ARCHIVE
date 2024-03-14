import * as IconsAi from "react-icons/ai";
import * as IconsBs from "react-icons/bs";
import * as IconsFa from "react-icons/fa";

export const DynamicIcon = ({ name }) => {
  console.log(name);
  var IconComponent;
  switch (String(name).substring(0, 2)) {
    case "Ai":
      IconComponent = IconsAi[name];
      break;
    case "Bs":
      IconComponent = IconsBs[name];
      break;
    case "Fa":
      IconComponent = IconsFa[name];
      break;
    default:
      IconComponent = IconsAi[name];
  }
  if (!IconComponent) {
    return <IconsBs.BsDashLg />;
  }

  return <IconComponent />;
};

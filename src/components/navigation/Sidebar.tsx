import { useState } from "react";
import Item from "./Item";
import BarItem from "./BarItem";
import routes, { IRoute } from "./routes";

import Logo from "../../assets/imgs/pets-and-paws-letters.png";
import ChevronFirstIcon from "../../assets/svgs/chevron-first.svg";
import ChevronLastIcon from "../../assets/svgs/chevron-last.svg";

function Sidebar() {
  const [expanded, setExpanded] = useState<boolean>(true);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="h-screen text-seconday border-r-2">
      <div className={` h-full flex flex-col gap-2 p-4`}>

        <div className="px-6">
          <img src={Logo} className={`${expanded ? "w-44" : "w-0"} transition-all mx-auto`} />
        </div>

        {
          routes.main.map((route: IRoute) => (
            <BarItem expanded={expanded} {...route}></BarItem>
          ))
        }
        <hr />
        {
          routes.secondary.map((route: IRoute) => (
            <BarItem expanded={expanded} {...route}></BarItem>
          ))
        }

        <div onClick={toggleExpanded}>
          <Item icon={expanded ? ChevronFirstIcon : ChevronLastIcon} text="Collapse" expanded={expanded}></Item>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
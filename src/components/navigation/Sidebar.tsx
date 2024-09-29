import { useState, createContext } from "react";
import SidebarItem from "./SidebarItem";
import Item from "./Item";
import Logo from "../../assets/imgs/pets-and-paws-letters.png";
import ChevronFirstIcon from "../../assets/svgs/chevron-first.svg";
import ChevronLastIcon from "../../assets/svgs/chevron-last.svg";

// Item Icons
import HomeIcon from "../../assets/svgs/home.svg";
import BackgroundIcon from "../../assets/svgs/background.svg";
import ProfileIcon from "../../assets/svgs/profile.svg";

interface ISidebarContext { expanded: boolean; };
export const SidebarContext = createContext<ISidebarContext>({ expanded: true });

function Sidebar() {
  const [expanded, setExpanded] = useState<boolean>(true);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="h-screen text-seconday border-r-2">
      <div className={` h-full flex flex-col gap-2 p-4`}>

        <div className="px-6">
          <img src={Logo} className={`${expanded ? "w-44" : "w-0"} transition-all mx-auto`} />
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <SidebarItem icon={HomeIcon} text="Home" active={false} route="/home"></SidebarItem>
          <SidebarItem icon={BackgroundIcon} text="Testing" active={false} route="/testing"></SidebarItem>
          <hr />
          <SidebarItem icon={ProfileIcon} text="Profile" active={false} route="/profile"></SidebarItem>

          <div onClick={toggleExpanded}>
            <Item icon={expanded ? ChevronFirstIcon : ChevronLastIcon} text="Collapse"></Item>
          </div>
        </SidebarContext.Provider>

      </div>
    </div>
  );
};

export default Sidebar;
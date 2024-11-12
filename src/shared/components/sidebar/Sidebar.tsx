import useNavigationStore from "@stores/useNavigationStore";
import SidebarItem from "./SidebarItem";
import Item from "./Item";
import routes, { IRoute } from "./routes";

import LogoLetters from "@assets/imgs/pets-and-paws-letters.png";
import ChevronIcon from "@assets/svgs/chevron-last.svg";

function Sidebar() {
  const { expanded, setExpanded } = useNavigationStore();
  const responsive = `${expanded ? "w-screen md:w-fit absolute md:relative z-50" : null}`

  return (
    <div className={`h-screen bg-white text-cs-blue-300 border-r-2 ${responsive}`}>
      <div className="h-full flex flex-col gap-2 p-4">

        <div className="px-6">
          <img src={LogoLetters} className={`${expanded ? "w-44" : "w-0"} transition-all mx-auto`} />
        </div>

        {
          routes.primary.map((route: IRoute) => (
            <SidebarItem {...route} key={`item-${route.name}`}></SidebarItem>
          ))
        }
        <hr />
        {
          routes.secondary.map((route: IRoute) => (
            <SidebarItem {...route} key={`item-${route.name}`}></SidebarItem>
          ))
        }

        <div onClick={setExpanded} className="cursor-pointer">
          <Item icon={ChevronIcon} name="Collapse"></Item>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
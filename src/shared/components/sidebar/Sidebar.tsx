import TokenService from "@services/TokenService";
import useNavigationStore from "@stores/useNavigationStore";
import routes, { IRoute } from "./routes";
import SidebarItem from "./SidebarItem";
import Item from "./Item";

import LogoLetters from "@assets/imgs/pets-and-paws-letters.png";
import ChevronRightIcon from "@assets/svgs/chevron-right.svg";
import ChevronLefttIcon from "@assets/svgs/chevron-left.svg";

function Sidebar() {
  const { expanded, setExpanded } = useNavigationStore();
  const responsive = `${expanded ? "w-screen md:w-fit absolute md:relative z-50" : null}`;

  const { charge } = TokenService.payload();

  return (
    <div className={`h-screen bg-white text-cs-blue-300 border-r-2 ${responsive}`}>
      <div className="h-full flex flex-col gap-2 p-4">

        <div className="px-6">
          <img src={LogoLetters} className={`${expanded ? "w-44" : "w-0"} transition-all mx-auto`} />
        </div>

        {
          routes.primary.filter(route => route.roles.some(role => charge.includes(role))).map((route: IRoute) => (
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
          <Item icon={expanded ? ChevronLefttIcon : ChevronRightIcon} name="Collapse"></Item>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
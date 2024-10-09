import Item from "./Item";
import SidebarItem from "./SidebarItem";
import routes, { IRoute, IRouteTest } from "./routes";
import useNavigationStore from "../../stores/useNavigationStore";
import useAuthStore from "../../stores/useAuthStore";

import Logo from "../../assets/imgs/pets-and-paws-letters.png";
import ChevronFirstIcon from "../../assets/svgs/chevron-first.svg";
import ChevronLastIcon from "../../assets/svgs/chevron-last.svg";

function Sidebar() {
  const { expanded, setExpanded } = useNavigationStore();
  const { scopes } = useAuthStore();

  const responsive = `${expanded ? "w-screen absolute md:relative z-50 md:w-fit" : null}`;

  return (
    <div className={`h-screen bg-white text-seconday border-r-2 ${responsive}`}>
      <div className="h-full flex flex-col gap-2 p-4">

        <div className="px-6">
          <img src={Logo} className={`${expanded ? "w-44" : "w-0"} transition-all mx-auto`} />
        </div>

        {
          routes.main.map((route: IRoute) => (
            <SidebarItem {...route} key={`item-${route.text}`}></SidebarItem>
          ))
        }
        {
          routes.tests
            .filter((route: IRouteTest) => route.scopes.some((scope: string) => scopes?.includes(scope)))
            .map((route: IRouteTest) => (
              <SidebarItem text={route.text} path={route.path} icon={route.icon} key={`item-${route.text}`}></SidebarItem>
            ))
        }
        <hr />
        {
          routes.secondary.map((route: IRoute) => (
            <SidebarItem {...route} key={`item-${route.text}`}></SidebarItem>
          ))
        }

        <div onClick={setExpanded} className="cursor-pointer">
          <Item icon={expanded ? ChevronFirstIcon : ChevronLastIcon} text="Collapse"></Item>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
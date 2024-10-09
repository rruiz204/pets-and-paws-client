import HomeIcon from "../../assets/svgs/home.svg";
import TestingIcon from "../../assets/svgs/background.svg";
import ProfileIcon from "../../assets/svgs/profile.svg";
import UsersIcon from "../../assets/svgs/users.svg";

export interface IRoute {
  text: string;
  path: string;
  icon: string;
};

export interface IRouteTest extends IRoute {
  scopes: string[]
};

const main: IRoute[] = [
  { text: "Home", path: "/home", icon: HomeIcon },
  { text: "Testing", path: "/testing", icon: TestingIcon },
];

const secondary: IRoute[] = [
  { text: "Profile", path: "/profile", icon: ProfileIcon },
];

const tests: IRouteTest[] = [
  { text: "Users", path: "/users", icon: UsersIcon, scopes: ["user:read"] }
];

interface IRoutes {
  main: IRoute[];
  secondary: IRoute[];
  tests: IRouteTest[]
}

const routes: IRoutes = { main, secondary, tests };
export default routes;
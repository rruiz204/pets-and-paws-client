import HomeIcon from "../../assets/svgs/home.svg";
import TestingIcon from "../../assets/svgs/background.svg";
import ProfileIcon from "../../assets/svgs/profile.svg";

export interface IRoute {
  text: string;
  path: string;
  icon: string;
};

const main: IRoute[] = [
  { text: "Home", path: "/home", icon: HomeIcon },
  { text: "Testing", path: "/testing", icon: TestingIcon },
];

const secondary: IRoute[] = [
  { text: "Profile", path: "/profile", icon: ProfileIcon },
];

interface IRoutes {
  main: IRoute[];
  secondary: IRoute[];
}

const routes: IRoutes = { main, secondary };
export default routes;
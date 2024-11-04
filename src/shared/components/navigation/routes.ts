import HomeIcon from "@assets/svgs/home.svg";
import ProfileIcon from "@assets/svgs/profile.svg";

export interface IRoute {
  name: string;
  path: string;
  icon: string;
};

const main: IRoute[] = [
  { name: "Home", path: "/home", icon: HomeIcon },
];

const others: IRoute[] = [
  { name: "Profile", path: "/profile", icon: ProfileIcon },
];

interface IRoutes {
  main: IRoute[];
  others: IRoute[];
};

const Routes: IRoutes = { main, others };

export default Routes;
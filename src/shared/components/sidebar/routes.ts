import HomeIcon from "@assets/svgs/home.svg";
import ProfileIcon from "@assets/svgs/profile.svg";
import PawIcon from "@assets/svgs/paw.svg";

export interface IRoute {
  name: string;
  path: string;
  icon: string;
};

const primary: IRoute[] = [
  { name: "Home", path: "/home", icon: HomeIcon },
  { name: "Pets Directory", path: "/pets-directory", icon: PawIcon },
];

const secondary: IRoute[] = [
  { name: "Profile", path: "/profile", icon: ProfileIcon },
];

interface IRoutes {
  primary: IRoute[];
  secondary: IRoute[];
};

const routes: IRoutes = { primary, secondary };

export default routes;
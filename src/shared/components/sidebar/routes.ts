import HomeIcon from "@assets/svgs/home.svg";
import ProfileIcon from "@assets/svgs/profile.svg";
import PawIcon from "@assets/svgs/paw.svg";
import PermissionIcon from "@assets/svgs/permission.svg";

export interface IRoute {
  name: string;
  path: string;
  icon: string;
  roles: string[];
};

const primary: IRoute[] = [
  {
    name: "Home", path: "/home",
    icon: HomeIcon, roles: ["admin", "veterinarian"]
  },
  {
    name: "Pets Directory", path: "/pets/directory",
    icon: PawIcon, roles: ["admin", "veterinarian"]
  },
  {
    name: "Roles", path: "/security/roles",
    icon: PermissionIcon, roles: ["admin"]
  },
];

const secondary: IRoute[] = [
  {
    name: "Profile", path: "/profile",
    icon: ProfileIcon, roles: ["admin", "veterinarian"]
  },
];

interface IRoutes {
  primary: IRoute[];
  secondary: IRoute[];
};

const routes: IRoutes = { primary, secondary };

export default routes;
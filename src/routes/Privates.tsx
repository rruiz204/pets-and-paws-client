import { RouteObject } from "react-router-dom";
import Home from "../modules/home/Home";
import Testing from "../modules/testing/Testing";
import Profile from "../modules/profile/Profile";

const privates: RouteObject[] = [
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/testing",
    element: <Testing/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
];

export default privates;
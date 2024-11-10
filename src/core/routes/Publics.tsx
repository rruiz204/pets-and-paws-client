import { RouteObject } from "react-router-dom";
import Login from "@modules/authentication/login";
import Forgot from "@modules/authentication/forgot";
import Reset from "@modules/authentication/reset";

const publics: RouteObject[] = [
  { path: "/login", element: <Login/> },
  { path: "/forgot-password", element: <Forgot/> },
  { path: "/reset-password/:token", element: <Reset/> },
];

export default publics;
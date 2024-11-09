import { RouteObject } from "react-router-dom";
import Login from "@modules/authentication/login";
import Forgot from "@modules/authentication/password/forgot";
import Reset from "@modules/authentication/password/reset";

const publics: RouteObject[] = [
  { path: "/login", element: <Login/> },
  { path: "/forgot-password", element: <Forgot/> },
  { path: "/reset-password", element: <Reset/> },
];

export default publics;
import { RouteObject } from "react-router-dom";
import Login from "@modules/authentication/login";
import Forgot from "@modules/authentication/password/forgot/Forgot";
import Reset from "@modules/authentication/password/reset/Reset";

const publics: RouteObject[] = [
  { path: "/login", element: <Login/> },
  { path: "/forgot-password", element: <Forgot/> },
  { path: "/reset-password", element: <Reset/> },
];

export default publics;
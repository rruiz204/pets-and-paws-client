import { RouteObject } from "react-router-dom";
import Login from "@modules/authentication/login/Login";

const publics: RouteObject[] = [
  { path: "/login", element: <Login/> }
];

export default publics;
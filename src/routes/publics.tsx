import { RouteObject } from "react-router-dom";
import Login from "../modules/login/Login";
import Register from "../modules/register/Register";

const publics: RouteObject[] = [
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
];

export default publics;
import { RouteObject } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";

const privates: RouteObject[] = [
  {
    path: "/home",
    element: <Dashboard/>
  },
];

export default privates;
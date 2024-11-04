import { RouteObject } from "react-router-dom";
import MainLayout from "@core/layouts/MainLayout";
import Home from "@modules/home/Home";

const privates: RouteObject[] = [
  { path: "/", element: <MainLayout/>, children: [
    { path: "/home", element: <Home/> },
  ]}
];

export default privates;
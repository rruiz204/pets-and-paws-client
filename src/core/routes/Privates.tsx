import { RouteObject } from "react-router-dom";
import MainLayout from "@core/layouts/MainLayout";
import Home from "@modules/home/Home";
import Directory from "@modules/pets/directory";
import Profile from "@modules/profile/me";
import Permissions from "@modules/security/permissions";

const privates: RouteObject[] = [
  { path: "/", element: <MainLayout/>, children: [
    { path: "/home", element: <Home/> },
    
    { path: "/pets", children: [
      { path: "directory", element: <Directory/> }
    ]},
    
    { path: "/profile", children: [
      { path: "me", element: <Profile/> }
    ]},

    { path: "/security", children: [
      { path: "permissions", element: <Permissions/> }
    ]}
  ]}
];

export default privates;
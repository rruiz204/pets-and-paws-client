import { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../modules/home/Home";
import Testing from "../modules/testing/Testing";
import Profile from "../modules/profile/Profile";
import Users from "../modules/users/Users";

const privates: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "testing",
        element: <Testing />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "users",
        element: <Users />
      }
    ]
  }
];

export default privates;
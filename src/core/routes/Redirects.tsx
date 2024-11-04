import { Navigate, RouteObject } from "react-router-dom";

const redirects: RouteObject[] = [
  { path: "/", element: <Navigate to="/login" replace/> }
];

export default redirects;
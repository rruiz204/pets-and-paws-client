import TokenService from "@services/TokenService";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
};

function AuthGuard({ children }: Props) {
  const token = TokenService.obtain();
  if (!token) return <Navigate to={"/login"}/>
  return children;
};

export default AuthGuard;
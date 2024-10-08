import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";

interface Props {
  children: ReactNode;
};

function AuthGuard({ children }: Props) {
  const { token } = useAuthStore();
  if (!token) return <Navigate to={"/login"}></Navigate>
  return children;
};

export default AuthGuard;
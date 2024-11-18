import TokenService from "@services/TokenService";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
};

function AuthGuard({ children }: Props) {
  const token = TokenService.obtain();
  if (!token) return <Navigate to={"/login"}/>
  return children;
};

export default AuthGuard;
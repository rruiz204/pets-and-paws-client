import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import AuthGuard from "../guards/AuthGuard";

function MainLayout() {
  return (
    <AuthGuard>
      <div className="flex">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="content flex-1 px-8 py-6 text-seconday">
          <Outlet></Outlet>
        </div>
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
import AuthGuard from "@core/guards/AuthGuard";
import Sidebar from "@shared/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <AuthGuard>
      <div className="flex">
        <div>
          <Sidebar></Sidebar>
        </div>

        <div className="content flex-1 px-8 py-6">
          <Outlet></Outlet>
        </div>
      </div>
    </AuthGuard>
  );
};

export default MainLayout;
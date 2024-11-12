import { Outlet } from "react-router-dom";
import Sidebar from "@shared/components/sidebar/Sidebar";

function MainLayout() {
  return (
    <div className="flex">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div className="content flex-1 px-8 py-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
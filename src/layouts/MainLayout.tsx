import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Topbar from "../components/navigation/Topbar";

function MainLayout() {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <div className="hidden md:block">
          <Sidebar></Sidebar>
        </div>
        <div className="md:hidden">
          <Topbar></Topbar>
        </div>
      </div>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
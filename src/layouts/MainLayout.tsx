import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
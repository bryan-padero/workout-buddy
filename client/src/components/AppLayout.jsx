import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div className="pages">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;

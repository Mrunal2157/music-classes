import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <div className="">
      <Navbar />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

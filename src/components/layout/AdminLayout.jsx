import { Outlet } from "react-router-dom";
import Navbar from "../organism/Navbar";
import Sidebar from "../organism/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="fixed w-full z-20">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row h-screen pt-18.5">
        <Sidebar />
        <div className="md:ml-64 p-8 bg-[#fdf8f2] w-full h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

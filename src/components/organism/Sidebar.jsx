import { Link,useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full md:w-64 md:h-screen bg-white shadow-lg border-r border-t border-[#3A35411F] md:fixed z-10">
      <h1 className="text-center py-4 text-2xl text-[#f64920] font-poppins font-semibold text-shadow-sm">Admin Page</h1>
      <ul className="my-4 px-4 text-center space-y-1">
        <li className={`p-2 py-3 rounded-md font-poppins font-semibold text-gray-600 text-lg cursor-pointer transition duration-200 ${location.pathname === "/admin" ? "bg-yellow-50 text-yellow-500 shadow-lg" : "hover:text-gray-900 hover:bg-gray-50"}`}>
          <Link to={"/admin"}>Dashboard</Link>
        </li>
        <li className={`p-2 py-3 rounded-md font-poppins font-semibold text-gray-600 text-lg cursor-pointer transition duration-200 ${location.pathname === "/admin/product" ? "bg-yellow-50 text-yellow-500 shadow-lg" : "hover:text-gray-900 hover:bg-gray-50"}`}>
          <Link to={"/admin/product"}>Product</Link>
        </li>
        <li className={`p-2 py-3 rounded-md font-poppins font-semibold text-gray-600 text-lg cursor-pointer transition duration-200 ${location.pathname === "/admin/users" ? "bg-yellow-50 text-yellow-500 shadow-lg" : "hover:text-gray-900 hover:bg-gray-50"}`}>
          <Link to={"/admin/users"}>Users</Link>
        </li>
        {/* <li className={`p-2 py-3 rounded-md font-poppins font-semibold text-lg cursor-pointer transition duration-200 ${location.pathname === "/admin/settings" ? "bg-yellow-50 text-yellow-500 shadow-lg" : "hover:text-gray-900 hover:bg-gray-50"}`}>
          <Link to={"/admin/settings"}>Settings</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;

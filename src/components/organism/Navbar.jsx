import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LogoImage from "../../assets/images/LogoBelajar.png";
import ProfilAccount from "../../assets/images/Profile.png";
import IconLogOut from "../../assets/images/IconLogOut.png";
import Button from "../atom/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminPage = location.pathname.startsWith("/admin");
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  const HandleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-lg relative w-full h-18.5 border border-[#3A35411F] md:shadow-none px-6 py-4 md:px-15 lg:px-30 lg:py-3 flex justify-between items-center z-11">
      <Link to="/">
        <img src={LogoImage} alt="logo" className={"h-10 w-auto"} />
      </Link>
      {isAuthPage ? null : user ? (
        <>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to={isAdminPage ? "/" : "/admin"}
              className="cursor-pointer text-[#333333AD] font-dm-sans text-base font-medium hover:underline"
            >
              {isAdminPage ? "Beranda" : "Admin"}
            </Link>
            <Link
              to="/"
              className="cursor-pointer text-[#333333AD] font-dm-sans text-base font-medium hover:underline"
            >
              Kategori
            </Link>

            <details className="relative">
              <summary className="list-none cursor-pointer">
                <img
                  src={ProfilAccount}
                  alt="Profile"
                  className="w-10 h-10 rounded-[10px] border-none"
                />
              </summary>
              <ul className="absolute md:right-0 mt-3 w-50 py-4 bg-white border rounded-br-[10px] rounded-bl-[10px] border-[#3A35411F] shadow-lg z-11">
                <li>
                  <Link
                    to="/"
                    className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                  >
                    Profil Saya
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                  >
                    Kelas Saya
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                  >
                    Pesanan Saya
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={HandleLogout}
                    className="block text-[#FF5C2B] px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                  >
                    Keluar{" "}
                    <img src={IconLogOut} alt="Keluar" className="inline h-6" />
                  </Link>
                </li>
              </ul>
            </details>
          </div>

          {/* Mobile Navbar Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>

          {/* Mobile Navbar List */}
          <div
            className={`md:hidden absolute w-full left-0 top-18.5 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-125 opacity-100 z-11" : "max-h-0 opacity-0 z-0"}`}
          >
            <ul className="py-1 rounded-br rounded-bl bg-white shadow-lg z-1">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  Kategori
                </Link>
              </li>
              <li>
                <Link
                  to={isAdminPage ? "/" : "/admin"}
                  onClick={() => setIsOpen(!isOpen)}
                  className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  {isAdminPage ? "Beranda" : "Admin"}
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  Profil Saya
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  Kelas Saya
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  Pesanan Saya
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={HandleLogout}
                  className="block text-[#FF5C2B] px-3 py-4 border-b border-[#3A35411F] hover:bg-orange-100"
                >
                  Keluar{" "}
                  <img src={IconLogOut} alt="Keluar" className="inline h-6" />
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex items-center space-x-9 w-64">
            <Link
              to="/"
              className="cursor-pointer text-[#333333AD] font-dm-sans text-base font-medium hover:underline"
            >
              Kategori
            </Link>
            <div className="flex w-56.75 gap-4">
              <Button variant="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button variant="secondary" onClick={() => navigate("/register")}>
                Register
              </Button>
            </div>
          </div>
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
          <div
            className={`md:hidden absolute w-full left-0 top-18.5 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-125 opacity-100 z-11" : "max-h-0 opacity-0 z-0"}`}
          >
            <ul className=" flex justify-around px-4 py-1 gap-3 rounded-br rounded-bl bg-white shadow-lg z-1">
              <li className="block flex-1 py-2 border-b border-[#3A35411F]">
                <Button variant="primary" onClick={() => navigate("/login")}>
                  Login
                </Button>
              </li>
              <li className="block flex-1 py-2 border-b border-[#3A35411F]">
                <Button
                  variant="secondary"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getUsers } from "../../services/api/usersApi";
import LogoMata from "../../assets/images/Mata.png";
import LogoMataTerbuka from "../../assets/images/MataTerbuka.png";
import LogoGoogle from "../../assets/images/LogoGoogle.png";

import Button from "../atom/Button";

const FormLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [alerts, setAlerts] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newAlerts = {};

    if (!user.email.trim()) newAlerts.email = "Mohon isi email.";
    if (!user.password) newAlerts.password = "Mohon isi password.";

    if (Object.keys(newAlerts).length > 0) {
      setAlerts(newAlerts);
      return;
    }

    try {
      setLoading(true);
      const users = await getUsers();

      const foundUser = users.find(
        (u) => u.email === user.email && u.password === user.password,
      );

      if (foundUser) {
        const { password, ...userData } = foundUser;
        localStorage.setItem("currentUser", JSON.stringify(userData));
        alert("Login berhasil! Selamat datang, " + foundUser.name);
        navigate("/");
      } else {
        alert("Email atau password salah!");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Terjadi kesalahan");
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          E-Mail <span className="text-red-600">*</span>
        </label>
        <input
          className="w-full border border-[#3A35411F] rounded-md p-3"
          type="email"
          placeholder=""
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
            setAlerts({ ...alerts, email: "" });
          }}
        />
        {alerts.email && (
          <p className="text-red-500 text-sm mt-1">{alerts.email}</p>
        )}
      </div>

      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Password <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            className="w-full border border-[#3A35411F] rounded-md p-3 pr-10"
            type={showPassword ? "text" : "password"}
            placeholder=""
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
              setAlerts({ ...alerts, password: "" });
            }}
          />
          <img
            src={showPassword ? LogoMataTerbuka : LogoMata}
            alt="mata"
            onClick={() => setShowPassword(!showPassword)}
            className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer"
          />
        </div>
        {alerts.password && (
          <p className="text-red-500 text-sm mt-1">{alerts.password}</p>
        )}
      </div>

      <div className="text-right">
        <Link
          to="#"
          className="text-sm md:text-[16px] font-medium text-[#333333AD] hover:underline"
        >
          Lupa Password?
        </Link>
      </div>

      <Button disabled={loading} type="submit" variant="primary">
        {loading ? "Loading..." : "Masuk"}
      </Button>

      <Button
        type="button"
        variant="secondary"
        onClick={() => navigate("/register")}
      >
        Daftar
      </Button>

      <div className="flex items-center my-6">
        <div className="grow border-b border-[#ccc]" />
        <span className="mx-2 text-[#333333ad] text-sm md:text-[16px]">
          atau
        </span>
        <div className=" grow border-b border-[#ccc]" />
      </div>

      <Button variant="others">
        <img
          src={LogoGoogle}
          alt="google"
          className="w-5 h-5 mr-2 inline-block"
        />{" "}
        Masuk dengan Google
      </Button>
    </form>
  );
};

export default FormLogin;

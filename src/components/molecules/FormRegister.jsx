import LogoMata from "../../assets/images/Mata.png";
import LogoMataTerbuka from "../../assets/images/MataTerbuka.png";
import LogoGoogle from "../../assets/images/LogoGoogle.png";
import Bendera from "../../assets/images/Indonesia.png";

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { createUser } from "../../services/api/usersApi";
import Button from "../atom/Button";

const FormRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alerts, setAlerts] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newAlerts = {};

    if (!user.name.trim()) newAlerts.name = "Mohon isi nama lengkap.";
    if (!user.email.trim()) newAlerts.email = "Mohon isi email.";
    if (!user.phone.trim()) newAlerts.phone = "Mohon isi nomor telepon.";
    if (!user.password) newAlerts.password = "Mohon isi password.";
    if (!user.confirmPassword)
      newAlerts.confirmPassword = "Mohon isi konfirmasi password.";

    if (user.password !== user.confirmPassword) {
      newAlerts.confirmPassword =
        "Password dan konfirmasi password tidak cocok.";
    }

    if (Object.keys(newAlerts).length > 0) {
      console.log(newAlerts);
      setAlerts(newAlerts);
      return;
    }

    try {
      setLoading(true);
      const { confirmPassword, ...rest } = user;
      await createUser(rest);
      alert("Registrasi berhasil! Silakan login dengan akun Anda.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Nama Lengkap <span className="text-red-600">*</span>
        </label>
        <input
          className="w-full border border-[#3A35411F] rounded-md p-3"
          type="text"
          placeholder=""
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          // required
        />
        {alerts.name && (
          <p className="text-red-500 text-sm mt-1">{alerts.name}</p>
        )}
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          E-Mail <span className="text-red-600">*</span>
        </label>
        <input
          className="w-full border border-[#3A35411F] rounded-md p-3"
          type="email"
          placeholder=""
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          // required
        />
        {alerts.email && (
          <p className="text-red-500 text-sm mt-1">{alerts.email}</p>
        )}
      </div>

      <div className="flex flex-col space-y-1">
        <label
          htmlFor="phone"
          className="text-sm md:text-[16px] font-regular text-[#4A505C]"
        >
          No. Hp <span className="text-red-600">*</span>
        </label>

        <div className="flex items-center">
          <div className="w-12 h-12 bg-[#f0f0f0] flex items-center justify-center border border-[#3a35411f] rounded-l-md">
            <img src={Bendera} alt="Indonesia" className="w-6 h-6" />
          </div>
          <select
            name="kode"
            className="h-12 px-2 text-sm md:text-[16px] bg-white border border-[#3A35411F] rounded-r-lg focus:ring-1 focus:ring-zinc-800 outline-none"
          >
            <option value="+62">+62</option>
          </select>
          <input
            className="flex-1 w-full h-12 px-3 ml-2 border border-[#3a35411f] rounded-md focus:ring-2 focus:ring-zinc-800 outline-none"
            type="tel"
            id="phone"
            name="phone"
            placeholder=""
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            // required
          />
        </div>
        {alerts.phone && (
          <p className="text-red-500 text-sm mt-1">{alerts.phone}</p>
        )}
      </div>

      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Kata Sandi <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            className="w-full border border-[#3A35411F] rounded-md p-3 pr-10"
            type={showPassword ? "text" : "password"}
            placeholder=""
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            // required
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? LogoMataTerbuka : LogoMata}
            alt="mata"
            className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer"
          />
        </div>
        {alerts.password && (
          <p className="text-red-500 text-sm mt-1">{alerts.password}</p>
        )}
      </div>

      <div className="flex flex-col space-y-1 relative">
        <label className="text-sm md:text-[16px] font-regular text-[#4A505C]">
          Konfirmasi Kata Sandi <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            className="w-full border border-[#3A35411F] rounded-md p-3 pr-10"
            type={showConfirmPassword ? "text" : "password"}
            placeholder=""
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            // required
          />
          <img
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            src={showConfirmPassword ? LogoMataTerbuka : LogoMata}
            alt="mata"
            className="w-6 h-6 absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer"
          />
        </div>
        {alerts.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{alerts.confirmPassword}</p>
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

      <Button disabled={loading} variant="primary" type="submit">
        {loading ? "Mendaftar...." : "Daftar"}
      </Button>
      <Button
        variant="secondary"
        type="button"
        onClick={() => navigate("/login")}
      >
        Masuk
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

export default FormRegister;

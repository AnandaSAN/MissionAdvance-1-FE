import { useState } from "react";
import { Link } from "react-router-dom";

import LogoImage from "../../assets/images/LogoBelajar.png";
import linkedin from "../../assets/images/Linkedin.png";
import Facebook from "../../assets/images/Facebook.png";
import twitter from "../../assets/images/Twitter.png";
import instagram from "../../assets/images/Instagram.png";
import panah from "../../assets/images/Panah.png";

const Footer = () => {
  const [openList, setOpenList] = useState(null);

  const toggleMenu = (menu) => {
    setOpenList(openList === menu ? null : menu);
  };

  return (
    <footer className="bg-white border-t border-[#3A35411F] p-5 lg:px-15 xl:px-30 xl:py-15">
      {/* Tampilan Footer Desktop */}
      <div className="hidden  w-full md:flex justify-between">
        <div className="flex flex-col gap-3 lg:max-w-88">
          <Link to="/">
            <img
              src={LogoImage}
              alt="logo"
              className={"h-14 w-auto -translate-x-5"}
            />
          </Link>
          <p className="mt-1 font-dm-sans font-bold text-lg text-[#3A3541DE]">
            Gali Potensi Anda Melalui Pembelajaran Video di harisenin.com!
          </p>
          <p className="flex flex-col gap-3 font-dm-sans font-normal text-base text-[#3A3541DE]">
            <span>Jl. Usman Effendi No. 50 Lowokwaru, Malang</span>
            <span>+62-877-7123-1234</span>
          </p>
        </div>

        <div className="flex justify-between gap-5 lg:gap-8 xl:gap-12">
          <div className="flex flex-col gap-3.75">
            <p className="font-dm-sans font-bold text-base text-[#222325]">
              Kategori
            </p>
            <ul className="flex flex-col gap-3.25">
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Digital & Teknologi
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Pemasaran
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Manajemen Bisnis
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Pengembangan Diri
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Design
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3.75">
            <p className="font-dm-sans font-bold text-base text-[#222325]">
              Perusahaan
            </p>
            <ul className="flex flex-col gap-3.25">
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                tentang Kami
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                FAQ
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Kebijakan Privasi
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Ketentuan Layanan
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Bantuan
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3.75">
            <p className="font-dm-sans font-bold text-base text-[#222325]">
              Komunitas
            </p>
            <ul className="flex flex-col gap-3.25">
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Tips Sukses
              </li>
              <li className="font-dm-sans font-medium text-base text-[#333333AD] cursor-pointer hover:underline">
                Blog
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Garis */}
      <hr className="hidden md:block border-t border-gray-300 w-full mb-4 mt-4" />
      {/* Media Sosial dan Copyright Desktop */}
      <div className="hidden md:block w-full mx-auto">
        {/* Baris bawah: copyright kiri + sosmed kanan */}
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <p className="text-base font-dm-sans font-medium text-[#333333AD]">
            ©2023 Ananda Salasa Artha Nugraha All Rights Reserved.
          </p>

          {/* Sosial Media */}
          <div className="flex space-x-3.75">
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-8.75 h-8.75 rounded-full cursor-pointer hover:scale-[1.1]"
            />
            <img
              src={Facebook}
              alt="Facebook"
              className="w-8.75 h-8.75 rounded-full cursor-pointer hover:scale-[1.1]"
            />
            <img
              src={twitter}
              alt="Twitter"
              className="w-8.75 h-8.75 rounded-full cursor-pointer hover:scale-[1.1]"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="w-8.75 h-8.75 rounded-full cursor-pointer hover:scale-[1.1]"
            />
          </div>
        </div>
      </div>

      {/* Tampilan Footer Mobile */}
      <div className="md:hidden">
        <div>
          <Link to="/">
            <img
              src={LogoImage}
              alt="logo"
              className={"h-10 w-auto -translate-x-4"}
            />
          </Link>
          <p className="mt-4 text-sm font-dm-sans font-bold text-[#222325]">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="mt-2 flex flex-col gap-2 text-sm font-dm-sans font-normal text-[#3A3541DE]">
            <span>Jl. Usman Effandi No. 50 Lowokwaru, Malang</span>
            <span>+62-877-7123-1234</span>
          </p>
        </div>

        {/* List Menu Mobile */}
        <div className="mt-4 space-y-3">
          {/* Perusahaan */}
          <div>
            <button
              className="w-full relative z-10 flex justify-between items-center font-poppins font-semibold"
              onClick={() => toggleMenu("perusahaan")}
            >
              Perusahaan
              <span>
                <img
                  src={panah}
                  alt="panah"
                  className={`transition-all duration-300 ${openList === "perusahaan" ? "rotate-90" : ""}`}
                />
              </span>
            </button>
            <ul
              className={`pl-4 space-y-2 text-sm transition-all duration-300 ease-in-out ${openList === "perusahaan" ? "max-h-60 opacity-100 mt-2 translate-y-0" : "max-h-0 opacity-0 -translate-y-10 z-0"}`}
            >
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>
          {/* Kategori */}
          <div>
            <button
              className="relative z-10 w-full flex justify-between items-center py-2 font-poppins font-semibold"
              onClick={() => toggleMenu("kategori")}
            >
              Kategori
              <span>
                <img
                  src={panah}
                  alt="panah"
                  className={`transition-all duration-300 ${openList === "kategori" ? "rotate-90" : ""}`}
                />
              </span>
            </button>
            <ul
              className={`pl-4 space-y-2 text-sm transition-all duration-300 ease-in-out ${openList === "kategori" ? "max-h-60 opacity-100 mt-2 translate-y-0" : "max-h-0 opacity-0 -translate-y-10 z-0"}`}
            >
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>
          {/* Komunitas */}
          <div>
            <button
              className="relative z-10 w-full flex justify-between items-center py-2 font-poppins font-semibold"
              onClick={() => toggleMenu("komunitas")}
            >
              Komunitas
              <span>
                <img
                  src={panah}
                  alt="panah"
                  className={`transition-all duration-300 ${openList === "komunitas" ? "rotate-90" : ""}`}
                />
              </span>
            </button>
            <ul
              className={`pl-4 space-y-2 text-sm transition-all duration-300 ease-in-out ${openList === "komunitas" ? "max-h-60 opacity-100 mt-2 translate-y-0" : "max-h-0 opacity-0 -translate-y-10 z-0"}`}
            >
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* Sosial Media and CopyRight Mobile*/}
        <div className="flex flex-col py-4 space-y-3 border-t border-gray-300 mt-4">
          {/* Sosial Media */}
          <div className="flex space-x-3.75">
            <img src={linkedin} alt="LinkedIn" className="w-8.75 h-8.75" />
            <img src={Facebook} alt="Facebook" className="w-8.75 h-8.75" />
            <img src={twitter} alt="Twitter" className="w-8.75 h-8.75" />
            <img src={instagram} alt="Instagram" className="w-8.75 h-8.75" />
          </div>
          {/* Copyright */}
          <p className="text-base font-medium font-dm-sans text-gray-500">
            ©2023 Ananda Salasa Artha Nugraha All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

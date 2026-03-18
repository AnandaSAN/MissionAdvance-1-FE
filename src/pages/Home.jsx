import MainLayout from "../components/layout/MainLayout";
import { useEffect, useState } from "react";
import { useProduct } from "../services/hooks/useProduct";
import Card from "../components/molecules/Card";

import Hero from "../assets/images/HeroBG.jpg";
import NewsLetter from "../assets/images/NewsLetter.jpg";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [visibleCard, setVisibleCard] = useState(6);
  const { products, loading } = useProduct();

  useEffect(() => {
    setVisibleCard(6);
  }, [activeCategory]);

  const handleLoadMore = () => {
    if (visibleCard >= filteredContent.length) {
      setVisibleCard(6);
    } else {
      setVisibleCard((prev) => prev + 6);
    }
  };

  const filteredContent =
    activeCategory === "Semua"
      ? products
      : products.filter((item) => item.category === activeCategory);

  const visibleContent = filteredContent.slice(0, visibleCard);

  return (
    <MainLayout>
      <main className="grow bg-[#fdf8f2] px-5 py-7 md:px-15 lg:px-30 lg:py-16">
        <div className="w-full relative overflow-hidden rounded-[10px] shadow-lg mx-auto text-white">
          <img
            src={Hero}
            alt="HeroBG"
            className="absolute w-full h-full object-cover top-0 left-0 brightness-[0.2] z-0"
          />
          <div className="relative px-5 py-9.25 lg:px-35 lg:pt-20.5 lg:pb-16 xl:py-25 z-10">
            <h1 className="font-poppins font-bold text-2xl text-center">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
              Interaktif!
            </h1>
            <p className="font-dm-sans font-medium text-sm text-center mb-6">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
              pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
              berpartisipasi dalam latihan interaktif yang akan meningkatkan
              pemahaman Anda.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-1.75 py-2.5 md:px6.5 rounded-[10px] w-full sm:max-w-92.25 text-sm md:text-[16px] font-dm-sans font-regular transition xl:w-92 mx-auto flex items-center justify-center cursor-pointer">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-16">
          <div>
            <h1 className="font-poppins font-semibold text-2xl text-[#222325]">
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <p className="mt-2.5 font-dm-sans font-medium text-sm text-[#333333AD]">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <div className="mt-6 md:mt-8">
            <ul className="flex flex-nowrap whitespace-nowrap gap-1.5 overflow-x-auto hide-scrollbar">
              {[
                "Semua",
                "Pemasaran",
                "Bisnis",
                "Design",
                "Pengembangan Diri",
              ].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`py-3 pr-9 text-sm font-medium transition ${activeCategory === cat ? "text-[#f64920] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-13 after:border-b-[6px] after:border-[#f64920] after:rounded-[10px]" : "text-gray-800 hover:text-[#f64920]"}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 md:space-y-2">
          {loading ? (
            <div className="flex align-center text-center w-full">
              <p className="col-span-full text-center text-gray-500 inline-block">
                Loading     
              </p>
              <div className="ml-2 inline-block w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : visibleContent.length > 0 ? (
            visibleContent.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Belum ada kelas yang tersedia
            </p>
          )}

          {filteredContent.length > 6 && (
            <div className="my-5 text-center col-span-full">
              <button
                onClick={handleLoadMore}
                className="bg-[#ffbd3a] text-white px-6 py-3 rounded-full hover:bg-[#ffae0b] cursor-pointer transition-all"
              >
                {visibleCard >= filteredContent.length
                  ? "Kecilkan Tampilan"
                  : "Lihat Lebih Banyak"}
              </button>
            </div>
          )}
        </div>

        <div className="relative w-full max-w-7xl overflow-hidden rounded-[10px] text-white shadow-lg mx-auto px-5 py-12 my-10 md:px-15 lg:px-30 xl:px-85 lg:py-23">
          <img
            src={NewsLetter}
            alt="newsbege"
            className="absolute  object-cover w-full h-full left-0 top-0 brightness-[0.2] z-0"
          />
          <div className="relative z-10 flex flex-col items-center text-center gap-1">
            <p className="font-dm-sans font-medium text-[16px] text-[#C1C2C4] tracking-wide">
              NEWSLETTER
            </p>
            <h1 className="font-poppins font-semibold text-2xl">
              Mau Belajar Lebih Banyak?
            </h1>
            <p className="mt-1.5 font-dm-sans font-normal text-sm text-[#F4F5FA] tracking-wide">
              Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
              spesial dari program-program terbaik harisenin.com
            </p>

            <div className="w-full max-w-md flex flex-col gap-4 overflow-hidden mt-8 md:relative">
              <input
                type="text"
                placeholder="Masukkan Emailmu"
                className="pr-2 pl-3 py-2.5 text-center bg-white text-[#333333AD] font-dm-sans font-normal text-sm rounded-[10px] focus:outline-none md:text-left md:pr-35 xl:pr-34 xl:h-10"
              />
              <button className="bg-[#FFBD3A] px-19.5 py-2 rounded-[10px] transition text-[16px] font-dm-sans font-bold hover:bg-[#ffb835] md:absolute md:px-5 md:py-1 md:right-2 md:bottom-1/2 md:translate-y-1/2 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Home;

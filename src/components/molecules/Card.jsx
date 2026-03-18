import Rating from "../../assets/images/Rating.png";

const Card = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col bg-white border border-gray-200 rounded-xl p-4 w-full max-w-112.5 mx-auto shadow-md transition hover:shadow-lg cursor-pointer"
    >
      <div className="flex sm:hidden gap-3">
        <img
          src={item.photos}
          alt="Content"
          className="w-25 h-25 rounded-lg object-cover shrink-0"
        />
        <div className="flex flex-col justify-center gap-2">
          <p className="font-poppins font-semibold text-[16px] text-[#222325]">
            {item.title}
          </p>
          <div className="flex items-center gap-2">
            <img
              src={item.avatar}
              alt="profile"
              className="w-9 h-9 rounded-[10px] object-cover"
            />
            <div className="flex flex-col">
              <span className="font-dm-sans font-medium text-sm text-[#222325]">
                {item.teacher}
              </span>
              <p className="font-dm-sans font-normal text-[12px] text-[#333333AD]">
                {item.job}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex flex-col gap-4">
        <img
          src={item.photos}
          alt="content"
          className="w-full h-45 object-cover rounded-[10px]"
        />
        <div className="flex flex-col gap-2">
          <p className="font-poppins font-semibold text-[18px] text-[#222325]">
            {item.title}
          </p>
          <p className="font-dm-sans font-medium text-[16px] text-[#333333AD] line-clamp-2">
            {item.description}
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <img
            src={item.avatar}
            alt="profile"
            className="w-10 h-10 rounded-[10px]"
          />
          <div>
            <p className="font-dm-sans font-medium text-[16px] text-[#222325]">
              {item.teacher}
            </p>
            <p className="font-dm-sans font-normal text-sm text-[#333333AD]">
              {item.job}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-2">
          <img src={Rating} alt="rating" className="w-20 md:w-22.5" />
          <p className="text-xs md:text-sm text-gray-500 underline">3.5 (86)</p>
        </div>
        <div className="text-base md:text-lg font-bold text-green-500">
          Rp {new Intl.NumberFormat("id-ID").format(item.price)}
        </div>
      </div>
    </div>
  );
};

export default Card;

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="bg-[#fdf8f2] flex justify-center items-center pt-10 pb-10 mx-auto">
      <div className="bg-white p-9 rounded-2xl border border-[#F1F1F1] w-full max-w-[320px] md:max-w-md font-dm-sans">
        <h2 className="text-center font-poppins text-2xl md:text-[32px] font-semibold mb-2.5">
          {title}
        </h2>
        <p className="text-center text-[#333333ad] text-sm md:text-[16px] mb-6">
          {subtitle}
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

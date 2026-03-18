import React from "react";

const Button = ({ type, variant, onClick, children }) => {
  const baseStyle =
    "w-full font-dm-sans font-semibold text-sm md:text-[16px] py-2 rounded-[10px] hover:cursor-pointer transition-all duration-200";
  const styles = {
    primary: `${baseStyle} bg-[#3ECF4C] text-[#fff] hover:bg-[#0ede22]`,
    secondary: `${baseStyle} bg-[#E2FCD9CC] text-[#3ECF4C] hover:bg-[#d6fbc9]`,
    others: `${baseStyle} bg-white border border-[#3a35411f] text-[#333333] hover:bg-[#f1f1f1]`,
  };
  return (
    <button type={type} onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
};

export default Button;

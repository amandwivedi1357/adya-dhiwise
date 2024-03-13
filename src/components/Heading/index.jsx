import React from "react";

const sizes = {
  "3xl": "text-4xl font-semibold leading-[54px]",
  "2xl": "text-[25px] font-semibold leading-[38px]",
  xl: "text-2xl font-semibold leading-[30px]",
  "5xl": "text-[50px] font-bold leading-[75px]",
  "4xl": "text-[40px] font-bold leading-[60px]",
  s: "text-base font-semibold",
  md: "text-xl font-semibold leading-[30px]",
  xs: "text-[10px] font-semibold leading-[15px]",
  lg: "text-[23px] font-semibold leading-7",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_e5 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-6",
  lg: "text-lg font-medium leading-[25px]",
  s: "text-[15px] font-normal leading-[23px]",
  "2xl": "text-2xl font-medium leading-[37px]",
  xl: "text-xl font-normal",
  md: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_e5 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[3px]",
};
const variants = {
  outline: {
    green_700: "border-green-700 border border-solid",
    gray_700_93_01: "border-gray-700_93_01 border border-solid",
    gray_500_77_03: "border-gray-500_77 border border-solid text-black-900_e5",
    gray_700_93_02: "border-gray-700_93_02 border border-solid text-gray-700_7f",
  },
};
const sizes = {
  md: "h-[65px] pl-[19px] pr-6 text-base",
  xs: "h-[49px] px-[13px] text-base",
  sm: "h-[49px] pl-[19px] pr-6",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "outline",
      size = "sm",
      color = "gray_700_93_02",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center border border-solid ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["outline"]),
  color: PropTypes.oneOf(["green_700", "gray_700_93_01", "gray_500_77_03", "gray_700_93_02"]),
};

export { Input };

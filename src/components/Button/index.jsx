import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[19px]",
};
const variants = {
  fill: {
    deep_orange_700_06: "bg-deep_orange-700 shadow-sm text-white-A700",
    deep_orange_700: "bg-deep_orange-700 shadow-sm text-white-A700",
  },
  outline: {
    gray_600_01: "border-gray-600_01 border border-solid text-gray-600",
  },
};
const sizes = {
  sm: "h-[43px] px-[26px] text-base",
  xs: "h-[39px] px-[22px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "outline",
  size = "xs",
  color = "gray_600_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer border border-solid ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["deep_orange_700_06", "deep_orange_700", "gray_600_01"]),
};

export { Button };

import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded",
  square: "rounded-none",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-teal-900",
    light_blue_400: "bg-light_blue-400",
    light_green_700: "bg-light_green-700 text-white-A700_01",
    white_A700_01: "bg-white-A700_01 text-teal-900",
    yellow_800: "bg-yellow-800 text-white-A700_01",
    teal_900: "bg-teal-900",
  },
  outline: {
    deep_orange_200: "border-b border-deep_orange-200 border-solid",
    blue_gray_300: "border border-blue_gray-300 border-solid",
    blue_gray_100:
      "border border-blue_gray-100 border-solid text-blue_gray-300",
  },
};
const sizes = { xs: "p-1", sm: "px-1 py-[7px]", md: "p-[9px]", lg: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "light_blue_400",
    "light_green_700",
    "white_A700_01",
    "yellow_800",
    "teal_900",
    "deep_orange_200",
    "blue_gray_300",
    "blue_gray_100",
  ]),
};

export { Button };

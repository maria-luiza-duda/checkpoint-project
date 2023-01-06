import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder4: "rounded-radius4" };
const variants = {
  FillIndigo700: "bg-indigo_700 text-white_A700",
  FillTeal400: "bg-teal_400 text-white_A700",
  FillPink900: "bg-pink_900 text-white_A700",
  FillCyan800: "bg-cyan_800 text-white_A700",
  OutlineIndigo700:
    "bg-white_A700 border border-indigo_700 border-solid text-gray_600",
  OutlineBluegray400: "bg-white_A700 border border-bluegray_400 border-solid",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "FillIndigo700",
    "FillTeal400",
    "FillPink900",
    "FillCyan800",
    "OutlineIndigo700",
    "OutlineBluegray400",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder4",
  variant: "FillIndigo700",
  size: "md",
};

export { Button };

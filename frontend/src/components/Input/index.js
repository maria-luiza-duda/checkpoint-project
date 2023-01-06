import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray400: "bg-white_A700 border border-bluegray_400 border-solid",
  OutlineIndigo700: "bg-white_A700 border border-indigo_700 border-solid",
  FillIndigo700: "bg-indigo_700",
};
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = {
  sm: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  md: "lg:p-[17px] xl:px-[21px] px-[24px] 3xl:px-[28px] xl:py-[22px] py-[25px] 3xl:py-[30px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray400",
    "OutlineIndigo700",
    "FillIndigo700",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineBluegray400",
  size: "sm",
};

export { Input };

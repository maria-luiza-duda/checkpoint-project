import React from "react";
const variantClasses = {
  h1: "font-medium lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h2: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  h3: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  h4: "font-medium xl:text-[11px] text-[13px] 3xl:text-[15px] lg:text-[9px]",
  h5: "font-medium xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

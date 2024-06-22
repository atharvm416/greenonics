import React from "react";

const sizes = {
  s: "text-sm font-semibold leading-[17px]",
  md: "text-[28px] font-semibold leading-[33px]",
  xs: "text-xs font-semibold leading-[15px]",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue-500 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };

import React from "react";

const sizeClasses = {
  txtRobotoLight14Gray700: "font-light font-roboto",
  txtRobotoRomanMedium12: "font-medium font-roboto",
  txtRobotoRomanRegular16Gray100: "font-normal font-roboto",
  txtRobotoRomanRegular18Gray100: "font-normal font-roboto",
  txtRobotoRomanSemiBold18: "font-roboto font-semibold",
  txtRobotoRomanRegular14Teal900: "font-normal font-roboto",
  txtRobotoLight14Black900: "font-light font-roboto",
  txtRobotoRomanMedium18Black90001: "font-medium font-roboto",
  txtRobotoLight14Black90001: "font-light font-roboto",
  txtRobotoRegular16WhiteA70001: "font-normal font-roboto",
  txtRobotoRomanRegular16Teal900: "font-normal font-roboto",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoLight14Deeporange900: "font-light font-roboto",
  txtRobotoSemiBold25: "font-roboto font-semibold",
  txtRobotoLight14Bluegray900: "font-light font-roboto",
  txtRobotoSemiBold25Gray900: "font-roboto font-semibold",
  txtRobotoMedium18: "font-medium font-roboto",
  txtRobotoRomanMedium18Teal900: "font-medium font-roboto",
  txtRobotoRegular16Lightgreen700: "font-normal font-roboto",
  txtRobotoRomanBold60: "font-bold font-roboto",
  txtRobotoLight14Yellow800: "font-light font-roboto",
  txtRobotoMedium18Gray900: "font-medium font-roboto",
  txtInterMedium10: "font-inter font-medium",
  txtRobotoRomanRegular14Black90001: "font-normal font-roboto",
  txtRobotoRegular16Bluegray500: "font-normal font-roboto",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtRobotoMedium18Gray700: "font-medium font-roboto",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanRegular18: "font-normal font-roboto",
  txtRobotoMedium18Bluegray500: "font-medium font-roboto",
  txtRobotoRegular16Gray500: "font-normal font-roboto",
  txtRobotoLight14Teal900: "font-light font-roboto",
  txtRobotoSemiBold36Gray900: "font-roboto font-semibold",
  txtRobotoRomanMedium18: "font-medium font-roboto",
  txtInterRegular14: "font-inter font-normal",
  txtRobotoRegular12Gray500: "font-normal font-roboto",
  txtRobotoLight14Red200: "font-light font-roboto",
  txtRobotoRegular30: "font-normal font-roboto",
  txtRobotoRegular16Gray900: "font-normal font-roboto",
  txtRobotoSemiBold36: "font-roboto font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtRobotoRegular16Black90001: "font-normal font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoLight14Gray800: "font-light font-roboto",
  txtRobotoRomanMedium18WhiteA70001: "font-medium font-roboto",
  txtRobotoRomanMedium32: "font-medium font-roboto",
  txtRobotoRomanMedium30: "font-medium font-roboto",
  txtRobotoRomanRegular18Gray800: "font-normal font-roboto",
  txtRobotoLight14Deeporange400: "font-light font-roboto",
  txtRobotoMedium20Teal900: "font-medium font-roboto",
  txtRobotoRomanRegular14Bluegray90001: "font-normal font-roboto",
  txtInterRegular14Teal900: "font-inter font-normal",
  txtRobotoRegular16Black900: "font-normal font-roboto",
  txtRobotoRegular16Bluegray800: "font-normal font-roboto",
  txtRobotoLight14WhiteA700: "font-light font-roboto",
  txtRobotoMedium20Gray900: "font-medium font-roboto",
  txtRobotoRegular12Bluegray100: "font-normal font-roboto",
  txtRobotoLight14Bluegray800: "font-light font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoLight14: "font-light font-roboto",
  txtRobotoRegular12Gray400: "font-normal font-roboto",
  txtRobotoRegular12Yellow800: "font-normal font-roboto",
  txtRobotoRegular12Gray800: "font-normal font-roboto",
  txtRobotoRegular11: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

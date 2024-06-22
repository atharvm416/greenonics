import React from "react";

import { Img, Text } from "components";

const InformationPageVTwoColumnarrowdownOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-deep_orange-200 border-solid flex flex-row gap-1 h-12 md:h-auto items-center justify-start px-1 py-2 rounded w-full">
          <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full">
            <Text
              className="bg-white-A700 capitalize justify-center px-1 py-[3px] text-gray-800 text-sm w-auto"
              size="txtRobotoLight14Gray800"
            >
              {props?.provincetext}
            </Text>
          </div>
          {!!props?.dropdownicon ? (
            <Img
              className="h-6 rounded-sm w-6"
              alt="arrowdown_One"
              src={props?.dropdownicon}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

InformationPageVTwoColumnarrowdownOne.defaultProps = {
  provincetext: "Province",
};

export default InformationPageVTwoColumnarrowdownOne;

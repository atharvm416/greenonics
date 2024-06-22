import React from "react";

import { Img, Text } from "components";

const InformationPageVTwoColumnarrowdown = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-deep_orange-200 border-solid flex md:flex-col flex-row gap-1 h-12 md:h-auto items-center justify-start px-1 py-2 rounded w-full">
          <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full">
            {!!props?.countryregiontext ? (
              <Text
                className="bg-white-A700 capitalize justify-center px-1 py-[3px] text-blue_gray-900 text-sm w-auto"
                size="txtRobotoLight14Bluegray900"
              >
                {props?.countryregiontext}
              </Text>
            ) : null}
          </div>
          {!!props?.dropdownicon ? (
            <Img
              className="h-6 rounded-sm w-6"
              alt="arrowdown"
              src={props?.dropdownicon}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

InformationPageVTwoColumnarrowdown.defaultProps = {};

export default InformationPageVTwoColumnarrowdown;

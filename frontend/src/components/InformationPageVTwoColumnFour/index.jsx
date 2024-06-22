import React from "react";

import { Text } from "components";

const InformationPageVTwoColumnFour = (props) => {
  return (
    <>
      <div className={props.className}>
      <div className="border border-deep_orange-200 border-solid flex md:flex-col flex-row gap-1 h-12 md:h-auto items-center justify-start px-1 py-2 rounded w-full">
          <div className="flex flex-col items-start justify-start px-1 py-[3px] w-full">
            {!!props?.expirationdate ? (
              <Text
                className="bg-white-A700 capitalize justify-center px-1 py-[3px] text-gray-800 text-sm w-auto"
                size="txtRobotoLight14Gray800"
              >
                {props?.expirationdate}
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

InformationPageVTwoColumnFour.defaultProps = {};

export default InformationPageVTwoColumnFour;

import React from "react";

import { Line, Text } from "components";

const DealsPageVTwoNavtabsbasic = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1 items-start justify-center p-2 rounded w-auto">
          <Text
            className="capitalize text-gray-900 text-lg w-auto"
            size="txtRobotoMedium18Gray900"
          >
            {props?.milletstext}
          </Text>
          <Line className="bg-deep_orange-600 h-0.5 w-full" />
        </div>
        <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
          <Text
            className="capitalize text-blue_gray-500 text-lg w-auto"
            size="txtRobotoMedium18Bluegray500"
          >
            {props?.mangoestext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
          <Text
            className="capitalize text-blue_gray-500 text-lg w-auto"
            size="txtRobotoMedium18Bluegray500"
          >
            {props?.ricetext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
          <Text
            className="capitalize text-blue_gray-500 text-lg w-auto"
            size="txtRobotoMedium18Bluegray500"
          >
            {props?.organicstext}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsPageVTwoNavtabsbasic.defaultProps = {
  milletstext: "Millets",
  mangoestext: "Mangoes",
  ricetext: "Rice",
  organicstext: "Organics",
};

export default DealsPageVTwoNavtabsbasic;

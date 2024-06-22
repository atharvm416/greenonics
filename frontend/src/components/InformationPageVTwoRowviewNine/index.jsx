import React from "react";
import { Line, Text } from "components";

const InformationPageVTwoRowviewNine = (props) => {
  return (
    <div className={props.className}>
      <div className="flex flex-col items-center h-[33px] md:h-auto items-center justify-start px-2 w-auto">
        <div className="flex flex-col items-center justify-between p-1 w-full">
          {props.viewNine && (
            <Text
              className="capitalize text-base text-center text-gray-900 w-auto"
              size="txtRobotoRegular16Gray900"
            >
              {props.viewNine}
            </Text>
          )}
        </div>
        {props.lineninetyseven && <Line className="bg-deep_orange-600 h-px w-full" />}
      </div>
      <div className="flex flex-col h-8 md:h-auto items-center justify-start px-2 w-auto">
        <div className="flex flex-col items-center justify-between p-1 w-full">
          {props.viewTen && (
            <Text
              className="capitalize text-base text-blue_gray-800 text-center w-auto"
              size="txtRobotoRegular16Bluegray800"
            >
              {props.viewTen}
            </Text>
          )}
        </div>
      </div>
      <div className="flex flex-col h-8 md:h-auto items-center justify-start px-2 w-auto">
        <div className="flex flex-col items-center justify-between p-1 w-full">
          {props.viewEleven && (
            <Text
              className="capitalize text-base text-blue_gray-800 text-center w-auto"
              size="txtRobotoRegular16Bluegray800"
            >
              {props.viewEleven}
            </Text>
          )}
        </div>
      </div>
      <div className="flex flex-col h-8 md:h-auto items-center justify-start px-2 w-auto">
        <div className="flex flex-col items-center justify-between p-1 w-full">
          {props.viewTwelve && (
            <Text
              className="capitalize text-base text-blue_gray-800 text-center w-auto"
              size="txtRobotoRegular16Bluegray800"
            >
              {props.viewTwelve}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

InformationPageVTwoRowviewNine.defaultProps = { viewTen: "Customer reviews" };

export default InformationPageVTwoRowviewNine;

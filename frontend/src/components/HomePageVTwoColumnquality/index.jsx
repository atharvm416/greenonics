import React from "react";

import { Img, Text } from "components";

const HomePageVTwoColumnquality = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[15px] items-center justify-start w-[84%] md:w-full">
          <div className="bg-yellow-50_01 flex flex-col h-[150px] items-center justify-start p-[25px] sm:px-5 rounded-[50%] w-[150px]">
            <Img
              className="h-[100px] w-[100px]"
              alt="iconssupporta"
              src={props?.userimage}
            />
          </div>
          {!!props?.customerservicetext ? (
            <Text
              className="capitalize text-gray-700 text-lg w-auto"
              size="txtRobotoMedium18Gray700"
            >
              {props?.customerservicetext}
            </Text>
          ) : null}
        </div>
        {!!props?.descriptiontext ? (
          <Text
            className="capitalize leading-[120.00%] max-w-[180px] md:max-w-full text-gray-700 text-sm"
            size="txtRobotoLight14Gray700"
          >
            {props?.descriptiontext}
          </Text>
        ) : null}
      </div>
    </>
  );
};

HomePageVTwoColumnquality.defaultProps = {
  userimage: "images/img_iconssupporta.svg",
};

export default HomePageVTwoColumnquality;

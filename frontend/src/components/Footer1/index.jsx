import React from "react";

import { Line, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={` left-0 bottom-0 w-full ${props.className}`}>
        <div className="h-[131px] md:h-[66px] relative w-full " style={{border:"2px solid black"}}>
          <div className="bg-teal-900 flex flex-col gap-4 h-full items-center justify-start m-auto py-4 w-full">
            <Text
              className="capitalize text-center text-sm text-white-A700 w-auto"
              size="txtRobotoLight14WhiteA700"
            >
              <span className="text-white-A700 font-roboto text-base font-normal">
                Refund policy{" "}
              </span>
              <span className="text-white-A700 font-roboto font-light"> </span>
              <span className="text-white-A700 font-roboto text-base font-normal">
                Shipping policy{" "}
              </span>
              <span className="text-white-A700 font-roboto font-light"> </span>
              <span className="text-white-A700 font-roboto text-base font-normal">
                Privacy policy{" "}
              </span>
              <span className="text-white-A700 font-roboto font-light"> </span>
              <span className="text-white-A700 font-roboto text-base font-normal">
                Terms of service
              </span>
            </Text>
            <Line className="bg-white-A700_01 h-px w-[61%]" />
          </div>
          <div className="absolute bottom-[12%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-2.5 w-full">
            <Text
              className="capitalize mt-0.5 text-base text-center text-white-A700_01"
              size="txtRobotoRegular16WhiteA70001"
            >
              <>Copyright © 2024 coherent Business Solutions .</>
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;

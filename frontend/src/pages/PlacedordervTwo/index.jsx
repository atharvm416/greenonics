import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";
import InformationPageVTwoColumnarrowdown from "components/InformationPageVTwoColumnarrowdown";

import { CloseSVG } from "../../assets/images";

const PlacedordervTwoPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <Header className="bg-yellow-50 flex flex-col items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-start justify-start max-w-[1368px] mt-[68px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-between p-8 sm:px-5 w-full">
            <div className="flex sm:flex-1 flex-col gap-3 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-center justify-start py-1 w-full">
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-teal-900_01 w-auto"
                  size="txtRobotoRomanMedium32"
                >
                  thank you for your order!
                </Text>
              </div>
              <Text
                className="capitalize text-sm text-teal-900 w-full"
                size="txtRobotoLight14Teal900"
              >
                <span className="text-teal-900 font-roboto text-left font-light">
                  Order
                </span>
                <span className="text-teal-900 font-roboto text-left text-base font-normal">
                  {" "}
                  #147258369
                </span>
                <span className="text-teal-900 font-roboto text-left font-light">
                  {" "}
                  has ben placed
                </span>
              </Text>
              <Text
                className="capitalize text-sm text-teal-900 w-full"
                size="txtRobotoLight14Teal900"
              >
                you will receive an email confirmation shortly at your email
                ghiz@email.com{" "}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
              <Text
                className="capitalize text-red-200 text-sm w-auto"
                size="txtRobotoLight14Red200"
              >
                {" "}
                Print Receipt
              </Text>
            </div>
          </div>
        </div>
       
        
        <Footer1 className="flex gap-4 items-center justify-center mt-[111px] md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default PlacedordervTwoPage;

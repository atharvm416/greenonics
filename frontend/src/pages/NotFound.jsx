import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import {  Text } from "components";
const NotFound = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
          <Header className="bg-yellow-50 flex  md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start py-1 w-full">
                <Text
                  className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-teal-900_01 w-auto"
                  size="txtRobotoRomanMedium32"
                >
                  404 Not Found
                </Text>
              </div>
        <Footer className="flex gap-8 items-center justify-center md:px-5 py-8 w-full" />
      </div>
    </>
  );
};

export default NotFound;

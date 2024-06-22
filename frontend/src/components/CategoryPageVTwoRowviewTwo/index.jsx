import React from "react";

import { Img, Line, List, Text } from "components";

const CategoryPageVTwoRowviewTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-8 md:h-auto items-center justify-start px-2 w-auto">
          <div className="flex flex-row gap-1 items-center justify-between p-1 w-full">
            {!!props?.carttext ? (
              <Text
                className="capitalize text-base text-blue_gray-800 text-center w-auto"
                size="txtRobotoRegular16Bluegray800"
              >
                {props?.carttext}
              </Text>
            ) : null}
            {!!props?.cartimage ? (
              <Img
                className="h-6 w-6"
                alt="arrowright"
                src={props?.cartimage}
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col h-8 md:h-auto items-center justify-start px-2 w-auto">
          <div className="flex flex-row gap-1 items-center justify-between p-1 w-full">
            {!!props?.informationtext ? (
              <Text
                className="capitalize text-base text-blue_gray-800 text-center w-auto"
                size="txtRobotoRegular16Bluegray800"
              >
                {props?.informationtext}
              </Text>
            ) : null}
            {!!props?.informationimage ? (
              <Img
                className="h-6 w-6"
                alt="arrowright_One"
                src={props?.informationimage}
              />
            ) : null}
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-2 grid grid-cols-2 w-[43%] sm:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col h-8 md:h-auto items-center justify-start px-2 w-auto">
            <div className="flex flex-row gap-1 items-center justify-between p-1 w-full">
              {!!props?.shippingtext ? (
                <Text
                  className="capitalize text-base text-blue_gray-800 text-center w-auto"
                  size="txtRobotoRegular16Bluegray800"
                >
                  {props?.shippingtext}
                </Text>
              ) : null}
              {!!props?.shippingimage ? (
                <Img
                  className="h-6 w-6"
                  alt="arrowright"
                  src={props?.shippingimage}
                />
              ) : null}
            </div>
          </div>
          <div className="flex flex-col h-8 md:h-auto items-center justify-start px-2 w-auto">
            <div className="flex flex-row gap-1 items-center justify-between p-1 w-full">
              {!!props?.paymenttext ? (
                <Text
                  className="capitalize text-base text-blue_gray-800 text-center w-auto"
                  size="txtRobotoRegular16Bluegray800"
                >
                  {props?.paymenttext}
                </Text>
              ) : null}
              {!!props?.paymentimage ? (
                <Img
                  className="h-6 w-6"
                  alt="arrowright"
                  src={props?.paymentimage}
                />
              ) : null}
            </div>
          </div>
        </List>
        <div className="flex flex-col h-[33px] md:h-auto items-center justify-start px-2 w-auto">
          <div className="flex flex-col items-center justify-between p-1 w-full">
            {!!props?.reviewtext ? (
              <Text
                className="capitalize text-base text-center text-gray-900 w-auto"
                size="txtRobotoRegular16Gray900"
              >
                {props?.reviewtext}
              </Text>
            ) : null}
          </div>
          {!!props?.lineninetyseven ? (
            <Line className="bg-deep_orange-600 h-px w-full" />
          ) : null}
        </div>
      </div>
    </>
  );
};

CategoryPageVTwoRowviewTwo.defaultProps = {};

export default CategoryPageVTwoRowviewTwo;

import React from "react";

import { Button, Img, Line, Text } from "components";

const DetailleProductPageVTwoColumnTwentyTwo = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_cardofaddtocart.svg')" }}
      >
        <div className="flex flex-col gap-6 items-start justify-start mb-[9px] mt-[27px] w-auto">
          <div className="flex flex-row items-center justify-between w-[245px]">
            <Text
              className="capitalize text-base text-teal-900 w-auto"
              size="txtRobotoRegular16"
            >
              {props?.carttext}
            </Text>
            <Img
              className="h-[25px] w-[25px]"
              src="images/img_iconclear.svg"
              alt="iconclear"
            />
          </div>
          <div className="flex flex-col gap-3 items-center justify-start w-auto">
            <div className="flex flex-row gap-[9px] items-start justify-start w-auto">
              <Img
                className="h-[73px] md:h-auto object-cover w-[67px]"
                src="images/img_rectangle171.png"
                alt="rectangle171"
              />
              <div className="flex flex-col gap-[3px] items-start justify-start w-[164px]">
                <Text
                  className="capitalize text-base text-teal-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.productname}
                </Text>
                {props?.productquantity}
                <Text
                  className="capitalize text-lg text-teal-900 w-full"
                  size="txtRobotoMedium18"
                >
                  {props?.productprice}
                </Text>
              </div>
            </div>
            <Line className="bg-red-100 h-px w-full" />
            <div className="flex flex-col gap-[11px] items-center justify-start w-[84%] md:w-full">
              <Button
                className="!text-gray-100 border border-solid border-yellow-800 capitalize cursor-pointer font-roboto h-9 text-base text-center w-[204px]"
                shape="round"
                color="yellow_800"
                size="md"
                variant="fill"
              >
                {props?.checkoutbutton}
              </Button>
              <Button
                className="!text-black-900 border border-light_green-700 border-solid capitalize cursor-pointer font-roboto h-9 text-base text-center w-[204px]"
                shape="round"
                color="light_green_700"
                size="md"
                variant="fill"
              >
                {props?.continueshoppingbutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailleProductPageVTwoColumnTwentyTwo.defaultProps = {
  carttext: "Added to Cart ",
  productname: "Name Product",
  productquantity: (
    <Text
      className="capitalize text-base text-gray-500 w-full"
      size="txtRobotoRegular16Gray500"
    >
      <span className="text-gray-500 font-roboto text-left font-normal">
        Quantity :{" "}
      </span>
      <span className="text-teal-900 font-roboto text-left font-normal">
        {" "}
        1
      </span>
    </Text>
  ),
  productprice: "$00.00",
  checkoutbutton: "Checkout",
  continueshoppingbutton: "Continue shopping",
};

export default DetailleProductPageVTwoColumnTwentyTwo;

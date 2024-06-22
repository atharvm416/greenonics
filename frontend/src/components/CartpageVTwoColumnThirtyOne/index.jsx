import React from "react";

import { Button, Input, Line, Text } from "components";

const CartpageVTwoColumnThirtyOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center py-4 w-auto md:w-full">
          <div className="flex flex-col gap-5 items-center justify-center w-full">
            <Text
              className="bg-teal-900 justify-center pb-0.5 pt-1.5 px-2 text-gray-100 text-lg w-auto"
              size="txtRobotoRomanSemiBold18"
            >
              {props?.text}
            </Text>
            <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start pb-[19px] w-full">
                <Input
                  name="frame314"
                  placeholder="Email Adress"
                  className="!placeholder:text-blue_gray-900 !text-blue_gray-900 capitalize font-roboto p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100_01 border-solid w-full"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="border border-solid border-yellow-800 cursor-pointer font-inter font-medium h-9 leading-[normal] text-center text-sm w-64"
                shape="round"
                color="yellow_800"
                size="md"
                variant="fill"
              >
                {props?.onsignup}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[31px] items-center justify-start w-[61%] md:w-full">
          <Line className="bg-white-A700 h-px w-full" />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[90px] items-start justify-start max-w-[845px] w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="bg-teal-900 capitalize justify-center pr-[3px] py-1.5 text-gray-100 text-lg w-auto"
                size="txtRobotoRomanSemiBold18"
              >
                {props?.text1}
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[82px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onaboutus}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[160px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.ontermsandconditions}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[209px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onloyaltyandreferralprogram}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[119px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onprivacypolicy}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[133px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onshippingpolicy}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[118px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onrefundpolicy}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[142px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.ontermsofservice}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[118px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onwheretobuy}
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="bg-teal-900 capitalize justify-center py-1.5 text-gray-100 text-lg w-auto"
                size="txtRobotoRomanRegular18Gray100"
              >
                {props?.elementofbottomTwo}
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[103px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.oncontactus}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[76px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.ondelivery}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[219px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onfaq}
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="bg-teal-900 capitalize justify-center py-1.5 text-gray-100 text-lg w-auto"
                size="txtRobotoRomanRegular18Gray100"
              >
                {props?.elementofbottomThree}
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[48px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onblog}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[98px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.oncommunity}
                </Button>
                <Button
                  className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[106px] text-base text-center"
                  shape="square"
                  color="teal_900"
                  size="xs"
                  variant="fill"
                >
                  {props?.onaccessibility}
                </Button>
                {props?.onsalesandoffers}
              </div>
            </div>
          </div>
          <Line className="bg-white-A700_01 h-px w-full" />
        </div>
      </div>
    </>
  );
};

CartpageVTwoColumnThirtyOne.defaultProps = {
  text: "Be the first to know! Sign up for instant updates when new items arrive :",
  onsignup: "Sign Up",
  text1: <>About</>,
  onaboutus: "About Us",
  ontermsandconditions: <>Terms & Conditions</>,
  onloyaltyandreferralprogram: <>Loyalty & Referral Program</>,
  onprivacypolicy: <>Privacy Policy</>,
  onshippingpolicy: <>Shipping Policy</>,
  onrefundpolicy: <>Refund Policy</>,
  ontermsofservice: <>Terms of Service</>,
  onwheretobuy: <>Where to Buy</>,
  elementofbottomTwo: "Customers Service",
  oncontactus: <>Contact Us</>,
  ondelivery: <>Delivery</>,
  onfaq: <>Frequently Asked Questions</>,
  elementofbottomThree: "Resources",
  onblog: "Blog",
  oncommunity: "Community",
  onaccessibility: "Accessibility",
  onsalesandoffers: (
    <Text
      className="bg-teal-900 capitalize justify-center px-2 py-1 text-base text-gray-100 w-auto"
      size="txtRobotoRomanRegular16Gray100"
    >
      <span className="text-gray-100 font-roboto text-left font-normal">
        Sa
      </span>
      <span className="text-gray-100 font-roboto text-left font-normal">
        les & Offers
      </span>
    </Text>
  ),
};

export default CartpageVTwoColumnThirtyOne;

import React, { useState } from "react";

import { Img, Line, List, Text } from "components";

const InformationPageVTwoOrdersummary = (props) => {
  console.log("The props",props?.selectedItems);
  const [selectedItems,setSelectedItems]= useState(props?.selectedItems);
  return (
    <>
      <div className={props.className}>
        {props?.ordersummarytext}
        <div>
  {selectedItems.map((item, index) => (
    <div key={index} className="flex flex-row gap-[11px] items-start justify-start w-full">
      <div className="flex flex-col items-center justify-start w-[34%]">
        <Img
          className="h-[121px] md:h-auto object-cover w-full"
          src={`${process.env.REACT_APP_API_URL}${item?.product?.main_image}`   }
          alt="rectangle176"
        />
      </div>
      <div className="flex flex-1 flex-col gap-[5px] items-end justify-start w-full">
        <div className="flex relative w-full">
          <div className="flex flex-col gap-[5px] items-center justify-start ml-[undefinedpx] my-auto w-auto z-[1]">
            <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-full">
              <Text
                className="capitalize leading-[150.00%] max-w-[171px] md:max-w-full text-base text-teal-900"
                size="txtRobotoRegular16"
              >
                {item?.product?.product_name} 
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-[191px]">
              <Text
                className="capitalize text-gray-800 text-xs w-auto"
                size="txtRobotoRegular12Gray800"
              >
              Quantity  {item?.quantity} 
              </Text>
            </div>
          </div>
          <Img
            className="h-8 ml-[-14px] w-8 z-[1]"
            src="images/img_dotsvertical.svg"
            alt="dotsvertical"
          />
        </div>
        <div className="flex flex-col items-center justify-end px-2.5 py-[5px] w-full">
          <Text
            className="capitalize text-lg text-right text-teal-900 w-auto"
            size="txtRobotoMedium18"
          >
           $ {item?.subtotal}
          </Text>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className="flex flex-col gap-1 items-center justify-start w-[318px]">
          {/* <div className="flex flex-row items-start justify-between px-1 w-full">
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-base text-teal-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.itemstotaltext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-base text-teal-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.itemstotalprice}
              </Text>
            </div>
          </div> */}
          <div className="flex flex-row items-start justify-between px-1 w-full">
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.discountstext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.discountsprice}
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-0.5 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.subtotaltext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.subtotalprice}
                </Text>
              </div>
            </div>
            <Line className="self-center h-px bg-deep_orange-400 shadow-bs w-full" />
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.shippingtext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.shippingprice}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row items-start justify-between px-1 w-full">
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.dutiestaxestext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.dutiestaxesprice}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between px-1 w-full">
            <div className="flex flex-1 flex-col h-[45px] md:h-auto items-center justify-center w-full">
              <Text
                className="capitalize text-center text-lg text-teal-900 w-auto"
                size="txtRobotoMedium18"
              >
                {props?.totaltext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-[45px] md:h-auto items-center justify-start w-full">
              <Text
                className="capitalize text-center text-lg text-teal-900 w-auto"
                size="txtRobotoMedium18"
              >
                {props?.order?.total_amount}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

InformationPageVTwoOrdersummary.defaultProps = {
  ordersummarytext: (
    <Text
      className="border-b border-deep_orange-200 border-solid capitalize h-[39px] pb-[5px] pt-[9px] sm:px-5 px-[35px] text-center text-teal-900 text-xl w-full"
      size="txtRobotoMedium20Teal900"
    >
      <span className="text-teal-900 font-roboto font-medium">
        Order Summary
      </span>
      <span className="text-gray-500 font-roboto text-base font-normal">
        (1 items)
      </span>
    </Text>
  ),
  productname: "365 by Whole Foods Market, Flour All Purpose Baking, 80 Ounce",
  quantitytext: "Quantity: 1",
  pricetext: "$00,00",
  itemstotaltext: "Items Total (1)",
  itemstotalprice: "$00,00",
  discountstext: "Discounts",
  discountsprice: "-$00,00",
  subtotaltext: "Subtotal",
  subtotalprice: "$00,00",
  shippingtext: "Shipping",
  shippingprice: "$00,00",
  dutiestaxestext: "Duties & Taxes",
  dutiestaxesprice: "$00,00",
  totaltext: "Total",
  totalprice: "$00,00",
};

export default InformationPageVTwoOrdersummary;

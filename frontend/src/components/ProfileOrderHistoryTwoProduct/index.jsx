import React from "react";
import { Text,  Img } from "./..";
import { Heading } from "components/Heading";

export default function ProfileOrderHistoryTwoProduct({
  smartphone = "ACCESSORIES",
  googlepixelsix = "Tech21 Evo Clear for Google Pixel 6 Pro – Crystal Clear Phone Case with 12ft Multi-Dr...",
  price = "$39",
  x1 = "x1",
  price1 = "$39",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start items-center w-[43%] gap-4">
        <Img src="images/img_image_80x80.png" alt="image_one" className="w-[80px] object-cover rounded" />
        <div className="flex flex-col items-start justify-start w-[76%] gap-1">
          <Heading size="xs" as="h1">
            {smartphone}
          </Heading>
          <Text as="p" className="!leading-5">
            {googlepixelsix}
          </Text>
        </div>
      </div>
      <div className="flex flex-row justify-start">
        <Text as="p" className="!text-blue_gray-700">
          {price}
        </Text>
        <Text as="p" className="ml-[121px] !text-blue_gray-700">
          {x1}
        </Text>
        <Text as="p" className="ml-[135px] !font-medium">
          {price1}
        </Text>
      </div>
    </div>
  );
}

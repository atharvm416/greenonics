import React from "react";

import { Text,  Img, Input, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import ProfileAccountDetailsNavigationside from "../../components/ProfileAccountDetailsNavigationside";
import ProfileOrderHistoryTwoProduct from "../../components/ProfileOrderHistoryTwoProduct";
import { Heading } from "components/Heading";
import Header from "components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProfileorderhistoryTwoPage() {
  const [searchBarValue19, setSearchBarValue19] = React.useState("");

  return (
    <>
     
      <div className="flex flex-col items-center justify-start w-full gap-8 bg-white-A700">
      <Header className="bg-yellow-50 flex  md:px-5 w-full" />
             
       
      
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between items-start w-full p-10">
            <ProfileAccountDetailsNavigationside className="flex flex-col items-center justify-start w-[19%] ml-[59px] py-4 border-gray-300 border border-solid bg-white-A700_02 shadow-xs rounded" />
            <div className="flex flex-col items-center justify-start w-[69%] mb-8 mr-[61px] border-gray-300 border border-solid bg-white-A700_02 rounded">
              <div className="flex flex-row justify-start items-center w-full gap-3 p-3.5 rounded-tl rounded-tr border-gray-300 border border-solid bg-white-A700_02">
                <Img src="images/img_regular_arrowleft.svg" alt="regular_one" className="h-[24px] w-[24px] ml-2.5" />
                <Text as="p" className="uppercase !font-medium">
                  Order Details
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-[26px] p-6">
                <div className="flex flex-row justify-between items-center w-full p-6 border-yellow-200 border border-solid bg-yellow-50_01 rounded">
                  <div className="flex flex-col items-start justify-start w-[45%] gap-2.5">
                    <Text size="xl" as="p">
                      #96459761
                    </Text>
                    <div className="flex flex-row justify-start gap-2">
                      <Text as="p" className="!text-blue_gray-700">
                        2 Products
                      </Text>
                      <Text as="p" className="!text-blue_gray-700">
                        •
                      </Text>
                      <Text as="p" className="!text-blue_gray-700">
                        Order Placed in 17 Jan, 2021 at 7:32 PM
                      </Text>
                    </div>
                  </div>
                  <Heading size="md" as="h1">
                    $1199.00
                  </Heading>
                </div>
                <Text as="p">
                  <span className="text-blue_gray-700">Order expected arrival</span>
                  <span className="text-gray-900_01"></span>
                  <span className="text-gray-900_01 font-medium">23 Jan, 2021</span>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6 py-8">
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[19px]">
                  <Text size="lg" as="p" className="ml-6">
                    <span className="text-gray-900_01">Product </span>
                    <span className="text-blue_gray-600 font-normal">(02)</span>
                  </Text>
                  <div className="flex flex-row justify-between items-center w-full p-2.5 border-gray-300 border border-solid bg-gray-100">
                    <Text size="xs" as="p" className="ml-3.5 !text-blue_gray-700 uppercase">
                      Products
                    </Text>
                    <div className="flex flex-row justify-start mr-3.5">
                      <Text size="xs" as="p" className="!text-blue_gray-700 uppercase">
                        Price
                      </Text>
                      <Text size="xs" as="p" className="ml-28 !text-blue_gray-700 uppercase">
                        Quantity
                      </Text>
                      <Text size="xs" as="p" className="ml-[86px] !text-blue_gray-700 uppercase">
                        Sub-Total
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[96%] gap-4">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-start items-center w-[43%] gap-4">
                      <Img src="images/img_image.png" alt="smartphone_one" className="w-[80px] object-cover rounded" />
                      <div className="flex flex-col items-start justify-start w-[76%] gap-1">
                        <Heading size="xs" as="h2">
                          SMARTPHONE
                        </Heading>
                        <Text as="p" className="!leading-5">
                          Google Pixel 6 Pro - 5G Android Phone - Unlocked Smartphone with Advanced Pixel C...
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start">
                      <Text as="p" className="!text-blue_gray-700">
                        $899
                      </Text>
                      <Text as="p" className="ml-28 !text-blue_gray-700">
                        x1
                      </Text>
                      <Text as="p" className="ml-[135px] !font-medium">
                        $899
                      </Text>
                    </div>
                  </div>
                  <div className="w-[936px] h-px bg-gray-300" />
                  <ProfileOrderHistoryTwoProduct className="flex flex-row justify-between w-full" />
                </div>
              </div>
              <div className="flex flex-row justify-start items-start w-[67%] gap-6 p-6 border-gray-300 border border-solid bg-white-A700_02">
                <div className="flex flex-col items-start justify-start w-[47%] pt-0.5 gap-[23px] my-2">
                  <Text size="lg" as="p">
                    Billing Address
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                      <Text as="p" className="!font-medium">
                        Kevin Gilbert
                      </Text>
                      <Text as="p" className="!text-blue_gray-600 !leading-5">
                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200,
                        Bangladesh
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start gap-[3px]">
                      <Text as="p">Phone Number:</Text>
                      <Text as="p" className="!text-blue_gray-600">
                        +1-202-555-0118
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start gap-[3px]">
                      <Text as="p" className="mb-px">
                        Email:
                      </Text>
                      <Text as="p" className="!text-blue_gray-600">
                        kevin.gilbert@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-start w-[50%] mt-2 gap-[23px]">
                  <div className="h-[184px] w-px bg-gray-300" />
                  <div className="flex flex-col items-start justify-start w-[93%] gap-6">
                    <Text size="lg" as="p">
                      Order Notes
                    </Text>
                    <Text as="p" className="!text-blue_gray-600 !leading-5">
                      Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis.
                      Aliquam erat volutpat. Aliquam magna odio.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full p-4 bg-teal-900" />
      </div>
    </>
  );
}

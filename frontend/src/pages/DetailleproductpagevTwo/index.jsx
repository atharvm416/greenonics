import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  SelectBox,
  Text,
} from "components";
import CategoryPageVTwoRowviewTwo from "components/CategoryPageVTwoRowviewTwo";
import CategoryPageVTwoTitleofsection from "components/CategoryPageVTwoTitleofsection";
import CategoryPageVTwoUicard1 from "components/CategoryPageVTwoUicard1";
import DetailleProductPageVTwoColumnTwentyTwo from "components/DetailleProductPageVTwoColumnTwentyTwo";
import DetailleProductPageVTwoHeader from "components/DetailleProductPageVTwoHeader";
import DetailleProductPageVTwoImgofproduct from "components/DetailleProductPageVTwoImgofproduct";
import DetailleProductPageVTwoPriceproduct from "components/DetailleProductPageVTwoPriceproduct";
import Footer from "components/Footer";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";

import { CloseSVG } from "../../assets/images";

const newJerseyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownmenuOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownmenuOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DetailleproductpagevTwoPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start mx-auto pb-1.5 w-full">
        <div className="h-[3308px] md:h-[5669px] sm:h-[6723px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-8 justify-start w-full">
                <DetailleProductPageVTwoHeader className="bg-yellow-50 flex flex-col items-center justify-start p-1 w-full" />
                <CategoryPageVTwoRowviewTwo className="flex sm:flex-col flex-row gap-2 items-start justify-start md:ml-[0] ml-[38px] w-auto sm:w-full" />
              </div>
              <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start pb-8 pt-4 w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start w-auto md:w-full">
                    <DetailleProductPageVTwoImgofproduct className="flex flex-col items-center justify-start w-[22%] md:w-full" />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start p-1 w-auto sm:w-full">
                          <Text
                            className="capitalize text-teal-900 text-xl w-auto"
                            size="txtRobotoMedium20Teal900"
                          >
                            365 by Whole Foods Market, Flour All Purpose Baking,
                            80 Ounce
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-start px-[3px] py-1 w-auto">
                          <Text
                            className="capitalize text-base text-black-900"
                            size="txtRobotoRegular16Black900"
                          >
                            By
                          </Text>
                          <Text
                            className="capitalize text-gray-700 text-sm w-auto"
                            size="txtRobotoLight14Gray700"
                          >
                            {" "}
                            Whole Foods Market
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start py-1 w-auto sm:w-full">
                          <div className="flex flex-row items-center justify-center w-auto">
                            <RatingBar
                              className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                              value={2}
                              starCount={5}
                              activeColor="#799e29"
                              size={24}
                            ></RatingBar>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start px-[3px] w-auto">
                            <div className="flex flex-col items-center justify-start px-[3px] py-1 w-auto">
                              <Text
                                className="capitalize text-gray-700 text-sm w-auto"
                                size="txtRobotoLight14Gray700"
                              >
                                1639 Reviews
                              </Text>
                            </div>
                            <Line className="bg-gray-700 h-[27px] w-px" />
                            <Text
                              className="capitalize text-gray-700 text-sm w-auto"
                              size="txtRobotoLight14Gray700"
                            >
                              100 answered questions
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start w-full">
                        <Line className="bg-red-200 h-px w-[83%]" />
                        <div className="flex flex-col items-center justify-start px-[3px] py-1 w-auto">
                          <Text
                            className="text-black-900_01 text-lg w-auto"
                            size="txtRobotoRomanMedium18Black90001"
                          >
                            In Stock
                          </Text>
                        </div>
                        <Line className="bg-red-200 h-px w-[83%]" />
                      </div>
                      <Text
                        className="capitalize leading-[150.00%] text-base text-black-900_01"
                        size="txtRobotoRegular16Black90001"
                      >
                        <>
                          Best By : May 22 2024
                          <br />
                          Date First Available : November 20 2019
                          <br />
                          Shipping Weight : 0.69 kgSwitch to Imperial units
                          <br />
                          Product Code : BRM-11313
                          <br />
                          UPC Code : 039978113139
                          <br />
                          Package Quantity : 20 oz
                          <br />
                          Dimensions : 15.2 x 17.3 x 7.1 cm, 0.59 kgSwitch to
                          Imperial units
                        </>
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-black-900_01 w-auto"
                          size="txtRobotoRegular16Black90001"
                        >
                          About this time:
                        </Text>
                        <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[641px] p-1 w-full">
                          <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                          <Text
                            className="capitalize flex-1 leading-[120.00%] max-w-[616px] md:max-w-full text-black-900_01 text-sm"
                            size="txtRobotoLight14Black90001"
                          >
                            365 by Whole Foods Market products give you that
                            dance-down-the-aisles feeling. Our huge range of
                            choices with high-quality ingredients at prices you
                            can get down with makes grocery shopping so much
                            more than tossing the basics in your cart. It’s the
                            splurgiest way to save.
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[641px] p-1 w-full">
                          <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="capitalize text-gray-900_01 text-sm w-auto"
                              size="txtRobotoRomanRegular14"
                            >
                              Ingredients
                            </Text>
                            <Text
                              className="capitalize leading-[120.00%] max-w-[306px] md:max-w-full text-black-900_01 text-sm"
                              size="txtRobotoLight14Black90001"
                            >
                              UNBLEACHED ENRICHED WHEAT FLOUR, NIACIN, REDUCED
                              IRON, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC
                              ACID.
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[631px] p-1 w-full">
                          <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <div className="flex flex-row gap-1 items-start justify-start w-full">
                              <Text
                                className="capitalize text-blue_gray-900_01 text-sm w-auto"
                                size="txtRobotoRomanRegular14Bluegray90001"
                              >
                                Brand
                              </Text>
                              <Text
                                className="capitalize flex-1 text-black-900_01 text-sm w-auto"
                                size="txtRobotoLight14Black90001"
                              >
                                by Whole Foods{" "}
                              </Text>
                            </div>
                            <div className="flex flex-row gap-1 items-start justify-start w-full">
                              <Text
                                className="capitalize text-blue_gray-900_01 text-sm w-auto"
                                size="txtRobotoRomanRegular14Bluegray90001"
                              >
                                Weight
                              </Text>
                              <Text
                                className="capitalize text-black-900_01 text-sm w-auto"
                                size="txtRobotoLight14Black90001"
                              >
                                5 Pounds
                              </Text>
                            </div>
                            <div className="flex flex-row gap-1 items-start justify-start w-full">
                              <Text
                                className="capitalize text-blue_gray-900_01 text-sm w-auto"
                                size="txtRobotoRomanRegular14Bluegray90001"
                              >
                                Allergen Information
                              </Text>
                              <Text
                                className="capitalize text-black-900_01 text-sm w-auto"
                                size="txtRobotoLight14Black90001"
                              >
                                Wheat
                              </Text>
                            </div>
                            <div className="flex flex-row gap-1 items-start justify-start w-full">
                              <Text
                                className="capitalize text-blue_gray-900_01 text-sm w-auto"
                                size="txtRobotoRomanRegular14Bluegray90001"
                              >
                                Specialty
                              </Text>
                              <Text
                                className="capitalize text-black-900_01 text-sm w-auto"
                                size="txtRobotoLight14Black90001"
                              >
                                Specialty
                              </Text>
                            </div>
                            <div className="flex flex-row gap-1 items-start justify-start w-full">
                              <Text
                                className="capitalize text-blue_gray-900_01 text-sm w-auto"
                                size="txtRobotoRomanRegular14Bluegray90001"
                              >
                                Package Weight
                              </Text>
                              <Text
                                className="capitalize text-black-900_01 text-sm w-auto"
                                size="txtRobotoLight14Black90001"
                              >
                                2.3 Kilograms
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[631px] p-1 w-full">
                          <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                          <Text
                            className="capitalize flex-1 leading-[120.00%] text-black-900_01 text-sm"
                            size="txtRobotoLight14Black90001"
                          >
                            <>
                              Brought to you by Whole Foods Market
                              <br />
                              Unbleached and enriched with vitamins and minerals
                              <br />
                              Milled for baking quality and consistency
                              <br />
                              The ideal choice for all your recipes that call
                              for flour
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <DetailleProductPageVTwoPriceproduct className="bg-white-A700_01 border-2 border-deep_orange-600 border-solid flex flex-col items-start justify-start p-3.5 rounded w-[28%] md:w-full" />
                  </div>
                  <Line className="bg-red-200 h-px w-full" />
                  <div className="flex flex-col items-center justify-start w-auto md:w-full">
                    <InformationPageVTwoRowviewNine
                      className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto md:w-full"
                      viewNine="Product overview"
                      viewEleven="Certifications"
                      viewTwelve="Customer questions & answers"
                    />
                    <div className="border border-deep_orange-200 border-solid flex md:flex-col flex-row gap-8 items-start justify-center pb-4 pt-8 px-4 rounded w-auto md:w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                            <div className="flex flex-col items-start justify-center p-1 w-full">
                              <Text
                                className="capitalize text-base text-black-900_01 text-center w-auto"
                                size="txtRobotoRegular16Black90001"
                              >
                                <>Product Description</>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                            <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                              <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                              <Text
                                className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                                size="txtRobotoLight14Black90001"
                              >
                                Our all-purpose flour is milled from select hard
                                red wheat grown in high mountain valleys on
                                family-owned farms.
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                              <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                              <Text
                                className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                                size="txtRobotoLight14Black90001"
                              >
                                365 by Whole Foods Market products give you that
                                dance-down-the-aisles feeling. Our huge range of
                                choices with high-quality ingredients at prices
                                you can get down with makes grocery shopping so
                                much more than tossing the basics in your cart.
                                It’s the splurgiest way to save.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-center p-1 w-full">
                            <Text
                              className="capitalize text-base text-black-900_01 text-center w-auto"
                              size="txtRobotoRegular16Black90001"
                            >
                              Important information
                            </Text>
                          </div>
                          <List
                            className="flex flex-col gap-1 items-start w-auto"
                            orientation="vertical"
                          >
                            <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                              <div className="flex flex-col items-start justify-start p-1 w-full">
                                <Text
                                  className="capitalize text-black-900_01 text-sm w-auto"
                                  size="txtRobotoRomanRegular14Black90001"
                                >
                                  title of description
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                                <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                                <Text
                                  className="capitalize flex-1 text-black-900_01 text-sm w-auto"
                                  size="txtRobotoLight14Black90001"
                                >
                                  DO NOT EAT RAW FLOUR, DOUGH OR BATTER.
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                              <div className="flex flex-col items-start justify-start p-1 w-full">
                                <Text
                                  className="capitalize text-black-900_01 text-sm w-auto"
                                  size="txtRobotoRomanRegular14Black90001"
                                >
                                  Ingredients
                                </Text>
                              </div>
                              <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                                <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                                <Text
                                  className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                                  size="txtRobotoLight14Black90001"
                                >
                                  UNBLEACHED ENRICHED WHEAT FLOUR, NIACIN,
                                  REDUCED IRON, THIAMINE MONONITRATE,
                                  RIBOFLAVIN, FOLIC ACID.
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                              <div className="flex flex-col items-start justify-start p-1 w-full">
                                <Text
                                  className="capitalize text-black-900_01 text-sm w-auto"
                                  size="txtRobotoRomanRegular14Black90001"
                                >
                                  Directions
                                </Text>
                              </div>
                              <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                                <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                                <Text
                                  className="capitalize flex-1 text-black-900_01 text-sm w-auto"
                                  size="txtRobotoLight14Black90001"
                                >
                                  COOL DRY PLACE
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                              <div className="flex flex-col items-start justify-start p-1 w-full">
                                <Text
                                  className="capitalize text-black-900_01 text-sm w-auto"
                                  size="txtRobotoRomanRegular14Black90001"
                                >
                                  Legal Disclaimer
                                </Text>
                              </div>
                              <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                                <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                                <Text
                                  className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                                  size="txtRobotoLight14Black90001"
                                >
                                  Statements regarding dietary supplements have
                                  not been evaluated by the FDA and are not
                                  intended to diagnose, treat, cure, or prevent
                                  any disease or health condition.
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start w-[571px] sm:w-full">
                        <div className="flex flex-col items-start justify-center p-1 w-[571px] sm:w-full">
                          <Text
                            className="capitalize text-base text-black-900_01 text-center w-auto"
                            size="txtRobotoRegular16Black90001"
                          >
                            <>Product Information</>
                          </Text>
                        </div>
                        <div className="border border-deep_orange-200_01 border-solid flex flex-col gap-2 items-start justify-start p-4 rounded w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <Text
                              className="capitalize text-base text-black-900 w-auto"
                              size="txtRobotoRegular16Black900"
                            >
                              Package Dimensions :{" "}
                            </Text>
                            <Text
                              className="capitalize flex-1 text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              <>12.44 x 11.89 x 3.74 inches</>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <Text
                              className="capitalize text-base text-black-900 w-auto"
                              size="txtRobotoRegular16Black900"
                            >
                              Item Weight :{" "}
                            </Text>
                            <Text
                              className="capitalize flex-1 text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              <>2.59 pounds</>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start w-full">
                            <Text
                              className="capitalize text-base text-black-900 w-auto"
                              size="txtRobotoRegular16Black900"
                            >
                              ASIN :
                            </Text>
                            <Text
                              className="capitalize flex-1 text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              <>B09ZXBR84P</>
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                            <Text
                              className="capitalize text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              Customer Reviews :{" "}
                            </Text>
                            <Text
                              className="capitalize flex-1 text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              <>
                                4.7 out of 5 stars 24 ratings4.7 out of 5 stars
                              </>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start w-full">
                            <Text
                              className="capitalize text-base text-black-900 w-auto"
                              size="txtRobotoRegular16Black900"
                            >
                              Date First :
                            </Text>
                            <Text
                              className="capitalize flex-1 text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              <>Available May 10, 2022</>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <Text
                              className="capitalize text-base text-black-900 w-auto"
                              size="txtRobotoRegular16Black900"
                            >
                              Manufacturer :{" "}
                            </Text>
                            <Text
                              className="capitalize flex-1 text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              <>ghiz</>
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-start justify-start w-full">
                            <Text
                              className="capitalize text-base text-black-900 w-auto"
                              size="txtRobotoRegular16Black900"
                            >
                              Country of{" "}
                            </Text>
                            <Text
                              className="capitalize flex-1 text-black-900 text-sm w-auto"
                              size="txtRobotoLight14Black900"
                            >
                              Origin Moroco
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center justify-center max-w-[1388px] py-4 w-full">
                  <div className="flex flex-col items-center justify-start max-w-[1368px] w-full">
                    <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
                      <Text
                        className="capitalize text-teal-900 text-xl w-auto"
                        size="txtRobotoMedium20Teal900"
                      >
                        Compare With Similar Items
                      </Text>
                    </div>
                  </div>
                  <div className="border border-deep_orange-200 border-solid flex flex-col items-center justify-center max-w-[1328px] px-1 py-2 rounded w-full">
                    <div className="flex flex-col gap-2 items-start justify-start max-w-7xl w-full">
                      <div className="flex relative w-full">
                        <div className="flex m-auto w-[62%] md:w-full">
                          <div className="flex my-auto w-[67%] sm:w-full">
                            <div className="flex flex-col items-center justify-start my-auto w-[51%]">
                              <div className="bg-white-A700 flex flex-col items-center justify-start p-0.5 w-full">
                                <div className="flex flex-col h-[370px] md:h-auto items-center justify-center mb-[3px] w-[254px]">
                                  <Img
                                    className="h-[361px] md:h-auto object-cover w-[245px]"
                                    src="images/img_rectangle243_125x160.png"
                                    alt="rectangle243"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start ml-[-6.6px] my-auto w-[51%] z-[1]">
                              <div className="bg-white-A700 flex flex-col items-center justify-start p-0.5 w-full">
                                <div className="flex flex-col h-[370px] md:h-auto items-center justify-center mb-[3px] w-[254px]">
                                  <Img
                                    className="h-[361px] md:h-auto object-cover w-[245px]"
                                    src="images/img_rectangle243_6.png"
                                    alt="rectangle243_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start ml-[-6.6px] my-auto w-[34%] z-[1]">
                            <div className="bg-white-A700 flex flex-col items-center justify-start p-0.5 w-full">
                              <div className="flex flex-col h-[370px] md:h-auto items-center justify-center mb-[3px] w-[254px]">
                                <Img
                                  className="h-[361px] md:h-auto object-cover w-[245px]"
                                  src="images/img_rectangle243_10.png"
                                  alt="rectangle243_Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[-6.6px] my-auto w-1/5 z-[1]">
                          <div className="bg-white-A700 flex flex-col items-center justify-start pl-0.5 py-0.5 w-full">
                            <div className="flex flex-col h-[370px] md:h-auto items-center justify-center mb-[3px] w-60">
                              <Img
                                className="h-[361px] md:h-auto object-cover w-[236px]"
                                src="images/img_rectangle243_8.png"
                                alt="rectangle243_Three"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 h-9 md:h-auto items-center justify-between py-2 w-full">
                        <Text
                          className="capitalize flex-1 text-base text-teal-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          Customer Rating :
                        </Text>
                        <List
                          className="sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4"
                          orientation="horizontal"
                        >
                          <div className="flex flex-row items-center justify-center w-full">
                            <div className="flex flex-row items-center justify-center w-[172px]">
                              <RatingBar
                                className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                                value={2}
                                starCount={5}
                                activeColor="#799e29"
                                size={24}
                              ></RatingBar>
                            </div>
                            <Text
                              className="capitalize text-gray-500 text-xs w-auto"
                              size="txtRobotoRegular12Gray500"
                            >
                              200
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-center w-full">
                            <div className="flex flex-row items-center justify-center w-[172px]">
                              <RatingBar
                                className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                                value={2}
                                starCount={5}
                                activeColor="#799e29"
                                size={24}
                              ></RatingBar>
                            </div>
                            <Text
                              className="capitalize text-gray-500 text-xs w-auto"
                              size="txtRobotoRegular12Gray500"
                            >
                              200
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-center w-full">
                            <div className="flex flex-row items-center justify-center w-[172px]">
                              <RatingBar
                                className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                                value={2}
                                starCount={5}
                                activeColor="#799e29"
                                size={24}
                              ></RatingBar>
                            </div>
                            <Text
                              className="capitalize text-gray-500 text-xs w-auto"
                              size="txtRobotoRegular12Gray500"
                            >
                              200
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-center w-full">
                            <div className="flex flex-row items-center justify-center w-[172px]">
                              <RatingBar
                                className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                                value={2}
                                starCount={5}
                                activeColor="#799e29"
                                size={24}
                              ></RatingBar>
                            </div>
                            <Text
                              className="capitalize text-gray-500 text-xs w-auto"
                              size="txtRobotoRegular12Gray500"
                            >
                              200
                            </Text>
                          </div>
                        </List>
                      </div>
                      <List
                        className="flex flex-col gap-2 items-center w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white-A700 flex flex-1 flex-row items-start justify-start py-2 w-full">
                          <Text
                            className="capitalize text-base text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            Price :
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                        </div>
                        <div className="bg-white-A700 flex flex-1 flex-row items-end justify-start py-2 w-full">
                          <Text
                            className="capitalize text-base text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            Shiping :
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                          <Text
                            className="capitalize text-base text-center text-teal-900 w-auto"
                            size="txtRobotoRegular16"
                          >
                            $00.00
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-8 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-yellow-50_01 flex flex-1 flex-col gap-6 items-center justify-center max-w-[1440px] sm:px-5 px-[29px] py-8 w-full">
                    <CategoryPageVTwoTitleofsection
                      className="flex flex-row md:gap-10 items-center justify-between max-w-[1368px] w-full"
                      ourproduct="Best Sellers In Millets"
                    />
                    <div className="gap-[31px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 items-end justify-start w-auto md:w-full">
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_23.png"
                        productname={
                          <>Nature&#39;s Eats Blanched Almond Flour, 48 </>
                        }
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_11.png"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_24.png"
                        productname="Extra White Gold Vanilla Cake Mix – For Baking.."
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_25.png"
                        productname="Gold Medal Flour"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_26.png"
                        productname="Arrowhead Mills Flour Oat Organic, 16 oz"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_27.png"
                        productname="Anna Flour Extra Fine, 2.2 lb"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_15.png"
                        productname="rummo-pasta-mista-n74-500gr"
                      />
                    </div>
                    <PagerIndicator
                      className="flex gap-4 h-4 items-start justify-start w-44"
                      count={6}
                      activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-yellow-800 w-4"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 bg-lime-200_7f w-4"
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-center max-w-[1440px] sm:px-5 px-[29px] py-8 w-full">
                    <CategoryPageVTwoTitleofsection
                      className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1368px] w-full"
                      ourproduct="Products related To This Item"
                      pagenumber="Vu More"
                    />
                    <div className="gap-[31px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 items-end justify-start w-auto md:w-full">
                      <CategoryPageVTwoUicard1 className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full" />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_11.png"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_9.png"
                        productname="Divella Pasta Mista N.41 - 500gr."
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_28.png"
                        productname="P.A.N. Yellow Corn Meal"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_13.png"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_14.png"
                      />
                      <CategoryPageVTwoUicard1
                        className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-full"
                        productimage="images/img_rectangle243_15.png"
                        productname="rummo-pasta-mista-n74-500gr"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <DetailleProductPageVTwoColumnTwentyTwo
            className="absolute bg-cover bg-no-repeat flex flex-col h-[296px] items-center justify-start p-3.5 right-[7%] top-[3%] w-[19%]"
            style={{ backgroundImage: "url('images/img_cardofaddtocart.svg')" }}
            productquantity={
              <Text className="capitalize text-base text-gray-500 w-full">
                <span className="text-gray-500 font-roboto text-left font-normal">
                  Quantity :{" "}
                </span>
                <span className="text-teal-900 font-roboto text-left font-normal">
                  {" "}
                  1
                </span>
              </Text>
            }
          />
        </div>
        <Footer className="flex gap-8 items-center justify-center md:px-5 py-8 w-full" />
      </div>
    </>
  );
};

export default DetailleproductpagevTwoPage;

import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header1 = (props) => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[9px] md:ml-[0] ml-[25px] mr-9 mt-1 w-[96%]">
          <Img
            className="h-[89px] md:h-auto object-cover"
            src="images/img_greenonicslogo.png"
            alt="greenonicslogo"
          />
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-col items-start justify-start w-auto">
              <div className="flex flex-row gap-1 items-center justify-start p-1 w-auto">
                <Img
                  className="h-[21px] md:h-auto object-cover rounded w-7"
                  src="images/img_rectangle116.png"
                  alt="rectangle116"
                />
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  New jersey
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-4 w-full">
              <Input
                name="searchbar"
                placeholder="Search"
                value={searchbarvalue}
                onChange={(e) => setSearchbarvalue(e)}
                className="!placeholder:text-blue_gray-100 !text-blue_gray-100 font-inter leading-[normal] p-0 text-left text-sm w-full"
                wrapClassName="flex md:flex-1 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-[30px] mr-4 my-auto"
                    src="images/img_icon_search.svg"
                    alt="icon/search"
                  />
                }
                suffix={
                  <CloseSVG
                    className="cursor-pointer h-[30px] my-auto"
                    onClick={() => setSearchbarvalue("")}
                    fillColor="#d7d9dd"
                    style={{
                      visibility:
                        searchbarvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={30}
                    width={30}
                    viewBox="0 0 30 30"
                  />
                }
                shape="round"
                color="white_A700_01"
                size="xs"
                variant="fill"
              ></Input>
              <div className="flex md:flex-1 flex-row gap-4 items-center justify-between w-[13%] md:w-full">
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_iconheart.svg"
                  alt="iconheart"
                />
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_iconshoppingcart.svg"
                  alt="iconshoppingcar"
                />
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[22px] md:pr-10 sm:pr-5 pr-[84px] w-[73%] md:w-full">
              <div className="flex flex-col h-11 md:h-auto items-center justify-center mb-1 pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-center text-teal-900 w-auto"
                  size="txtInterMedium16"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-row gap-1 h-11 md:h-auto items-center justify-center mb-1 ml-1 md:ml-[0] pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-teal-900 w-auto"
                  size="txtInterMedium16"
                >
                  Our Product
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_white_a700_01.svg"
                  alt="arrowdown_One"
                />
              </div>
              <div className="flex flex-row gap-1 h-11 md:h-auto items-center justify-center mb-1 ml-1 md:ml-[0] pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-teal-900 w-auto"
                  size="txtInterMedium16"
                >
                  Trending
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_white_a700_01.svg"
                  alt="arrowdown_Two"
                />
              </div>
              <div className="flex flex-col h-11 md:h-auto items-center justify-center ml-1 md:ml-[0] md:mt-0 mt-1 pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-center text-teal-900 w-auto"
                  size="txtInterMedium16"
                >
                  About US
                </Text>
              </div>
              <div className="flex flex-col h-11 md:h-auto items-center justify-center ml-1 md:ml-[0] md:mt-0 mt-1 pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-center text-teal-900 w-auto"
                  size="txtInterMedium16"
                >
                  Customer Service
                </Text>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;

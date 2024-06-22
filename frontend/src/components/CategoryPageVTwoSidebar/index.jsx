import React,{useEffect,useState} from "react";

import { Button, Img, List, RatingBar, Text } from "components";
const CategoryPageVTwoSidebar = (props) => {
  //console.log("This is the category",props?.categorydata);

  const handleclickCategory = async (data) => {
    props.getcategorypage(data);
  };
  const [isDivVisible, setDivVisible] = useState(true);

  const handleArrowClick = () => {
    setDivVisible(!isDivVisible);
  };
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
            <Text
              className="capitalize text-lg text-teal-900 w-auto"
              size="txtRobotoMedium18"
            >
              {props?.categoriestext}
            </Text>
            <Img
              className="h-6 w-6"
              src={isDivVisible ? "images/img_arrowdown.svg" : "images/img_arrowup.svg"}
              alt="arrowup"
              onClick={handleArrowClick}
              style={{ height: '20px', width: '20px' }}
            />
          </div>
          {isDivVisible && (
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            {props?.categorydata.flat().map((data, index) => (
              <React.Fragment key={`CategoryPageVTwoUicard${index}`}>
                <div
                  className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full cursor-pointer"
                  onClick={() => handleclickCategory(data?.category_id)}
                >
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {data?.category_name}
                  </Text>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    )}
        </div>
        {/* <List
          className="flex flex-col gap-8 items-center w-full"
          orientation="vertical"
        >
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
              <Text
                className="capitalize text-lg text-teal-900 w-auto"
                size="txtRobotoMedium18"
              >
                {props?.noodlestext}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowup"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Text
                      className="capitalize text-base text-blue_gray-500 w-auto"
                      size="txtRobotoRegular16Bluegray500"
                    >
                      {props?.multigrainmilletnoodlestext}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Text
                      className="capitalize text-base text-blue_gray-500 w-auto"
                      size="txtRobotoRegular16Bluegray500"
                    >
                      {props?.pearlmilletnoodlestext}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Text
                      className="capitalize text-base text-blue_gray-500 w-auto"
                      size="txtRobotoRegular16Bluegray500"
                    >
                      {props?.sorgummilletnoodlestext}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Text
                      className="capitalize text-base text-blue_gray-500 w-auto"
                      size="txtRobotoRegular16Bluegray500"
                    >
                      {props?.quinoanoodlestext}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Text
                      className="capitalize text-base text-blue_gray-500 w-auto"
                      size="txtRobotoRegular16Bluegray500"
                    >
                      {props?.amaranthnoodlestext}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Text
                      className="capitalize text-base text-blue_gray-500 w-auto"
                      size="txtRobotoRegular16Bluegray500"
                    >
                      {props?.littlemilletnoodlestext}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List> */}
        {/* <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
            <Text
              className="capitalize text-lg text-teal-900 w-auto"
              size="txtRobotoMedium18"
            >
              {props?.milletproductstext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowup_One"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.milletcrackerstext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.milletnoodlestext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.milletcookiestext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.breadstickstext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.almondheartstext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.pastatext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.namkeentext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.multimilletmusellitext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.milletchocostext}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.milletchocolatestarstext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
            <Text
              className="capitalize text-lg text-teal-900 w-auto"
              size="txtRobotoMedium18"
            >
              {props?.milletsEighteen}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowup_Two"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Six"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsNineteen}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Seven"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwenty}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Eight"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwentyOne}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Nine"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwentyTwo}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Ten"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwentyThree}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Eleven"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwentyFour}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
            <Text
              className="capitalize text-lg text-teal-900 w-auto"
              size="txtRobotoMedium18"
            >
              {props?.milletsTwentyFive}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowup_Three"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start w-full">
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Twelve"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwentySix}
                  </Text>
                </div>
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Thirteen"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwentySeven}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
            <Text
              className="capitalize text-base text-teal-900 w-auto"
              size="txtRobotoRegular16"
            >
              {props?.milletsTwentyEight}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowup_Four"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox_Fourteen"
                  />
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    {props?.milletsTwentyNine}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
            <Text
              className="capitalize text-teal-900 text-xl w-auto"
              size="txtRobotoMedium20Teal900"
            >
              {props?.avgcustomerreviewtext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowup_Five"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <List
                className="flex flex-col gap-1 items-start w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-1 items-center justify-start my-0 pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox"
                  />
                  <div className="flex flex-row items-center justify-center w-auto">
                    <RatingBar
                      className="flex justify-between w-[136px]"
                      value={5}
                      starCount={5}
                      activeColor="#799e29"
                      size={24}
                    ></RatingBar>
                  </div>
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.millets}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-1 items-center justify-start my-0 pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox"
                  />
                  <div className="flex flex-row items-center justify-center w-auto">
                    <RatingBar
                      className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                      value={2}
                      starCount={5}
                      activeColor="#799e29"
                      size={24}
                    ></RatingBar>
                  </div>
                  <Text
                    className="capitalize text-base text-blue_gray-500"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.millets1}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-1 items-center justify-start my-0 pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox"
                  />
                  <div className="flex flex-row items-center justify-center w-auto">
                    <RatingBar
                      className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                      value={3}
                      starCount={5}
                      activeColor="#799e29"
                      size={24}
                    ></RatingBar>
                  </div>
                  <Text
                    className="capitalize text-base text-blue_gray-500"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.millets2}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-1 items-center justify-start my-0 pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox"
                  />
                  <div className="flex flex-row items-center justify-center w-auto">
                    <RatingBar
                      className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                      value={4}
                      starCount={5}
                      activeColor="#799e29"
                      size={24}
                    ></RatingBar>
                  </div>
                  <Text
                    className="capitalize text-base text-blue_gray-500 w-auto"
                    size="txtRobotoRegular16Bluegray500"
                  >
                    {props?.millets3}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-1 items-center justify-start my-0 pl-3 pr-1 py-2 rounded w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconcheckbox.svg"
                    alt="iconcheckbox"
                  />
                  <div className="flex flex-row items-center justify-center w-auto">
                    <RatingBar
                      className="flex justify-between w-[136px]"
                      value={5}
                      starCount={5}
                      activeColor="#799e29"
                      size={24}
                    ></RatingBar>
                  </div>
                  <Text
                    className="capitalize text-[11px] text-blue_gray-500 w-auto"
                    size="txtRobotoRegular11"
                  >
                    {props?.millets4}
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-4 items-start justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
              <Text
                className="capitalize text-lg text-teal-900 w-auto"
                size="txtRobotoMedium18"
              >
                {props?.pricetext}
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowup_Six"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconcheckbox.svg"
                      alt="iconcheckbox_Fifteen"
                    />
                    {props?.under25text}
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconcheckbox.svg"
                      alt="iconcheckbox_Sixteen"
                    />
                    {props?.p25to50text}
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconcheckbox.svg"
                      alt="iconcheckbox_Seventeen"
                    />
                    {props?.p50to100text}
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconcheckbox.svg"
                      alt="iconcheckbox_Eighteen"
                    />
                    {props?.p100to200text}
                  </div>
                  <div className="flex flex-row gap-1 items-center justify-start pl-3 pr-1 py-2 rounded w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconcheckbox.svg"
                      alt="iconcheckbox_Nineteen"
                    />
                    {props?.p200abovetext}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start sm:pl-5 pl-[23px] w-auto">
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <Button
                className="!text-blue_gray-800 capitalize cursor-pointer font-roboto h-[46px] text-base text-center w-[86px]"
                shape="round"
                color="blue_gray_300"
                size="lg"
                variant="outline"
              >
                {props?.min}
              </Button>
              <Button
                className="!text-blue_gray-800 capitalize cursor-pointer font-roboto h-[46px] text-base text-center w-[84px]"
                shape="round"
                color="blue_gray_300"
                size="lg"
                variant="outline"
              >
                {props?.max}
              </Button>
            </div>
            <Button
              className="!text-gray-200 border border-solid border-yellow-800 cursor-pointer font-inter font-medium h-9 leading-[normal] min-w-[51px] text-center text-sm"
              shape="round"
              color="yellow_800"
              size="md"
              variant="fill"
            >
              {props?.go}
            </Button>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-2 items-start justify-start w-full">
          <div className="bg-amber-100 flex flex-row gap-1 items-center justify-between pl-2 pr-1 py-2 w-full">
            <Text
              className="capitalize text-lg text-teal-900 w-auto"
              size="txtRobotoMedium18"
            >
              {props?.dealsdiscountstext}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowup_Seven"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start pl-3 pr-1 py-2 rounded w-full">
              <Text
                className="capitalize text-base text-teal-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.alldiscountstext}
              </Text>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

CategoryPageVTwoSidebar.defaultProps = {
  categoriestext: "Categories",
  multimilletstext: "Multi millets",
  multigrainmilletstext: "Multi grain millets",
  wholewheattext: "Whole wheat",
  jowartext: "Jowar",
  bajratext: "Bajra",
  organictext: "Organic",
  noodlestext: "Noodles",
  multigrainmilletnoodlestext: "multi grain Millet noodles ",
  pearlmilletnoodlestext: "Pearl Millet (bajra) Noodles",
  sorgummilletnoodlestext: "Sorgum Millet (Jowar) Noodles",
  quinoanoodlestext: "quinoa Noodles",
  amaranthnoodlestext: "amaranth (rajgira) Noodles",
  littlemilletnoodlestext: "Little millet Noodles",
  noodlestext1: "Noodles",
  multigrainmilletnoodlestext1: "multi grain Millet noodles ",
  pearlmilletnoodlestext1: "Pearl Millet (bajra) Noodles",
  sorgummilletnoodlestext1: "Sorgum Millet (Jowar) Noodles",
  quinoanoodlestext1: "quinoa Noodles",
  amaranthnoodlestext1: "amaranth (rajgira) Noodles",
  littlemilletnoodlestext1: "Little millet Noodles",
  multigrainmilletfuisillipastatext: "Multi grain millet Fuisilli pasta",
  milletproductstext: "Millet products",
  milletcrackerstext: "Millet Crackers",
  milletnoodlestext: "Millet Noodles",
  milletcookiestext: "Millet Cookies",
  breadstickstext: "Bread sticks",
  almondheartstext: "Almond hearts",
  pastatext: "Pasta",
  namkeentext: "Namkeen",
  multimilletmusellitext: "Multi millet muselli",
  milletchocostext: "Millet chocos",
  milletchocolatestarstext: "millet Chocolate stars",
  milletsEighteen: "organic products",
  milletsNineteen: "Jaggery",
  milletsTwenty: "lentils",
  milletsTwentyOne: "Sona Masoori",
  milletsTwentyTwo: "Kolam rice",
  milletsTwentyThree: "Ambe mohor rice",
  milletsTwentyFour: "Indrayani rice",
  milletsTwentyFive: "Mango categories",
  milletsTwentySix: "Devgad Alphonso",
  milletsTwentySeven: "Ratnagiri Alphonso",
  milletsTwentyEight: "Availability",
  milletsTwentyNine: "Hide out of stock",
  avgcustomerreviewtext: "Avg. Customer Review",
  millets: "100",
  millets1: "1k",
  millets2: "5k",
  millets3: "10k",
  millets4: "100k",
  pricetext: "Price",
  under25text: (
    <Text
      className="capitalize text-base text-teal-900 w-auto"
      size="txtRobotoRegular16"
    >
      <span className="text-teal-900 font-roboto text-left font-normal">
        Under $25{" "}
      </span>
      <span className="text-teal-900 font-roboto text-left font-normal">
        (500)
      </span>
    </Text>
  ),
  p25to50text: (
    <Text
      className="capitalize text-base text-teal-900 w-auto"
      size="txtRobotoRegular16"
    >
      <span className="text-teal-900 font-roboto text-left font-normal">
        $25 to $50
      </span>
      <span className="text-teal-900 font-roboto text-left font-normal">
        (500)
      </span>
    </Text>
  ),
  p50to100text: (
    <Text
      className="capitalize text-base text-teal-900 w-auto"
      size="txtRobotoRegular16"
    >
      <span className="text-teal-900 font-roboto text-left font-normal">
        $50 to $100{" "}
      </span>
      <span className="text-teal-900 font-roboto text-left font-normal">
        (500)
      </span>
    </Text>
  ),
  p100to200text: (
    <Text
      className="capitalize text-base text-teal-900 w-auto"
      size="txtRobotoRegular16"
    >
      <span className="text-teal-900 font-roboto text-left font-normal">
        $100 to $200{" "}
      </span>
      <span className="text-teal-900 font-roboto text-left font-normal">
        (500)
      </span>
    </Text>
  ),
  p200abovetext: (
    <Text
      className="capitalize text-base text-teal-900 w-auto"
      size="txtRobotoRegular16"
    >
      <span className="text-teal-900 font-roboto text-left font-normal">
        $200 & Above{" "}
      </span>
      <span className="text-teal-900 font-roboto text-left font-normal">
        (500)
      </span>
    </Text>
  ),
  min: "$Min",
  max: "$Max",
  go: "Go",
  dealsdiscountstext: "Deals & discounts",
  alldiscountstext: "All Discounts",
};

export default CategoryPageVTwoSidebar;

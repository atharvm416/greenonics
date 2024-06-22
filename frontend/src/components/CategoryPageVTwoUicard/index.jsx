import React, { useEffect, useState } from "react";

import { Img, RatingBar, Text } from "components";
import { useNavigate } from "react-router-dom";

const CategoryPageVTwoUicard = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props?.data);
  }, [props?.data]);

  const handleCardClick = () => {
    console.log("This is props id", props?.data);
   navigate('/detailleproductpagevthree', {state:{ "data": props?.data }} );
  //  navigation.navigate('/detailleproductpagevthree', { data });
  };
  return (
    <>
      <div className={props.className} onClick={handleCardClick}>
        <div className="flex flex-col items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-start w-auto">
            <Img
              className="h-[361px] md:h-auto object-cover w-[303px] cursor-pointer"
              alt="rectangle243"
              src={
                `${process.env.REACT_APP_API_URL}${data?.main_image}` || 
                data?.image
              }
            />
          </div>
          <div className="flex flex-col gap-1 items-start justify-center p-1 w-[303px]">
            <div className="flex flex-col h-10 md:h-auto items-start justify-start py-2 w-full">
            <Text
            className="capitalize text-sm text-teal-900 w-auto"
            size="txtRobotoLight14Teal900"
          >
            {`${data?.product_name} - ${data?.packet_size} ${data?.packet_size_uom}`}
          </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-auto">
              <div className="flex flex-row items-center justify-center w-auto">
                <RatingBar
                  className=" flex justify-between rounded-[1px] w-[136px]"
                  value={3}
                  starCount={5}
                  activeColor="#799e29"
                  size={24}
                ></RatingBar>
              </div>
            </div>
            <Text
            className="capitalize text-base text-teal-900 w-auto"
            size="txtRobotoRegular16"
          >
            {`$${data?.product_price}`}
          </Text>
            <Text
              className="capitalize text-base text-blue_gray-500 w-full"
              size="txtRobotoRegular16Bluegray500"
            >
              {props?.shippingprice}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CategoryPageVTwoUicard.defaultProps = {
  shippingprice: "$00.00 (Shiping)",
};

export default CategoryPageVTwoUicard;

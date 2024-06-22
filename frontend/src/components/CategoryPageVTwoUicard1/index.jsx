import React, { useEffect, useState } from "react";

import { Img, RatingBar, Text } from "components";
import { useNavigate } from "react-router-dom";
const CategoryPageVTwoUicard1 = (props) => {
  //console.log("image data we are getting",props)
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props?.data);
  }, [props?.data]);

  const handleCardClick = () => {
    console.log("This is props id", props?.data);
   navigate('/detailleproductpagevthree', {state:{ "data": props?.data}} );
  //  navigation.navigate('/detailleproductpagevthree', { data });
  };

  return (
    <>
      <div className={props.className} onClick={handleCardClick}>
        <div className="flex flex-col items-center justify-start w-full">
          <Img
            className="h-[125px] md:h-auto object-cover w-full"
            alt="rectangle243"
            src={
              `${process.env.REACT_APP_API_URL}${data?.main_image}` || 
              data?.image
            }
          />
        </div>
        <div className="flex flex-col gap-1 h-[121px] md:h-auto items-start justify-start p-1 w-40">
          <Text
            className="capitalize text-sm text-teal-900 w-auto"
            size="txtRobotoLight14Teal900"
          >
            {`${data?.product_name} - ${data?.packet_size} ${data?.packet_size_uom}`}
          </Text>
          {/* <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
            <div className="flex flex-row items-center justify-center w-auto">
              <RatingBar
                className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                value={3}
                starCount={5}
                activeColor="#799e29"
                size={24}
              ></RatingBar>
            </div>
          </div> */}
          <Text
            className="capitalize text-base text-teal-900 w-auto"
            size="txtRobotoRegular16"
          >
            {`$${data?.product_price}`}
          </Text>
          {/* <Text
            className="capitalize text-blue_gray-100 text-xs w-auto"
            size="txtRobotoRegular12Bluegray100"
          >
            {props?.productshipping}
          </Text> */}
        </div>
      </div>
    </>
  );
};

CategoryPageVTwoUicard1.defaultProps = {
  productimage: "images/img_rectangle243_125x160.png",
  productname: "Name product",
  productprice: "$00.00",
  productshipping: "$00.00 (Shiping)",
};

export default CategoryPageVTwoUicard1;

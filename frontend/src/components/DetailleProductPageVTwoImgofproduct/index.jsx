import React from "react";

import { Img } from "components";

const DetailleProductPageVTwoImgofproduct = (props) => {
  console.log(props.product_image);
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-start justify-start w-full">
          <Img
            className="h-[300px] md:h-auto object-cover w-[300px]"
            src={`${process.env.REACT_APP_API_URL}${props.product_image?.mainImage}`}
            alt="rectangle136"
          />
          <div className="flex flex-row gap-2.5 items-center justify-start w-4/5 md:w-full">
            <Img
              className="h-[50px] md:h-auto object-cover w-[22%]"
              src="images/img_rectangle136.png"
              alt="rectangle137"
            />
            <Img
              className="h-[50px] md:h-auto object-cover w-[22%]"
              src="images/img_rectangle145.png"
              alt="rectangle145"
            />
            <Img
              className="h-[50px] md:h-auto object-cover w-[22%]"
              src="images/img_rectangle146.png"
              alt="rectangle146"
            />
            <div className="h-[50px] relative w-[22%]">
              <Img
                className="absolute h-[50px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle136.png"
                alt="rectangle147"
              />
              <Img
                className="absolute h-[25px] inset-[0] justify-center m-auto w-[25px]"
                src="images/img_user.svg"
                alt="user"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DetailleProductPageVTwoImgofproduct.defaultProps = {};

export default DetailleProductPageVTwoImgofproduct;

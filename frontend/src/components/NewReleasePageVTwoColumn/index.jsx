import React from "react";

import { Img, Text } from "components";

const NewReleasePageVTwoColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2 items-center justify-center w-auto md:w-full">
          <Img
            className="h-40 md:h-auto rounded-[50%] w-40"
            src="images/img_rectangle2_160x160.png"
            alt="rectangleTwo"
          />
          <Text
            className="capitalize text-base text-center text-light_green-700 w-[47px]"
            size="txtRobotoRegular16Lightgreen700"
          >
            {props?.millets}
          </Text>
        </div>
      </div>
    </>
  );
};

NewReleasePageVTwoColumn.defaultProps = { millets: "Millets" };

export default NewReleasePageVTwoColumn;

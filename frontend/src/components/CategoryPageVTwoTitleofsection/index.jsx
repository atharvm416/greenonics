import React from "react";

import { Text } from "components";

const CategoryPageVTwoTitleofsection = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start p-2 rounded w-auto sm:w-full">
          <Text
            className="capitalize text-teal-900 text-xl w-auto"
            size="txtRobotoMedium20Teal900"
          >
            {props?.ourproduct}
          </Text>
        </div>
        {/* <div className="flex flex-col items-end justify-center px-1 py-2 w-auto">
          <Text
            className="capitalize text-red-200 text-xs w-auto"
            size="txtRobotoRegular12"
          >
            {props?.pagenumber}
          </Text>
        </div> */}
      </div>
    </>
  );
};

CategoryPageVTwoTitleofsection.defaultProps = {
  ourproduct: "Recommended for you from our brands",
  // pagenumber: "Page 1 of 3",
};

export default CategoryPageVTwoTitleofsection;

import React, { useEffect, useState } from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";
const HomePageVTwoUicard1 = (props) => {
 const navigate = useNavigate();
  const [data, setData] = useState({});
  // const navigation = useNavigation();

  const handleCardClick = () => {
    console.log("This is props id", props?.data);
   navigate('/detailleproductpagevthree', {state:{ "data": props?.data }} );
  //  navigation.navigate('/detailleproductpagevthree', { data });
  };

  useEffect(() => {
    setData(props?.data);
  }, [props?.data]);
  //console.log("This is teh undefined fata",data);
  return (
    <>
      <div className={props.className} onClick={handleCardClick}>
        <div className="bg-gradient  flex flex-col items-center justify-start px-[19px] w-full">
          <Img
            className="h-[138px] md:h-auto object-cover w-full"
            alt="rectangle243"
            src={`${process.env.REACT_APP_API_URL}${data?.main_image}` || data?.main_image}
          />
        </div>
        <Text
          className="capitalize leading-[120.00%] max-w-[173px] md:max-w-full text-sm text-teal-900"
          size="txtRobotoLight14Teal900"
        >
          {`${data.product_name} - ${data.packet_size} ${data.packet_size_uom}`}
        </Text>
      </div>
    </>
  );
};




export default HomePageVTwoUicard1;

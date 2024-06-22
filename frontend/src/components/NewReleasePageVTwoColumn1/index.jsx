import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const NewReleasePageVTwoColumn1 = (props) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    let category;
  
    if (props?.textvalue === 'Mangoes') {
      category = 7;
    } else if (props?.textvalue === 'millets') {
      category = 11;
    } else if (props?.textvalue === 'Noodles') {
      category = 9;
    }else if (props?.textvalue === 'rice') {
      category = 6;
    }else if (props?.textvalue === 'seeds') {
      category = 13;
    }else if (props?.textvalue === 'pulses') {
      category = 12;
    }else if (props?.textvalue === 'Cookies') {
      category = 2;
    }
    console.log("Text value",props?.textvalue)
   navigate('/categorypagevtwo', {state:{ "data": category }} );
  //  navigation.navigate('/detailleproductpagevthree', { data });
  };
  return (
    <>
      <div className={`flex items-center justify-center w-full cursor-pointer ${props.className}`} onClick={handleCardClick}>
        <div className="flex flex-col gap-2 items-center justify-center w-auto md:w-full">
          <Img
            className="h-[200px] md:h-[250px] rounded-[50%] w-[200px] md:w-[250px]"
            src={props?.image}
            alt="rectangleTwo"
          />
          <Text
            className="capitalize text-base text-center text-teal-900 w-[30px]"
            size="txtRobotoRegular16"
          >
            {props?.textvalue}
          </Text>
        </div>
      </div>
    </>
  );
};

NewReleasePageVTwoColumn1.defaultProps = { textvalue: "Rice" };

export default NewReleasePageVTwoColumn1;

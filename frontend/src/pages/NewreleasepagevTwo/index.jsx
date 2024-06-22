import React, { useEffect, useState } from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import CategoryPageVTwoUicard from "components/CategoryPageVTwoUicard";
import Footer from "components/Footer";
import Header from "components/Header";
import NewReleasePageVTwoColumn from "components/NewReleasePageVTwoColumn";
import NewReleasePageVTwoColumn1 from "components/NewReleasePageVTwoColumn1";
import axios from "axios";
import { CloseSVG } from "../../assets/images";

const NewreleasepagevTwoPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const newReleasePageVTwoColumn1PropList = [
    {},
    { textvalue: "mango" },
    { textvalue: "jaggery" },
  ];
  const categoryPageVTwoUicardPropList = [
    {
      productname: "365 Flour All Purpose Baking, 80 Ounce",
      image: "images/img_rectangle243_17.png",
    },
    {
      productname: "barilla-flour-00-500-gr",
      image: "images/img_rectangle243_18.png",
    },
    { productname: "Prima Self Raising Flour 1kg" },
    {
      productname: "Organic Gluten-Free Oat Flour 5kg",
      image: "images/img_rectangle243_1.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_19.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_20.png",
    },
    { productname: "Name product", image: "images/img_rectangle243_21.png" },
    {
      productname: "Irish Organic Gluten Free Oat Flour",
      image: "images/img_rectangle243_4.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_22.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_5.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_6.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_7.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_18.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_8.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_9.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_10.png",
    },
  ];
  const newrelease = [15, 3, 12, 6, 21, 11, 19,4, 1, 18];
  const [newreleasedata,setnewreleaseData] = useState([]);

  useEffect(() => {


    const fetchDataNewRelease = async () => {
      try {
        const fetchPromises = newrelease.map(async (productId) => {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/api/product/${productId}/`
            );
            //console.log(`New Release ${productId} data:`, response.data);
            setnewreleaseData((prevData) => [...prevData, response.data]);
          } catch (error) {
            console.error(`Error fetching data for new release ${productId}:`, error.message);
          }
        });
  
        await Promise.all(fetchPromises);
      } catch (error) {
        console.error("Error fetching new release data:", error.message);
      }
    };

    fetchDataNewRelease();
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-yellow-50 flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-8 items-center justify-start py-8 w-auto md:w-full">
          <div className="flex flex-col items-center justify-start max-w-[1266px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
              <Text
                className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-gray-900 w-auto"
                size="txtRobotoSemiBold36Gray900"
              >
                new Release
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start max-w-[1358px] mx-auto pb-8 md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="md:gap-5 gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              {newreleasedata.flat().map((data, index) => (
                <React.Fragment key={`CategoryPageVTwoUicard${index}`}>
                  <CategoryPageVTwoUicard
                    className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-start px-1 py-2 rounded w-full"
                    data={data}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <Footer className="flex gap-8 items-center justify-center md:px-5 py-8 w-full" />
      </div>
    </>
  );
};

export default NewreleasepagevTwoPage;

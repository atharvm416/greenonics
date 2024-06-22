import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  SelectBox,
  Slider,
  Text,
} from "components";
import CategoryPageVTwoRowviewTwo from "components/CategoryPageVTwoRowviewTwo";
import CategoryPageVTwoSidebar from "components/CategoryPageVTwoSidebar";
import CategoryPageVTwoTitleofsection from "components/CategoryPageVTwoTitleofsection";
import CategoryPageVTwoUicard from "components/CategoryPageVTwoUicard";
import CategoryPageVTwoUicard1 from "components/CategoryPageVTwoUicard1";
import Footer from "components/Footer";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const viewOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const featuredByOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CategorypagevTwoPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const categoryPageVTwoUicardPropList = [
    { image: "images/img_rectangle243.png" },
    { productname: "Prima Self Raising Flour 1kg" },
    {
      productname: "Organic Gluten-Free Oat Flour 5kg",
      image: "images/img_rectangle243_1.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_2.png",
    },
    { productname: "Name product", image: "images/img_rectangle243_3.png" },
    {
      productname: "Irish Organic Gluten Free Oat Flour",
      image: "images/img_rectangle243_4.png",
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
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_6.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_5.png",
    },
    {
      productname: "Lorem ipsum dolor",
      image: "images/img_rectangle243_7.png",
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
  const navigate = useNavigate();
  const location = useLocation();
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const featuredproduct = [9, 1, 12, 13, 8, 5, 21, 16, 3, 11, 6, 20, 19, 10];
  const [Dealdata,setDealData] = useState([]);
  const [featuredproductdata,setFeaturedProductData] = useState([]);
  const [categoryviewdata,setcategoryviewData] = useState([]);
  const [categorydata,setcategoryData] = useState([]);
  const [selectedCategorydata,setselectedCategoryData] = useState(location.state?.data);
  console.log(location.state);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const getcategorypage = async (selectedCategorydata) => {
    // Check if selectedCategorydata is truthy before making the request
    if (selectedCategorydata) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/product/by_category/${selectedCategorydata}/`
        );
        setcategoryviewData(response.data);
      } catch (error) {
        console.error(`Error fetching category view data:`, error.message);
      }
    } else {
      // Handle the case where selectedCategorydata is empty or undefined
      console.error("Category data is empty or undefined");
    }
  };
  
  useEffect(() => {
    const fetchDataFeaturedProduct = async () => {
      try {
        const fetchPromises = featuredproduct.map(async (productId) => {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/api/product/${productId}/`
            );
            //console.log(`New Release ${productId} data:`, response.data);
            setFeaturedProductData((prevData) => [...prevData, response.data]);
          } catch (error) {
            console.error(`Error fetching data for new release ${productId}:`, error.message);
          }
        });
  
        await Promise.all(fetchPromises);
      } catch (error) {
        console.error("Error fetching new release data:", error.message);
      }
    };

    const getcategory = async () => {
      
    
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/product_category/`
        );
    
        // Handle successful response
        //console.log(`category data:`, response.data);
    
        // Store the data in the component state
        setcategoryData(response.data);
      } catch (error) {
        // Handle error
        console.error(`Error fetching data:`, error.message);
        // You might want to store an error state or handle it as needed
      }
    };
    

    
    fetchDataFeaturedProduct();
    getcategorypage(selectedCategorydata);
    getcategory();
  }, []);
 // console.log("Error fetching new release data:", categoryviewdata)
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
      <Header className="bg-yellow-50 flex  md:px-5 w-full" />
        <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1367px] mx-auto pb-8 md:px-5 w-full">
          <CategoryPageVTwoSidebar
            className="bg-yellow-50_01 flex flex-col gap-8 items-start justify-start py-8 w-[300px] cursor-pointer"
            categorydata={categorydata}
            getcategorypage={getcategorypage}
            under25text={
              <Text className="capitalize text-base text-teal-900 w-auto">
                <span className="text-teal-900 font-roboto text-left font-normal">
                  Under $25{" "}
                </span>
                <span className="text-teal-900 font-roboto text-left font-normal">
                  (500)
                </span>
              </Text>
            }
            p25to50text={
              <Text className="capitalize text-base text-teal-900 w-auto">
                <span className="text-teal-900 font-roboto text-left font-normal">
                  $25 to $50
                </span>
                <span className="text-teal-900 font-roboto text-left font-normal">
                  (500)
                </span>
              </Text>
            }
            p50to100text={
              <Text className="capitalize text-base text-teal-900 w-auto">
                <span className="text-teal-900 font-roboto text-left font-normal">
                  $50 to $100{" "}
                </span>
                <span className="text-teal-900 font-roboto text-left font-normal">
                  (500)
                </span>
              </Text>
            }
            p100to200text={
              <Text className="capitalize text-base text-teal-900 w-auto">
                <span className="text-teal-900 font-roboto text-left font-normal">
                  $100 to $200{" "}
                </span>
                <span className="text-teal-900 font-roboto text-left font-normal">
                  (500)
                </span>
              </Text>
            }
            p200abovetext={
              <Text className="capitalize text-base text-teal-900 w-auto">
                <span className="text-teal-900 font-roboto text-left font-normal">
                  $200 & Above{" "}
                </span>
                <span className="text-teal-900 font-roboto text-left font-normal">
                  (500)
                </span>
              </Text>
            }
          />
          <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-auto md:w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start pb-1 pt-8 w-full">
              <CategoryPageVTwoRowviewTwo className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto" />
            </div>
            <div className="flex flex-col gap-8 items-end justify-start w-auto md:w-full">
              {/* <div className="flex sm:flex-col flex-row gap-8 items-start justify-between max-w-[1035px] w-full">
                <div className="flex flex-col items-center justify-start py-1 w-auto">
                  <div className="flex flex-col items-center justify-start p-1 rounded w-auto">
                  <Text
                      className="capitalize text-center text-gray-900 text-sm w-auto"
                      size="txtRobotoLight14"
                    >
                      {`1-48 of 235 results`}
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-row gap-8 items-center justify-start py-1 w-auto sm:w-full">
                  <SelectBox
                    className="!text-gray-900 capitalize text-base text-center w-[32%] sm:w-full"
                    placeholderClassName="!text-gray-900"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame358"
                    options={viewOptionsList}
                    isSearchable={false}
                    placeholder="View"
                    shape="round"
                    size="xs"
                  />
                  <SelectBox
                    className="!text-gray-900 capitalize text-base text-center w-[55%] sm:w-full"
                    placeholderClassName="!text-gray-900"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frame359"
                    options={featuredByOptionsList}
                    isSearchable={false}
                    placeholder="Featured By"
                    shape="round"
                    size="xs"
                  />
                </div>
              </div> */}
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <div className="md:gap-5 gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {categoryviewdata.flat().map((data, index) => (
                <React.Fragment key={`CategoryPageVTwoUicard${index}`}>
                  <CategoryPageVTwoUicard
                    className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-start px-1 py-2 rounded w-full"
                    data={data}
                  />
                </React.Fragment>
              ))}
                </div>
              </div>
              {/* <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-1 items-center justify-center p-1 w-auto">
                  <Img
                    className="h-6 rounded w-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="text-base text-blue_gray-300 w-auto"
                    size="txtRobotoRomanRegular16"
                  >
                    Previous
                  </Text>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-auto">
                  <Button
                    className="!text-gray-900 cursor-pointer font-medium h-8 leading-[normal] text-center text-lg w-8"
                    shape="round"
                    color="blue_gray_100"
                    size="xs"
                    variant="outline"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-medium h-8 leading-[normal] text-center text-lg w-8"
                    shape="round"
                    color="blue_gray_100"
                    size="xs"
                    variant="outline"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-medium h-8 leading-[normal] text-center text-lg w-8"
                    shape="round"
                    color="blue_gray_100"
                    size="xs"
                    variant="outline"
                  >
                    3
                  </Button>
                  <Text
                    className="border border-blue_gray-100 border-solid flex h-8 items-center justify-center rounded text-blue_gray-300 text-center text-lg w-8"
                    size="txtRobotoRomanMedium18"
                  >
                    ...
                  </Text>
                  <Button
                    className="cursor-pointer font-medium h-8 leading-[normal] text-center text-lg w-8"
                    shape="round"
                    color="blue_gray_100"
                    size="xs"
                    variant="outline"
                  >
                    16
                  </Button>
                </div>
                <div className="flex flex-row gap-1 items-center justify-center p-1 w-auto">
                  <Text
                    className="text-lg text-teal-900 w-auto"
                    size="txtRobotoRomanRegular18"
                  >
                    Next
                  </Text>
                  <Img
                    className="h-6 rounded w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright_Three"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="bg-yellow-50_01 flex flex-col gap-6 items-center justify-center max-w-[1440px] mt-[31px] sm:px-5 px-[29px] py-8 w-full">
      <CategoryPageVTwoTitleofsection
        className="flex flex-row md:gap-10 items-center justify-between max-w-[1368px] mx-auto md:px-5 w-full"
        ourproduct="Product Recommendation"
      />
      <Slider
        autoPlay
        autoPlayInterval={2000}
        activeIndex={sliderState}
        responsive={{
          0: { items: 1 },
          550: { items: 4 },
          1050: { items: 7 },
        }}
        onSlideChanged={(e) => {
          setsliderState(e?.item);
        }}
        ref={sliderRef}
        className="flex gap-[31px] max-w-[1362px] mx-auto md:px-5 w-full"
      >
        {featuredproductdata.flat().map((data, index) => (
          <CategoryPageVTwoUicard1
            key={index}
            className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full cursor-pointer"
            data={data}
          />
        ))}
      </Slider>
      <PagerIndicator
        className="flex gap-4 h-4 items-start justify-start w-44"
        count={6}
        activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-yellow-800 w-4"
        activeIndex={sliderState}
        inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 bg-lime-200_7f w-4"
        sliderRef={sliderRef}
        selectedWrapperCss="inline-block"
        unselectedWrapperCss="inline-block"
        renderDotsItem={({ isActive }) => {
          if (isActive) {
            return (
              <div className="inline-block cursor-pointer rounded-[50%] h-4 bg-yellow-800 w-4" />
            );
          }
          return (
            <div
              className="inline-block cursor-pointer rounded-[50%] h-4 bg-lime-200_7f w-4"
              role="button"
              tabIndex={0}
            />
          );
        }}
      />
    </div>
        <Footer className="flex gap-8 items-center justify-center md:px-5 py-8 w-full" />
      </div>
    </>
  );
};

export default CategorypagevTwoPage;

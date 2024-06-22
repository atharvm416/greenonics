import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Text,
  Slider,
} from "components";
import CategoryPageVTwoRowviewTwo from "components/CategoryPageVTwoRowviewTwo";
import CategoryPageVTwoTitleofsection from "components/CategoryPageVTwoTitleofsection";
import CategoryPageVTwoUicard1 from "components/CategoryPageVTwoUicard1";
import DetailleProductPageVTwoImgofproduct from "components/DetailleProductPageVTwoImgofproduct";
import DetailleProductPageVTwoPriceproduct from "components/DetailleProductPageVTwoPriceproduct";
import HomePageVTwoUicard1 from "components/HomePageVTwoUicard1";
import Footer from "components/Footer";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images";
import axios from "axios";

const DetailleproductpagevThreePage = (props) => {
  console.log("This is props",props);
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  console.log("This is loaction data",location.state);

  const handleChange = (e, key) => {
    const value = e.target.value;
    console.log(key, value);
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/api/product/${props.id}/`
  //       );
  //       setProductData(response.data[0]);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const newrelease = [15, 3, 12, 6, 21, 11, 19];
  const [newreleasedata,setNewReleaseData] = useState([]);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  useEffect(() => {
    setProductData(location.state?.data);
  }, [location.state?.data]);

  const featuredproduct = [9, 1, 12, 13, 8, 5, 21, 16, 3, 11, 6, 20, 19, 10];
  const [Dealdata,setDealData] = useState([]);
  const [featuredproductdata,setFeaturedProductData] = useState([]);
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

    const fetchDataNewRelease = async () => {
      try {
        const fetchPromises = newrelease.map(async (productId) => {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/api/product/${productId}/`
            );
            //console.log(`New Release ${productId} data:`, response.data);
            setNewReleaseData((prevData) => [...prevData, response.data]);
          } catch (error) {
            console.error(`Error fetching data for new release ${productId}:`, error.message);
          }
        });
  
        await Promise.all(fetchPromises);
      } catch (error) {
        console.error("Error fetching new release data:", error.message);
      }
    };
    fetchDataFeaturedProduct();
    fetchDataNewRelease();
  }, []);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-start justify-start mx-auto pb-1.5 w-full">
      <Header className="bg-yellow-50 flex  md:px-5 w-full" />
        <CategoryPageVTwoRowviewTwo className="flex sm:flex-col flex-row gap-2 items-start justify-start md:ml-[0] ml-[38px] md:px-5 w-auto sm:w-full" />
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-8 items-center justify-start max-w-[1375px] mx-auto pb-8 pt-4 md:px-5 w-full">
              <div className="flex md:flex-col flex-row gap-[25px] items-start justify-start w-auto md:w-full">
                <DetailleProductPageVTwoImgofproduct className="flex flex-col items-center justify-start w-[22%] md:w-full"  product_image={{ mainImage: productData?.main_image }}/>
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start p-1 w-auto sm:w-full">
                      <Text
                        className="capitalize text-teal-900 text-xl w-auto"
                        size="txtRobotoMedium20Teal900"
                      >
                        {productData?.product_name}
                      </Text>
                    </div>
                    {/* <div className="flex flex-row gap-1 items-center justify-start px-[3px] py-1 w-auto">
                      <Text
                        className="capitalize text-base text-black-900"
                        size="txtRobotoRegular16Black900"
                      >
                        By
                      </Text>
                      <Text
                        className="capitalize text-gray-700 text-sm w-auto"
                        size="txtRobotoLight14Gray700"
                      >
                        {" "}
                        Whole Foods Market
                      </Text>
                    </div> */}
                    {/* <div className="flex sm:flex-col flex-row gap-4 items-center justify-start py-1 w-auto sm:w-full">
                      <div className="flex flex-row items-center justify-center w-auto">
                        <RatingBar
                          className="border border-light_green-700 border-solid flex justify-between rounded-[1px] w-[136px]"
                          value={2}
                          starCount={5}
                          activeColor="#799e29"
                          size={24}
                        ></RatingBar>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start px-[3px] w-auto">
                        <div className="flex flex-col items-center justify-start px-[3px] py-1 w-auto">
                          <Text
                            className="capitalize text-gray-700 text-sm w-auto"
                            size="txtRobotoLight14Gray700"
                          >
                            1639 Reviews
                          </Text>
                        </div>
                        <Line className="bg-gray-700 h-[27px] w-px" />
                        <Text
                          className="capitalize text-gray-700 text-sm w-auto"
                          size="txtRobotoLight14Gray700"
                        >
                          100 answered questions
                        </Text>
                      </div>
                    </div> */}
                  </div>
                  <div className="flex flex-col gap-1 items-start justify-start w-full">
                   <Line className="bg-red-200 h-px w-[83%]" />
                    <div className="flex flex-col items-center justify-start px-[3px] py-1 w-auto">
                      <Text
                        className="text-black-900_01 text-lg w-auto"
                        size="txtRobotoRomanMedium18Black90001"
                      >
                        In Stock
                      </Text>
                    </div>
                    <Line className="bg-red-200 h-px w-[83%]" />
                  </div>

                  <Text
                    className="capitalize leading-[150.00%] text-base text-black-900_01"
                    size="txtRobotoRegular16Black90001"
                  >
                    <>
                      Best By : {productData?.best_by}
                      <br />
                      Package Quantity : {productData?.packet_size}  {productData?.packet_size_uom}
                      <br />
                      Dimensions : {productData?.package_dimension ? productData.package_dimension : "15.2 x 17.3 x 7.1 cm, 0.59 kgSwitch to"}
                      Imperial units
                    </>
                  </Text>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="capitalize text-base text-black-900_01 w-auto"
                      size="txtRobotoRegular16Black90001"
                    >
                      About this time:
                    </Text>
                    <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[641px] p-1 w-full">
                      <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                      <Text
                        className="capitalize flex-1 leading-[120.00%] max-w-[616px] md:max-w-full text-black-900_01 text-sm"
                        size="txtRobotoLight14Black90001"
                      >
                        {productData?.description
                          ? productData.description
                          : "365 by Whole Foods Market products give you that dance-down-the-aisles feeling. Our huge range of choices with high-quality ingredients at prices you can get down with makes grocery shopping so much more than tossing the basics in your cart. It’s the splurgiest way to save."}
                      </Text>

                    </div>
                    <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[641px] p-1 w-full">
                      <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                      <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                        <Text
                          className="capitalize text-gray-900_01 text-sm w-auto"
                          size="txtRobotoRomanRegular14"
                        >
                          Ingredients
                        </Text>
                        <Text
                          className="capitalize leading-[120.00%] max-w-[306px] md:max-w-full text-black-900_01 text-sm"
                          size="txtRobotoLight14Black90001"
                        >
                          {productData?.ingredients
                          ? productData.ingredients
                          : 
                          "UNBLEACHED ENRICHED WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC ACID."
                          }
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[631px] p-1 w-full">
                      <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                      <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                        <div className="flex flex-row gap-1 items-start justify-start w-full">
                          <Text
                            className="capitalize text-blue_gray-900_01 text-sm w-auto"
                            size="txtRobotoRomanRegular14Bluegray90001"
                          >
                            Weight
                          </Text>
                          <Text
                            className="capitalize text-black-900_01 text-sm w-auto"
                            size="txtRobotoLight14Black90001"
                          >
                            {productData?.packet_size} {productData?.packet_size_uom}
                          </Text>
                        </div>
                        {/* <div className="flex flex-row gap-1 items-start justify-start w-full">
                          <Text
                            className="capitalize text-blue_gray-900_01 text-sm w-auto"
                            size="txtRobotoRomanRegular14Bluegray90001"
                          >
                            Allergy Information
                          </Text>
                          <Text
                            className="capitalize text-black-900_01 text-sm w-auto"
                            size="txtRobotoLight14Black90001"
                          >
                            Wheat
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-start justify-start w-full">
                          <Text
                            className="capitalize text-blue_gray-900_01 text-sm w-auto"
                            size="txtRobotoRomanRegular14Bluegray90001"
                          >
                            Specialty
                          </Text>
                          <Text
                            className="capitalize text-black-900_01 text-sm w-auto"
                            size="txtRobotoLight14Black90001"
                          >
                            Specialty
                          </Text>
                        </div> */}
                        {/* <div className="flex flex-row gap-1 items-start justify-start w-full">
                          <Text
                            className="capitalize text-blue_gray-900_01 text-sm w-auto"
                            size="txtRobotoRomanRegular14Bluegray90001"
                          >
                            Package Weight
                          </Text>
                          <Text
                            className="capitalize text-black-900_01 text-sm w-auto"
                            size="txtRobotoLight14Black90001"
                          >
                            2.3 Kilograms
                          </Text>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="flex md:flex-col flex-row gap-1 items-start justify-start max-w-[631px] p-1 w-full">
                      <div className="bg-black-900 h-[13px] rounded-md w-[13px]"></div>
                      <Text
                        className="capitalize flex-1 leading-[120.00%] text-black-900_01 text-sm"
                        size="txtRobotoLight14Black90001"
                      >
                        <>
                          Brought to you by Whole Foods Market
                          <br />
                          Unbleached and enriched with vitamins and minerals
                          <br />
                          Milled for baking quality and consistency
                          <br />
                          The ideal choice for all your recipes that call for
                          flour
                        </>
                      </Text>
                    </div> */}
                  </div>
                </div>
                <DetailleProductPageVTwoPriceproduct className="bg-white-A700_01 border-2 border-deep_orange-600 border-solid flex flex-col items-start justify-start p-3.5 rounded w-[28%] md:w-full" productData={productData}/>
              </div>
              <Line className="bg-red-200 h-px w-full" />
              {/* <div className="flex flex-col items-center justify-start w-auto md:w-full">
                <InformationPageVTwoRowviewNine
                  className="flex md:flex-col flex-row gap-4 items-center justify-start w-auto md:w-full"
                  viewNine="Product overview"
                  viewEleven="Certifications"
                  viewTwelve="Customer questions & answers"
                />
                <div className="border border-deep_orange-200 border-solid flex md:flex-col flex-row gap-8 items-start justify-center pb-4 pt-8 px-4 rounded w-auto md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                        <div className="flex flex-col items-start justify-center p-1 w-full">
                          <Text
                            className="capitalize text-base text-black-900_01 text-center w-auto"
                            size="txtRobotoRegular16Black90001"
                          >
                            <>Product Description</>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                        <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                          <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                          <Text
                            className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                            size="txtRobotoLight14Black90001"
                          >
                            Our all-purpose flour is milled from select hard red
                            wheat grown in high mountain valleys on family-owned
                            farms.
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                          <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                          <Text
                            className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                            size="txtRobotoLight14Black90001"
                          >
                           {productData?.description
                          ? productData.description
                          : "365 by Whole Foods Market products give you that dance-down-the-aisles feeling. Our huge range of choices with high-quality ingredients at prices you can get down with makes grocery shopping so much more than tossing the basics in your cart. It’s the splurgiest way to save."}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-col items-start justify-center p-1 w-full">
                        <Text
                          className="capitalize text-base text-black-900_01 text-center w-auto"
                          size="txtRobotoRegular16Black90001"
                        >
                          Important information
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-1 items-start w-auto"
                        orientation="vertical"
                      >
                        <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-1 w-full">
                            <Text
                              className="capitalize text-black-900_01 text-sm w-auto"
                              size="txtRobotoRomanRegular14Black90001"
                            >
                              title of description
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                            <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                            <Text
                              className="capitalize flex-1 text-black-900_01 text-sm w-auto"
                              size="txtRobotoLight14Black90001"
                            >
                              DO NOT EAT RAW FLOUR, DOUGH OR BATTER.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-1 w-full">
                            <Text
                              className="capitalize text-black-900_01 text-sm w-auto"
                              size="txtRobotoRomanRegular14Black90001"
                            >
                              Ingredients
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                            <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                            <Text
                              className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                              size="txtRobotoLight14Black90001"
                            >
                              {productData?.ingredients
                          ? productData.ingredients
                          : 
                          "UNBLEACHED ENRICHED WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE, RIBOFLAVIN, FOLIC ACID."
                          }
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-1 w-full">
                            <Text
                              className="capitalize text-black-900_01 text-sm w-auto"
                              size="txtRobotoRomanRegular14Black90001"
                            >
                              Directions
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-start justify-start p-1 w-full">
                            <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                            <Text
                              className="capitalize flex-1 text-black-900_01 text-sm w-auto"
                              size="txtRobotoLight14Black90001"
                            >
                              COOL DRY PLACE
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start my-0 w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-1 w-full">
                            <Text
                              className="capitalize text-black-900_01 text-sm w-auto"
                              size="txtRobotoRomanRegular14Black90001"
                            >
                              Legal Disclaimer
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-1 items-start justify-start p-1 w-full">
                            <div className="bg-blue_gray-500 h-[9px] rounded w-[9px]"></div>
                            <Text
                              className="capitalize flex-1 leading-[120.00%] max-w-[550px] md:max-w-full text-black-900_01 text-sm"
                              size="txtRobotoLight14Black90001"
                            >
                              Statements regarding dietary supplements have not
                              been evaluated by the FDA and are not intended to
                              diagnose, treat, cure, or prevent any disease or
                              health condition.
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start w-[571px] sm:w-full">
                    <div className="flex flex-col items-start justify-center p-1 w-[571px] sm:w-full">
                      <Text
                        className="capitalize text-base text-black-900_01 text-center w-auto"
                        size="txtRobotoRegular16Black90001"
                      >
                        <>Product Information</>
                      </Text>
                    </div>
                    <div className="border border-deep_orange-200_01 border-solid flex flex-col gap-2 items-start justify-start p-4 rounded w-full">
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Text
                          className="capitalize text-base text-black-900 w-auto"
                          size="txtRobotoRegular16Black900"
                        >
                          Package Dimensions :{" "}
                        </Text>
                        <Text
                          className="capitalize flex-1 text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          <>{productData?.package_dimension ? productData.package_dimension : "15.2 x 17.3 x 7.1 cm, 0.59 kgSwitch to"}</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Text
                          className="capitalize text-base text-black-900 w-auto"
                          size="txtRobotoRegular16Black900"
                        >
                          Item Weight :{" "}
                        </Text>
                        <Text
                          className="capitalize flex-1 text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          <>{productData?.packet_size} {productData?.packet_size_uom}</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-black-900 w-auto"
                          size="txtRobotoRegular16Black900"
                        >
                          ASIN :
                        </Text>
                        <Text
                          className="capitalize flex-1 text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          <>B09ZXBR84P</>
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-2 items-center justify-start w-full">
                        <Text
                          className="capitalize text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          Customer Reviews :{" "}
                        </Text>
                        <Text
                          className="capitalize flex-1 text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          <>4.7 out of 5 stars 24 ratings4.7 out of 5 stars</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-black-900 w-auto"
                          size="txtRobotoRegular16Black900"
                        >
                          Date First :
                        </Text>
                        <Text
                          className="capitalize flex-1 text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          <>Available May 10, 2022</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-full">
                        <Text
                          className="capitalize text-base text-black-900 w-auto"
                          size="txtRobotoRegular16Black900"
                        >
                          Manufacturer :{" "}
                        </Text>
                        <Text
                          className="capitalize flex-1 text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          <>ghiz</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-full">
                        <Text
                          className="capitalize text-base text-black-900 w-auto"
                          size="txtRobotoRegular16Black900"
                        >
                          Country of{" "}
                        </Text>
                        <Text
                          className="capitalize flex-1 text-black-900 text-sm w-auto"
                          size="txtRobotoLight14Black900"
                        >
                          Origin Moroco
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
           
            <List
              className="flex flex-col gap-8 items-center w-full"
              orientation="vertical"
            >
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
    <div className="bg-white-A700_01 flex flex-col gap-[30px] items-center justify-start my-0 py-8 w-full">
            <div className="flex flex-row flex-wrap md:gap-10 items-center justify-between max-w-[1303px] mx-auto md:px-5 w-full">
              <Button
                className="capitalize cursor-pointer font-semibold min-w-[161px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                shape="round"
                color="white_A700_01"
                size="md"
                variant="fill"
              >
                New Release
              </Button>
              <Button
                className="common-pointer !text-red-200 capitalize cursor-pointer min-w-[65px] text-center text-xs"
                onClick={() => navigate("/newreleasepagevtwo")}
                shape="square"
                color="white_A700_01"
                size="sm"
                variant="fill"
              >
                View more
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1366px] mx-auto md:px-5 py-4 w-full">
            {newreleasedata.flat().map((data, index) => (
                <HomePageVTwoUicard1
                  key={index}
                  className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full cursor-pointer"
                 // image={data.main_image}
                  // text={`${data.product_name} - ${data.packet_size} ${data.packet_size_uom}`}
                  data={data}
                />
              ))}
            </div>
          </div>
            </List>
          </div>
          <Footer className="flex gap-8 items-center justify-center md:px-5 py-8 w-full" />
        </div>
      </div>
    </>
  );
};

export default DetailleproductpagevThreePage;

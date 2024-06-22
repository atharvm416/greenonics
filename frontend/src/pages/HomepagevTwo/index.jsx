import React, {useEffect, useState, useLayoutEffect} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  RatingBar,
  Slider,
  Text,
} from "components";
import CategoryPageVTwoUicard1 from "components/CategoryPageVTwoUicard1";
import Footer from "components/Footer";
import Header from "components/Header";
import HomePageVTwoColumnquality from "components/HomePageVTwoColumnquality";
import HomePageVTwoUicard1 from "components/HomePageVTwoUicard1";
import NewReleasePageVTwoColumn1 from "components/NewReleasePageVTwoColumn1";
import axios from 'axios';

import { CloseSVG } from "../../assets/images";

const HomepagevTwoPage = () => {
  const navigate = useNavigate();
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const newReleasePageVTwoColumn1PropList = [
    { textvalue: "millets", image: "images/our-product-millets.png" },
    { textvalue: "rice", image: "images/our-product-rice.jpeg" },
    { textvalue: "Mangoes", image: "images/our-product-mangoes.jpeg" },
    { textvalue: "pulses", image: "images/our-product-pulses.jpeg" },
    { textvalue: "Cookies", image: "images/our-product-snackes.jpeg" },
    { textvalue: "seeds", image: "images/our-product-seeds.jpeg" },
  ];
  const listDeal = [1,3,5,4]
  const newrelease = [15, 3, 12, 6, 21, 11, 19];
const bestseller = [4, 18, 7, 20, 7, 14, 22];
const featuredproduct = [9, 1, 12, 13, 8, 5, 21, 16, 3, 11, 6, 20, 19, 10];
  const [Dealdata,setDealData] = useState([]);
  const [newreleasedata,setNewReleaseData] = useState([]);
  const [bestsellerdata,setBestSellerData] = useState([]);
  const [featuredproductdata,setFeaturedProductData] = useState([]);
  const cartId = localStorage.getItem('cart_id');
  const userId = localStorage.getItem('user_id');
  // console.log(cartId);
  // console.log(userId);
  const categoryPageVTwoUicard1PropList = [
    {
      productname: "365 Flour All Purpose Baking, 80 Ounce",
      productimage: "images/img_rectangle243.png",
    },
    { productimage: "images/img_rectangle243_11.png" },
    {
      productname: "Divella Pasta Mista N.41 - 500gr.",
      productimage: "images/img_rectangle243_9.png",
    },
    {
      productname: "La Drogheria 1880 Grounded Chilly 35 Gr.",
      productimage: "images/img_rectangle243_12.png",
    },
    { productimage: "images/img_rectangle243_13.png" },
    { productimage: "images/img_rectangle243_14.png" },
    {
      productname: "rummo-pasta-mista-n74-500gr",
      productimage: "images/img_rectangle243_15.png",
    },
    {
      productname: "Legumi_Cannellini-180x180",
      productimage: "images/img_rectangle243_37.png",
    },
    { productimage: "images/img_rectangle243_8.png" },
    {
      productname: "nestle-nesquik-chocolate- ereals-375gr",
      productimage: "images/img_rectangle243_38.png",
    },
    {
      productname: "Barilla Flour “00” 1kg.",
      productimage: "images/img_rectangle243_18.png",
    },
    {
      productname: "garofalo-pasta-di-semola....",
      productimage: "images/img_rectangle243_39.png",
    },
    {
      productname: "misura-multigrain-6-crunchy-cereals-330gr",
      productimage: "images/img_rectangle243_40.png",
    },
    {
      productname: "Organic Chickpeas - 1kg",
      productimage: "images/img_rectangle243_41.png",
    },
  ];
  const homePageVTwoUicard1PropList = [
    {
      text: "Biona  Italian Wholegrain Pasta - 500g",
      image: "images/img_rectangle243_42.png",
    },
    {
      text: "Clearspring Gluten Free Green Pea & Pasta-250g",
      image: "images/img_rectangle243_43.png",
    },
    {
      text: "Cereal Bar with Tahini & Cacao - 60g",
      image: "images/img_rectangle243_44.png",
    },
    {
      text: "Doves Farm Organic Plain White Flour - 1kg",
      image: "images/img_rectangle243_45.png",
    },
    {
      text: "Organic Raw Cacao Powder - 227g",
      image: "images/img_rectangle243_46.png",
    },
    {
      text: "Free Sugar, Gummy Bears -100g",
      image: "images/img_rectangle243_47.png",
    },
    {
      text: "Organic Ceylon Cinnamon Powder-100g",
      image: "images/img_rectangle243_48.png",
    },
  ];
  const homePageVTwoColumnqualityPropList = [
    { userimage: "images/img_iconsquamity.svg" },
    { userimage: "images/img_iconsdelivery.svg" },
    { userimage: "images/img_iconslock.svg" },
    { userimage: "images/img_iconshandshake.svg" },
    {},
  ];
  const images = [
    { src: 'image1.jpg', text: 'Image 1' },
    { src: 'image2.jpg', text: 'Image 2' },
    { src: 'image3.jpg', text: 'Image 3' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    // Set up an interval to change the image every few seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const fetchDataDeal = async () => {
      const fetchPromises = listDeal.map(async (productId) => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/product/${productId}/`
          );
          // Handle successful response for each productId
          //console.log(`Product ${productId} data:`, response.data);
          
          // Store the data in the component state
          setDealData((prevData) => [...prevData, response.data]);
        } catch (error) {
          // Handle error for each productId
          console.error(`Error fetching data for product ${productId}:`, error.message);
          // You might want to store an error state or handle it as needed
        }
      });

      // Wait for all requests to finish
      await Promise.all(fetchPromises);

      // Once all requests are done, you can perform any actions here
      // For example, navigate to the next page
      // navigate("/homepagevtwo");
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

    const fetchDataBestSeller = async () => {
      try {
        const fetchPromises = bestseller.map(async (productId) => {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/api/product/${productId}/`
            );
            //console.log(`New Release ${productId} data:`, response.data);
            setBestSellerData((prevData) => [...prevData, response.data]);
          } catch (error) {
            console.error(`Error fetching data for new release ${productId}:`, error.message);
          }
        });
  
        await Promise.all(fetchPromises);
      } catch (error) {
        console.error("Error fetching new release data:", error.message);
      }
    };

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

    fetchDataDeal();
    fetchDataNewRelease();
    fetchDataBestSeller();
    fetchDataFeaturedProduct();
  }, []);
  //console.log(featuredproductdata);
   useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash;

      if (hash) {
        const targetElement = document.querySelector(hash);

        if (targetElement) {
          // Scroll into view
          window.scrollTo({
            behavior: 'auto',
            top: targetElement.offsetTop,
          });

          // Remove hash from the URL after scrolling into view
          window.history.replaceState(null, null, location.pathname);
        }
      }
    };

    // Attach the event listener to handle hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Call the function initially
    handleHashChange();

    // Cleanup: Remove the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location.hash]);
  const handleMango=() => {
  
  
  navigate('/categorypagevtwo', {state:{ "data": 7 }} );
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
          <Header className="bg-yellow-50 flex  md:px-5 w-full" />
  <div className="flex flex-col h-[600px] md:h-auto items-start justify-start w-auto md:w-full" >
          <div className="md:h-[600px] h-[601px] md:px-5 relative w-full" >
            <div className="h-[600px] m-auto w-full" >
              <Img
                className="h-[600px] m-auto object-cover w-full"
                src="images/mangohomepage1.png"
                alt="rectangle256"
              />
              <Img
                className="absolute h-[600px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/mangohomepage1.png"
                alt="rectangle283"
              />
            </div>
            <div className="absolute bg-gray-900_7f flex flex-col md:gap-10 gap-[111px] h-full inset-[0] items-center justify-center m-auto p-[37px] sm:px-5 w-full" >
              <div className="flex flex-col gap-4 items-start justify-start mt-[134px] w-auto md:w-full" >
                <div className="flex flex-col gap-2 items-start justify-start max-w-[689px] w-full" >
                  <Text
                    className="capitalize leading-[120.00%] max-w-[689px] md:max-w-full md:text-5xl text-6xl text-white-A700_01"
                    size="txtRobotoRomanBold60"
                  >
                    Greenonics brings to you the best of millets!
                  </Text>
                  <Text
                    className="capitalize leading-[120.00%] max-w-[642px] md:max-w-full text-lg text-white-A700_01"
                    size="txtRobotoRomanMedium18WhiteA70001"
                  >
                    Always attentive to consumer needs and satisfied it, we
                    research and select quality varieties of legumes, cereals
                    ,health seeds and spices.
                  </Text>
                </div>
                <Button onClick={handleMango}
                  className="border border-solid border-yellow-800 capitalize cursor-pointer font-medium h-9 text-center text-xl w-64"
                  shape="round"
                  color="yellow_800"
                  size="xs"
                  variant="fill"
                >
                  Shop now
                </Button>
              </div>
           {/* <PagerIndicator
                className="flex gap-4 h-4 md:h-auto items-start justify-start mb-1.5 w-44"
                count={6}
                activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-yellow-800 w-4"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 bg-lime-200_7f w-4"
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
  />*/}
            </div>
          </div>
        </div> 
       <div className="relative w-full" >
        <Slider
          autoplay
          autoplaySpeed={500}
          speed={500}
          beforeChange={(oldIndex, newIndex) => setsliderState(newIndex)}
          ref={sliderRef}
          dots
          appendDots={(dots) => (
            <div
              style={{
                position: 'absolute',
                bottom: '8%',
                left: '26%',
                width: '44px',
                display: 'flex',
                gap: '4px',
              }}
            >
              {dots}
            </div>
          )}
          customPaging={(i) => (
            <div
              className={`inline-block cursor-pointer rounded-[50%] h-4 ${
                i === sliderState ? 'bg-yellow-800' : 'bg-lime-200_7f'
              } w-4 relative`}
            />
          )}
        >
          {[
            // 'images/mangohomepage1.png',
            // 'images/mangohomepage2.jpeg',
            // 'images/mangohomepage3.png',
          ].map((image, index) => (
            <div key={index} className="flex flex-col items-center justify-start mx-2.5">
              <div className="h-[519px] relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <Img
                    className="h-[502px] md:h-auto object-cover rounded-bl rounded-br w-full"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> 
       <div id="our-products" className="bg-white-A700 flex flex-col gap-4 items-center justify-center mx-auto md:px-5 px-[120px] py-4 w-full h-full">
        <div className="flex flex-col items-center justify-center p-2 rounded w-auto">
          <Text
            className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-teal-900 w-auto"
            size="txtRobotoSemiBold25"
          >
            Our Products
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-[60px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-6 justify-center w-full md:w-full"
          orientation="horizontal"
        >
          {newReleasePageVTwoColumn1PropList.map((props, index) => (
            <React.Fragment key={`NewReleasePageVTwoColumn1${index}`}>
              <NewReleasePageVTwoColumn1
                className="flex flex-col gap-2.5 items-center justify-center py-2 w-auto"
                {...props}
              />
            </React.Fragment>
          ))}
        </List>
      </div>

        <List
          className="flex flex-col items-start w-auto"
          orientation="vertical"
        >
          <div id="trending" className="bg-yellow-50_01 flex flex-col gap-[26px] items-center justify-start max-w-[1441px] my-0 py-4 w-full">
            <div className="flex flex-row flex-wrap md:gap-10 items-center justify-between max-w-[1371px] mx-auto md:px-5 w-full">
              <Button
                className="capitalize cursor-pointer font-semibold min-w-[79px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-900"
                shape="round"
                size="md"
              >
                Deals
              </Button>
              <Button
                className="common-pointer bg-transparent capitalize cursor-pointer min-w-[65px] text-center text-red-200 text-xs"
                onClick={() => navigate("/dealspagevtwo")}
                size="sm"
              >
                View more
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between max-w-[1366px] mx-auto md:px-5 py-4 w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Text
                  className="capitalize leading-[150.00%] max-w-[370px] md:max-w-full text-base text-teal-900"
                  size="txtRobotoRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam Lorem ipsum dolor sit amet, consectetuer{" "}
                </Text>
                <div className="flex flex-row items-center justify-center w-[64%] md:w-full">
                  <Button
                    className="capitalize cursor-pointer font-semibold h-[57px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[57px]"
                    shape="round"
                    color="light_green_700"
                    size="md"
                    variant="fill"
                  >
                    19
                  </Button>
                  <div className="flex flex-col h-[57px] md:h-auto items-center justify-center ml-1 px-2.5 py-[30px] w-auto">
                    <Text
                      className="capitalize text-base text-black-900 w-auto"
                      size="txtRobotoRegular16Black900"
                    >
                      :
                    </Text>
                  </div>
                  <Button
                    className="capitalize cursor-pointer font-semibold h-[57px] ml-1 text-3xl sm:text-[26px] md:text-[28px] text-center w-[57px]"
                    shape="round"
                    color="light_green_700"
                    size="md"
                    variant="fill"
                  >
                    00
                  </Button>
                  <div className="flex flex-col h-[57px] md:h-auto items-center justify-center ml-1 px-2.5 py-[30px] w-auto">
                    <Text
                      className="capitalize text-base text-black-900 w-auto"
                      size="txtRobotoRegular16Black900"
                    >
                      :
                    </Text>
                  </div>
                  <Button
                    className="capitalize cursor-pointer font-semibold h-[57px] ml-1 text-3xl sm:text-[26px] md:text-[28px] text-center w-[57px]"
                    shape="round"
                    color="light_green_700"
                    size="md"
                    variant="fill"
                  >
                    40
                  </Button>
                </div>
              </div>
              <div className="md:flex-1 gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">

              {Dealdata.flat().map((data, index) => (
                <HomePageVTwoUicard1
                  key={index}
                  className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full cursor-pointer"
                  // image={data.main_image}
                  // text={`${data.product_name} - ${data.packet_size} ${data.packet_size_uom}`}
                  data={data}
                  // Add other properties as needed
                />
              ))}
                {/* <HomePageVTwoUicard1 className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full" />
                <HomePageVTwoUicard1
                  className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full"
                  image="images/img_rectangle243_138x134.png"
                  text="Natural Mulled Wine Spice - 40g"
                />
                <HomePageVTwoUicard1
                  className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full"
                  image="images/img_rectangle243_29.png"
                  text="Spice Box Brown Basmati Rice - 1kg"
                />
                <HomePageVTwoUicard1
                  className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full"
                  image="images/img_rectangle243_30.png"
                  text="Rinatura Pasta Elbows (Hornchen) - 500g"
                /> */}
              </div>
            </div>
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
        <div className="flex flex-col gap-8 items-center justify-end sm:px-5 px-9 py-4 w-auto md:w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1303px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
              <Text
                className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-teal-900 w-auto"
                size="txtRobotoSemiBold25"
              >
                Featured Products
              </Text>
            </div>
            {/* <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
              <a
                href="javascript:"
                className="capitalize text-red-200 text-xs w-auto"
              >
                <Text size="txtRobotoRegular12">View more</Text>
              </a>
            </div> */}
          </div>
          <div className="flex flex-col gap-8 items-center justify-end max-w-[1440px] pt-1 w-full">
            <div className="flex flex-col items-center justify-start max-w-[1374px] mx-auto md:px-5 w-full">
              <div className="md:gap-5 gap-[33px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-center min-h-[auto] w-full">
              {featuredproductdata.flat().map((data, index) => (
                <CategoryPageVTwoUicard1
                  key={index}
                  className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full cursor-pointer"
                  // image={data.main_image}
                  // text={`${data.product_name} - ${data.packet_size} ${data.packet_size_uom}`}
                  data={data}
                />
              ))}
                {/* {featuredproductdata.map((props, index) => (
                  <React.Fragment key={`CategoryPageVTwoUicard1${index}`}>
                    <CategoryPageVTwoUicard1
                      className="bg-white-A700 flex flex-1 flex-col items-start justify-center px-1 py-2 w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        <Img
              className="h-px w-[1440px]"
              src="images/img_driver_red_200.svg"
              alt="driver"
            />
        <div className="flex flex-col gap-8 items-center justify-start sm:px-5 px-[39px] py-4 w-auto md:w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1303px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
              <Text
                className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                size="txtRobotoSemiBold25Gray900"
              >
                Best Seller
              </Text>
            </div>
            {/* <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
              <a
                href="javascript:"
                className="capitalize text-red-200 text-xs w-auto"
              >
                <Text size="txtRobotoRegular12">View more</Text>
              </a>
            </div> */}
          </div>
          <List
            className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-start max-w-[1366px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            {bestsellerdata.flat().map((data, index) => (
                <HomePageVTwoUicard1
                  key={index}
                  className="bg-white-A700 flex flex-col gap-2 items-start justify-start px-1 py-2 w-full cursor-pointer"
                  // image={data.main_image}
                  // text={`${data.product_name} - ${data.packet_size} ${data.packet_size_uom}`}
                  data={data}
                />
              ))}
          </List>
        </div>
        <div id="about-us" className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1440px] w-full">
            <Img
              className="md:flex-1 h-[628px] sm:h-auto object-cover w-[821px] md:w-full"
              src="images/img_rectangle2_628x821.png"
              alt="rectangleTwo"
            />
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start md:px-5 w-[552px] sm:w-full">
              <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
                <Text
                  className="capitalize text-gray-900 text-xl w-auto"
                  size="txtRobotoMedium20Gray900"
                >
                  About US
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="capitalize leading-[150.00%] text-base text-blue_gray-800"
                  size="txtRobotoRegular16Bluegray800"
                >
                  <>
                    At Greenonics, we are passionate about providing high-quality
                    food products to enhance your culinary experience. We
                    believe that good food starts with the finest ingredients,
                    which is why we have curated a diverse selection of grains,
                    legumes, and spices sourced from trusted suppliers around
                    the world.
                    <br />
                    <br />
                    Our Commitment to Quality:
                    <br />
                    We are committed to offering you nothing but the best. Our
                    team meticulously selects each product, ensuring that it
                    meets our strict quality standards. From organic and
                    sustainably sourced options to exotic and hard-to-find
                    varieties, we strive to cater to the unique tastes and
                    preferences of our valued customers.
                    <br />
                    <br />
                    Variety and Convenience:
                    <br />
                    We understand that every cook and food enthusiast has
                    different needs and preferences. That&#39;s why we offer a
                    wide range of options to choose from. Whether you&#39;re
                    seeking staple grains, nutrient-rich legumes, or aromatic
                    spices, you&#39;ll ..
                  </>
                </Text>
                {/* <Button
                  className="border border-solid border-yellow-800 cursor-pointer font-inter font-medium h-9 leading-[normal] text-center text-sm w-[204px]"
                  shape="round"
                  color="yellow_800"
                  size="md"
                  variant="fill"
                >
                  Learn More
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        {/* <List
          className="sm:flex-col flex-row md:gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 h-[398px] justify-between sm:px-5 px-9 py-4 w-full"
          orientation="horizontal"
        >
          {homePageVTwoColumnqualityPropList.map((props, index) => (
            <React.Fragment key={`HomePageVTwoColumnquality${index}`}>
              <HomePageVTwoColumnquality
                className="flex flex-1 md:flex-1 flex-col gap-4 items-center justify-start md:px-5 py-[7px] w-auto md:w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </List> */}
        <Footer className="flex gap-8 items-center justify-center md:px-5 py-8 w-full" />
      </div>
    </>
  );
};

export default HomepagevTwoPage;

import React,{useState, useEffect} from "react";

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
import CategoryPageVTwoTitleofsection from "components/CategoryPageVTwoTitleofsection";
import CategoryPageVTwoUicard from "components/CategoryPageVTwoUicard";
import CategoryPageVTwoUicard1 from "components/CategoryPageVTwoUicard1";
import DealsPageVTwoNavtabsbasic from "components/DealsPageVTwoNavtabsbasic";
import HomePageVTwoUicard1 from "components/HomePageVTwoUicard1";
import Footer from "components/Footer";
import Header from "components/Header";
import axios from "axios";
import { CloseSVG } from "../../assets/images";

const DealspagevTwoPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const categoryPageVTwoUicard1PropList = [
    {
      productname: "Prima Cake Flour 1kg",
      productimage: "images/img_rectangle243_16.png",
    },
    { productimage: "images/img_rectangle243_7.png" },
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

  const listDeal = [1,3,5,4,8,17,22,20, 15, 9, 21, 7]
  const [Dealdata,setDealData] = useState([]);
  const [categorydata,setcategoryData] = useState([]);
  const [selectedText, setSelectedText] = useState('Mangoes');

  const handleTextClick = async (text) => {
    setcategoryData([]);
    setSelectedText(text);
  
    let category;
  
    if (text === 'Mangoes') {
      category = 7;
    } else if (text === 'Millets') {
      category = 11;
    } else if (text === 'Noodles') {
      category = 9;
    }
  
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/product/by_category/${category}/`
      );
  
      // Handle successful response
      console.log(`category data:`, response.data);
  
      // Store the data in the component state
      setcategoryData(response.data);
    } catch (error) {
      // Handle error
      console.error(`Error fetching data:`, error.message);
      // You might want to store an error state or handle it as needed
    }
  };

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
 
    // const getcategory = async () => {
    //   try {
    //     const response = await axios.get(
    //       `${process.env.REACT_APP_API_URL}/api/product_category/`
    //     );
    //     // Handle successful response for each productId
    //     console.log(`cate data:`, response.data);
        
    //     // Store the data in the component state
    //     setcategoryData((prevData) => [...prevData, response.data]);
    //   } catch (error) {
    //     // Handle error for each productId
    //     console.error(`Error fetching data:`, error.message);
    //     // You might want to store an error state or handle it as needed
    //   }
    // }

    const fetchinitaldata = async () => {
    let category = 7;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/product/by_category/${category}/`
      );
  
      // Handle successful response
      console.log(`category data:`, response.data);
  
      // Store the data in the component state
      setcategoryData(response.data);
    } catch (error) {
      // Handle error
      console.error(`Error fetching data:`, error.message);
      // You might want to store an error state or handle it as needed
    }
  }
    fetchDataDeal();
    fetchinitaldata();
    //getcategory();
  }, []);

  // useEffect(() => {
  //   const fetchCategoricalData = async () => {
  //     let category;
  
  //     if (selectedText === 'Mangoes') {
  //       category = 16;
  //     } else if (selectedText === 'Millets') {
  //       category = 3;
  //     } else if (selectedText === 'Noodles') {
  //       category = 1;
  //     }
  
  //     const fetchPromises = listDeal.map(async () => {
  //       try {
  //         const response = await axios.get(
  //           `${process.env.REACT_APP_API_URL}/api/product/by_category/${category}/`
  //         );
  
  //         // Handle successful response for each productId
  //         console.log(`category data:`, response.data);
  
  //         // Store the data in the component state
  //         setcategoryData((prevData) => [...prevData, response.data]);
  //       } catch (error) {
  //         // Handle error for each productId
  //         console.error(`Error fetching data :`, error.message);
  //         // You might want to store an error state or handle it as needed
  //       }
  //     });
  
  //     // Wait for all requests to finish
  //     await Promise.all(fetchPromises);
  //   };
  
  //   fetchCategoricalData();
  // }, [selectedText]);
  

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-yellow-50 flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1368px] mx-auto md:px-5 w-full">
          {/* <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
            <Text
              className="capitalize text-4xl sm:text-[32px] md:text-[34px] text-teal-900 w-auto"
              size="txtRobotoSemiBold36"
            >
              Deals
            </Text>
          </div> */}
          {/* <div className="h-[519px] relative w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 2 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00] absolute"
              ref={sliderRef}
              className="gap-4 m-auto w-auto"
              items={[...Array(12)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col items-center justify-start mx-2.5">
                    <div className="h-[519px] relative w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[502px] md:h-auto object-cover rounded-bl rounded-br w-full"
                          src="images/img_rectangle2.png"
                          alt="rectangleTwo"
                        />
                      </div>
                      <Img
                        className="absolute h-[519px] inset-[0] justify-center m-auto object-cover rounded w-[84%]"
                        src="images/img_rectangle3.png"
                        alt="rectangleThree"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-4 bg-yellow-800 w-4 relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-4 bg-lime-200_7f w-4 relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[8%] flex gap-4 h-4 left-[26%] w-44"
              count={6}
              activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-yellow-800 w-4 relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 bg-lime-200_7f w-4 relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div> */}
        </div>
        {/* <div className="flex flex-col gap-8 items-center justify-center pt-8 w-auto md:w-full">
          <CategoryPageVTwoTitleofsection
            className="flex flex-row md:gap-10 items-center justify-between max-w-[1368px] mx-auto md:px-5 w-full"
            ourproduct="Featured Deals"
            pagenumber="View more"
          />
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-start max-w-[1320px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            {categoryPageVTwoUicard1PropList.map((props, index) => (
              <React.Fragment key={`CategoryPageVTwoUicard1${index}`}>
                <CategoryPageVTwoUicard1
                  className="bg-white-A700 flex flex-col items-start justify-center px-1 py-2 w-auto"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <Img
            className="h-px w-[1440px]"
            src="images/img_driver.svg"
            alt="driver"
          />
        </div> */}
        <div className="flex flex-col gap-8 items-center justify-start sm:px-5 px-[39px] py-4 w-auto md:w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1303px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start p-2 rounded w-auto">
              <Text
                className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-gray-900 w-auto"
                size="txtRobotoSemiBold25Gray900"
              >
                Featured Deals
              </Text>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 justify-start max-w-[1366px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            {Dealdata.flat().map((data, index) => (
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
        <div className="flex flex-col gap-8 items-end justify-start max-w-[1358px] mx-auto md:px-5 w-full">
        <div className="flex">
        <Text
          onClick={() => handleTextClick('Mangoes')}
          style={{
            fontWeight: selectedText === 'Mangoes' ? 'bold' : 'normal',
            borderBottom: selectedText === 'Mangoes' ? '2px solid #E75423' : 'none',
            transform: 'rotate(0deg)', // horizontal text
            marginRight: '10px', // add spacing
            cursor: "pointer"
          }}
        >
          Mangoes
        </Text>
        <Text
          onClick={() => handleTextClick('Millets')}
          style={{
            fontWeight: selectedText === 'Millets' ? 'bold' : 'normal',
            borderBottom: selectedText === 'Millets' ? '2px solid #E75423' : 'none',
            transform: 'rotate(0deg)', // horizontal text
            marginRight: '10px', // add spacing
            cursor: "pointer"
          }}
        >
          Millets
        </Text>
        <Text
          onClick={() => handleTextClick('Noodles')}
          style={{
            fontWeight: selectedText === 'Noodles' ? 'bold' : 'normal',
            borderBottom: selectedText === 'Noodles' ? '2px solid #E75423' : 'none',
            transform: 'rotate(0deg)', // horizontal text
            marginRight: '10px', // add spacing
            cursor: "pointer"
          }}
        >
          Noodles
        </Text>
      </div>
      <div className="flex flex-col items-end justify-start max-w-[1358px] mx-auto pb-8 md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="md:gap-5 gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              {categorydata.flat().map((data, index) => (
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
      {/* <div className="flex flex-col items-start justify-start w-auto md:w-full">
        <div className="md:gap-5 gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
          {categoryPageVTwoUicardPropList.map((props, index) => (
            <React.Fragment key={`CategoryPageVTwoUicard${index}`}>
              <CategoryPageVTwoUicard
                className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-start px-1 py-2 rounded w-full"
                {...props}
              />
            </React.Fragment>
          ))}
        </div>
      </div> */}
    </div>
        <Footer className="flex gap-8 items-center justify-center md:px-5 py-8 w-full" />
      </div>
    </>
  );
};

export default DealspagevTwoPage;

import React, { useEffect, useState } from "react";

import { Img, Input, Text } from "components";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { CloseSVG } from "../../assets/images";
import { Link } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const [searchdata,setSearchData] = useState([]);
  const handleCardClick = (product_selected) => {
   navigate('/detailleproductpagevthree', {state:{ "data": product_selected}} );
  //  navigation.navigate('/detailleproductpagevthree', { data });
  };
  useEffect(() => {
    const searchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/product/search/?search_query=${searchbarvalue}`
        );
  
        setSearchData(response.data)
          //console.log("This s ",response.data);
          // Update your UI with the search results
          //console.log(data);  // Log the data to the console for testing
      } catch (error) {
          console.error('Error fetching search results:', error);
      }
  };
  if (searchbarvalue?.length > 0) {
    searchProduct();
  } else {
    setSearchData([]); // Clear search results when search bar is empty
  }
  }, [searchbarvalue]);

const handleProfile =()=>{
  const cartId = localStorage.getItem('cart_id');
    const userId = localStorage.getItem('user_id');
    console.log("use ID: ",userId)
    console.log("cart ID: ",cartId)
    if (!cartId || !userId) {
      // If cart_id or user_id is not present, navigate to /signpagevtwo
      navigate("/signpagevtwo");
    } else {
      navigate("/Profileaccountdetails");
    }
}

  const SearchResultsOverlay = ({ results }) => {
    return (
      <div
        style={{
          position: 'absolute',
          top: '61px',
          left: '478px',
          backgroundColor: 'white',
          border: '1px solid #ddd',
          width: '500px', /* Adjust the width according to your design */
          maxHeight: '180px', /* Adjust the maximum height for scrollability */
          overflowY: 'auto', /* Enable vertical scrolling */
          padding: '10px',
          zIndex: '2',
        }}
      >
        <div className="scrollable-container">
          {results.map((result) => (
            <div key={result.id} className="result-item flex cursor-pointer" onClick={() => handleCardClick(result)}>
              {/* Adjust the size of the image and ensure text and image are in the same row */}
              <img
                src={`${process.env.REACT_APP_API_URL}${result?.main_image}`}
                alt="Product Image"
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <span style={{ lineHeight: '50px', fontSize: '16px' }}> {`${result.product_name} - ${result.packet_size} ${result.packet_size_uom}`}</span>
            </div>
          ))}
        </div>
      </div>
    );
    
  };
  const handleCartClick = () => {
    const cartId = localStorage.getItem('cart_id');
    const userId = localStorage.getItem('user_id');
    console.log("use ID: ",userId)
    console.log("cart ID: ",cartId)
    if (!cartId || !userId) {
      // If cart_id or user_id is not present, navigate to /signpagevtwo
      navigate("/signpagevtwo");
    } else {
      // If both cart_id and user_id are present, navigate to /CartpagevTwo
      navigate("/CartpagevTwo" );
    }
  };

  return (
    <>
      <header className="w-full  bg-yellow-50 justify-between flex md:flex-row">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[9px] ml-[26px] mr-9 mt-1 w-[79%] ">
          <Img
            className="h-[89px] sm:h-auto object-cover w-[307px] md:w-full cursor-pointer"
            src="images/img_greenonicslogo.png"
            alt="greenonicslogo"
            onClick={() => navigate("/homepagevtwo")}
          />
          <div className="flex flex-col items-end justify-end w-[100%] ">
            
            <div className="flex  flex-row md:gap-1 items-center justify-evenly mt-[22px] md:pr-10 sm:pr-5 pr-[30px] w-[87%] md:w-full ">
            <div className="w-[65%] h-10  ">
            <Input
                name="searchbar"
                placeholder="Search"
                value={searchbarvalue}
                onChange={(e) => setSearchbarvalue(e)}
                className="!placeholder:text-blue_gray-100 !text-black-100 font-inter leading-[normal] p-0 text-left text-sm w-[80%] color-black " 
                wrapClassName="flex md:flex-1 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-[30px] mr-4 my-auto"
                    src="images/img_icon_search.svg"
                    alt="icon/search"
                  />
                }
                suffix={
                  <CloseSVG
                    className="cursor-pointer h-[30px] my-auto"
                    onClick={() => setSearchbarvalue("")}
                    fillColor="#d7d9dd"
                    style={{
                      visibility:
                        searchbarvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={30}
                    width={30}
                    viewBox="0 0 30 30"
                  />
                }
                shape="round"
                color="white_A700_01"
                size="xs"
                variant="fill"
                
              ></Input>

            </div>
            <div className="mt-4">
            {searchbarvalue?.length > 0 && (
        <SearchResultsOverlay results={searchdata} />
      )}
      </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-center mt-[22px] md:pr-10 sm:pr-5 pr-[84px] w-[83%] md:w-full">
              <div className="flex flex-col h-11 md:h-auto items-center justify-center mb-1 pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-center text-teal-900 w-auto cursor-pointer"
                  size="txtInterMedium16"
                  onClick={() => navigate("/homepagevtwo")}
                >
                  Home
                </Text>
              </div>
              <Link to="/homepagevtwo#our-products" className="navigation-link">
              <div className="flex flex-row gap-1 h-11 md:h-auto items-center justify-center mb-1 ml-1 md:ml-[0] pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-teal-900 w-auto cursor-pointer"
                  size="txtInterMedium16"
                >
                  Our Product
                </Text>
                {/* <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_One"
                /> */}
              </div>
              </Link>
              <Link to="/homepagevtwo#trending" className="navigation-link">
              <div className="flex flex-row gap-1 h-11 md:h-auto items-center justify-center mb-1 ml-1 md:ml-[0] pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-teal-900 w-auto cursor-pointer"
                  size="txtInterMedium16"
                >
                  Trending
                </Text>
                {/* <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_Two"
                /> */}
              </div>
              </Link>
              <Link to="/homepagevtwo#about-us" className="navigation-link">
              <div className="flex flex-col h-11 md:h-auto items-center justify-center ml-1 md:ml-[0] md:mt-0 mt-1 pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-center text-teal-900 w-auto cursor-pointer"
                  size="txtInterMedium16"
                >
                  About US
                </Text>
              </div>
              </Link>
              {/* <div className="flex flex-col h-11 md:h-auto items-center justify-center ml-1 md:ml-[0] md:mt-0 mt-1 pl-4 pr-2 py-2 w-auto">
                <Text
                  className="text-base text-center text-teal-900 w-auto"
                  size="txtInterMedium16"
                >
                  Customer Service
                </Text>
              </div> */}
            </div>
          </div>
        </div>

        
        <div className="w-[20%]  height-50">
        {/* <div className="flex flex-col items-end justify-start w-auto">
              <div className="flex flex-row gap-1 items-center justify-start p-1 w-auto">
                <Img
                  className="h-[21px] md:h-auto object-cover rounded w-7"
                  src="images/img_rectangle116.png"
                  alt="rectangle116"
                />
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  New jersey
                </Text>
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div> */}
        <div className="flex md:flex-1 flex-row gap-4 items-end justify-end md:w-full mt-[22px]">
                {/* <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_iconheart.svg"
                  alt="iconheart"
                /> */}
                <Img
                  className="h-[30px] w-[30px] cursor-pointer"
                  src="images/img_iconshoppingcart.svg"
                  onClick={handleCartClick}
                  alt="iconshoppingcar"
                />
                <Img  onClick={handleProfile}
                  className="h-[30px] w-[30px] cursor-pointer"
                  src="images/img_icon.svg"
                  alt="icon"
                />
              </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

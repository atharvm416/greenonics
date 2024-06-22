import React, { useState, useEffect } from "react";

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
import CartpageVTwoColumnThirtyOne from "components/CartpageVTwoColumnThirtyOne";
import CartpageVTwoOrdersummary from "components/CartpageVTwoOrdersummary";
import CategoryPageVTwoTitleofsection from "components/CategoryPageVTwoTitleofsection";
import CategoryPageVTwoUicard1 from "components/CategoryPageVTwoUicard1";
import Header from "components/Header";            
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import axios from "axios";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const CartpagevTwoPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const listDeal = [89,18,32,43]
  const featuredproduct = [23, 45, 6, 78, 12, 34, 56, 89, 3, 67, 20, 54, 88, 9];
  const [data,setData] =useState({});
  const [Dealdata,setDealData] = useState([]);
  const [featuredproductdata,setFeaturedProductData] = useState([]);
  const [cartItemdata,setCartItemData] = useState([]);
  const handleChange = (e, key) => {
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  const getusercart = async () => {
    const cartId = localStorage.getItem('cart_id');
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/cart_item/shopping_cart/${cartId}/`
      );
      //console.log(`New Release ${productId} data:`, response.data);
      //console.log(response.data);
      setCartItemData(response.data);
    } catch (error) {
      console.error(`Error fetching data `, error.message);
    }
  }
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
    
    getusercart();
    fetchDataFeaturedProduct();
  }, []);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCheckout, setTotalCheckout] = useState(0);

  const toggleCheckbox = (itemId, checkout) => {
    // Check if the item is already selected
    const isSelected = selectedItems.includes(itemId);
  
    // Parse the checkout value as a float
    const checkoutValue = parseFloat(checkout);
  
    // Check if checkoutValue is a valid number
    if (!isNaN(checkoutValue)) {
      // Calculate the total checkout amount based on selected items
      let newTotalCheckout = isSelected
        ? totalCheckout - checkoutValue
        : totalCheckout + checkoutValue;
  
      // Ensure that newTotalCheckout is never negative
      newTotalCheckout = Math.max(newTotalCheckout, 0);
  
      // Update the total checkout state
      setTotalCheckout(parseFloat(newTotalCheckout.toFixed(2)));
    } else {
      // Handle the case where checkoutValue is not a valid number
      console.error("Invalid checkout value:", checkout);
    }
  
    // If selected, remove from the list; otherwise, add to the list
    setSelectedItems((prevSelectedItems) =>
      isSelected
        ? prevSelectedItems.filter((selectedItem) => selectedItem !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };
  
  
  
  let totalAmount = 0;

// Mapping through cartItemdata
cartItemdata?.map((item) => {
  // Calculating the subtotal for each item
  const subtotal = item?.product?.product_price * (data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1);

  // Adding the subtotal to the totalAmount
  totalAmount += subtotal;

  // Render the component with the subtotal
  return (
    // Your component code with subtotal
    <div key={item.cart_item_id} className="flex md:flex-col flex-row md:gap-5 items-start justify-start py-2 w-full">
      <Text
        className="capitalize text-center text-teal-900 text-xl w-auto"
        size="txtRobotoMedium20Teal900"
      >
        $ {subtotal.toFixed(2)}
      </Text>
    </div>
  );
});
const updatecart = async (item, newSubtotal) => {
  const cartId = localStorage.getItem('cart_id');
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/cart_item/update/${item.cart_item_id}/`,
      {
        cart: cartId,
        product: item?.product?.product_id,
        quantity: data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1,
        subtotal: newSubtotal, // Assign the calculated subtotal
      }
    );
    //console.log(response.data);
  } catch (error) {
    console.error(`Error fetching data `, error.message);
  }
};

const deletecart = async (id) => {
  console.log("This is id: ",id);
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/cart_item/delete/${id}/`
    );
    console.log(response);
    getusercart();
  } catch (error) {
    console.error(`Error fetching data `, error.message);
  }
  if(cartItemdata.length === 1)
    window.location.reload();
};
console.log("This is the selected item: ",selectedItems);
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
      <Header className="bg-yellow-50 flex  md:px-5 w-full" />
        <div className="flex flex-col items-center justify-end w-full">
        
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start max-w-[1362px] mt-2 mx-auto md:px-5 w-full" >
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start py-4 w-full">
                <div className="flex flex-col items-center justify-start px-2.5 py-0.5 w-[283px]">
                  <Text
                    className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-teal-900 w-auto"
                    size="txtRobotoRomanMedium30"
                  >
                    Shopping Cart
                  </Text>
                </div>
                {/* <div className="flex flex-col items-center justify-start px-1 py-2 w-[222px]">
                  <Text
                    className="text-base text-teal-900 underline w-auto"
                    size="txtRobotoRomanRegular16Teal900"
                  >
                    <>Deselect all items</>
                  </Text>
                </div> */}
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-4 w-auto md:w-full" >
                <div className="flex flex-col items-start justify-start max-w-[918px] w-full">
                 
                  <div className="border border-deep_orange-200 border-solid flex flex-col gap-2 items-end justify-start  w-[811px]  " >
                  <List
                      className="border border-deep_orange-200 border-solid sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start py-2 w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col items-start justify-start sm:ml-[0] w-full">
                        <Text
                          className="capitalize md:ml-[0] ml-[62px] text-base text-center text-teal-900"
                          size="txtRobotoRegular16"
                        >
                          Product
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start sm:ml-[0] w-full">
                        <Text
                          className="capitalize md:ml-[0] ml-[39px] text-base text-center text-teal-900"
                          size="txtRobotoRegular16"
                        >
                          Name Product
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-end sm:ml-[0] w-full">
                        <Text
                          className="capitalize md:ml-[0] ml-[60px] text-base text-center text-teal-900"
                          size="txtRobotoRegular16"
                        >
                          Quantity
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start sm:ml-[0] w-full">
                        <Text
                          className="capitalize md:ml-[0] ml-[72px] text-base text-center text-teal-900"
                          size="txtRobotoRegular16"
                        >
                          Price
                        </Text>
                      </div>
                    </List>
                    {cartItemdata.length > 0 ? (
                       cartItemdata?.map((item) => (
                    <div key={item.cart_item_id} className="flex md:flex-col flex-row md:gap-5 items-start justify-start py-2 w-full">
                      <div className="flex flex-col h-[238px] md:h-auto items-center justify-center w-[50px]">
                      <input
                      type="checkbox"
                      className="h-4 w-4 cursor-pointer appearance-none border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                      checked={selectedItems.includes(item)}
                      onChange={() => toggleCheckbox(item, `${(item?.product?.product_price * (data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1)).toFixed(2)}`)}
                        />
                      </div>
                      <Img
                        className="flex-1 md:flex-none h-[154px] sm:h-auto max-h-[154px] object-cover sm:w-[] md:w-[]"
                        src={ `${process.env.REACT_APP_API_URL}${item?.product?.main_image}`}
                        alt="rectangle156"
                      />
                      <div className="flex relative w-[48%] md:w-full">
                        <div className="flex flex-col gap-6 items-center justify-start my-auto w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="capitalize leading-[150.00%] max-w-[217px] md:max-w-full text-base text-teal-900"
                              size="txtRobotoRegular16"
                            >
                              {`${item?.product?.product_name} - ${item?.product?.packet_size} ${item?.product?.packet_size_uom}`}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1 items-center justify-center w-auto">
                            <div className="flex flex-col items-start justify-center px-1 py-0.5 w-auto">
                             
                            </div>
                           
                              <div className="flex flex-col items-start justify-center px-1 py-0.5 w-[57px] cursor-pointer" onClick={() => deletecart(item?.cart_item_id)}>
                                <Text
                                  className="capitalize text-xs text-yellow-800 underline w-full"
                                  size="txtRobotoRegular12Yellow800"
                                >
                                  Remove
                                </Text>
                              </div>
                              {/* <Line className="self-center h-[18px] bg-yellow-800 w-px" /> */}
                              <div className="flex flex-col items-start justify-center px-1 py-0.5 w-[57px]">
                              
                              </div>
                          </div>
                        </div>
                        <div className="border border-red-100 border-solid flex flex-row gap-1 items-center justify-start px-1 py-[5px] rounded w-[150px]">
                        <input
                            type="number"
                            min="1"
                            className="text-xl sm:text-lg md:text-md text-teal-900 w-[130px] border border-none "
                            value={data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1}  // Use the quantity prop or default to 1
                            onChange={(e) => {
                              // Parse the input value as an integer
                              const newValue = parseInt(e.target.value, 10);
                          
                              // Check if the parsed value is greater than or equal to 1
                              // If yes, update the quantity; otherwise, set it to 1
                              handleChange(e, `${item.cart_item_id}quantity`, Math.max(newValue, 1));
                              updatecart(item, `${(item?.product?.product_price * (data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1)).toFixed(2)}`);
                              // toggleCheckbox(item, `${2 *(item?.product?.product_price * (data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1)).toFixed(2)}`)
                              // toggleCheckbox(item, `${- (item?.product?.product_price * (data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1)).toFixed(2)}`)
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col h-full items-start justify-center w-full">
                        <Text
                          className="capitalize text-center text-teal-900 text-xl w-auto"
                          size="txtRobotoMedium20Teal900"
                        >
                          $ {(item?.product?.product_price * (data?.[`${item.cart_item_id}quantity`] || item?.quantity || 1)).toFixed(2)}
                        </Text>
                      </div>
                    </div>))): (
                    <div  className=" items-center justify-start h-full">
                    <Text
                      className="text-teal-900 text-xl"
                      size="txtRobotoMedium20Teal900"
                    >
                      No Product in your cart
                    </Text>
                  </div>

                  )}
                    <div className="border border-deep_orange-200 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start py-2 w-full">
                      <div className="flex flex-col items-end justify-end p-0.5">
                        <Text
                          className="capitalize mr-[30px] text-base text-center text-teal-900"
                          size="txtRobotoRegular16"
                        >
                          Total ({cartItemdata.length} items)
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-start md:px-10 sm:px-5 px-[55px]">
                        <Text
                          className="capitalize sm:text-[21px] md:text-[23px] text-[25px] text-center text-teal-900"
                          size="txtRobotoSemiBold25"
                        >
                          $ {totalAmount.toFixed(2)}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <CartpageVTwoOrdersummary className="bg-white-A700 flex flex-col gap-8 items-center justify-start py-4 rounded w-[363px]" totalCheckout={totalCheckout} selectedItems={selectedItems} deletecart={deletecart}/>
              <div className="bg-white-A700 flex flex-col gap-4 items-start justify-start p-4 rounded w-[363px]">
                <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-full">
                  <Text
                    className="capitalize text-center text-lg text-teal-900 w-auto"
                    size="txtRobotoMedium18"
                  >
                    Payment methods
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center w-auto">
                  <div className="flex flex-row gap-1 items-start justify-start w-auto">
                    <div className="bg-white-A700 flex flex-col items-center justify-end p-[5px] rounded w-[16%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_close_yellow_900.svg"
                        alt="close"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-[7px] rounded-md w-[16%]">
                      <Img
                        className="h-[15px] mt-1"
                        src="images/img_settings_gray_800_01.svg"
                        alt="settings"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-1.5 rounded-md w-[16%]">
                      <Img
                        className="h-[11px] my-[5px]"
                        src="images/img_settings.svg"
                        alt="settings_One"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-[7px] rounded-md w-[16%]">
                      <Img
                        className="h-5"
                        src="images/img_user_red_a700.svg"
                        alt="user"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-[7px] rounded-md w-[16%]">
                      <Img
                        className="h-[15px] my-0.5"
                        src="images/img_settings_black_900.svg"
                        alt="settings_Two"
                      />
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-1 rounded-md w-[16%]">
                      <Img
                        className="h-[26px]"
                        src="images/img_settings_indigo_800.svg"
                        alt="settings_Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex md:flex-col flex-row md:gap-[55px] items-center justify-between max-w-[1368px] mt-8 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-8 items-start justify-start p-4 w-auto md:w-full">
              <div className="flex flex-col items-start justify-start max-w-[918px] w-full">
                <InformationPageVTwoRowviewNine
                  className="flex sm:flex-col flex-row gap-4 items-center justify-start w-[538px] sm:w-full"
                  viewNine="items saved for later"
                  viewTen="Buy it again"
                />
              </div>
              <div className="flex flex-col items-start justify-start max-w-[918px] w-full">
                <Text
                  className="capitalize text-blue_gray-800 text-center text-sm w-auto"
                  size="txtRobotoLight14Bluegray800"
                >
                  No items saved for later
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-4 h-[113px] md:h-auto items-start justify-start p-4 w-[363px]">
              <div className="flex flex-row gap-1 items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_shieldcheck.svg"
                  alt="shieldcheck"
                />
                <InformationPageVTwoRowviewNine
                  className="flex flex-col gap-4 items-center justify-start w-[134px]"
                  viewTen="Buyer Protection"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="capitalize leading-[120.00%] text-gray-900 text-sm"
                  size="txtRobotoLight14"
                >
                  <>
                    Get full refund if the item is not as described or
                    <br /> if is not delivered
                  </>
                </Text>
              </div>
            </div>
          </div> */}
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
      </div>
    </>
  );
};

export default CartpagevTwoPage;

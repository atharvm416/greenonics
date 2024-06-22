import React, { useEffect } from "react";

import { Button, Img, Line, List, Text } from "components";
import CategoryPageVTwoRowviewTwo from "components/CategoryPageVTwoRowviewTwo";
import Footer1 from "components/Footer1";
import InformationPageVTwoOrdersummary from "components/InformationPageVTwoOrdersummary";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ReviewvTwoPage = () => {
  const location = useLocation();
  //console.log("This is loaction data",location?.state);
  const [order,setOrder] = useState(location?.state?.order);
  const [order_item,setOrder_item] = useState({});
  const [selectedItems,setselectedItems] = useState();
  const [addressget,setaddressget] = useState({});
  const [selectedValue, setSelectedValue] = useState(() => {
    const shippingMethod = location?.state?.order?.shipping_method;
  
    switch (shippingMethod) {
      case 'expedited':
        return 'Expedited Shipping (4-5 business days) $00.00';
      case 'free':
        return 'Free Shipping';
      case 'xpresspost':
        return 'Xpresspost (3 business days) $00.00';
      default:
        return ''; // You can set a default value if the shipping method is not recognized
    }
  });
  const [success, setsuccess] = useState(location?.state?.success);
const [orderDateObject, setorderDateObject] =  useState([]);
  const navigate=useNavigate();
  console.log("order:",order);
  useEffect(() => {
    const fetchData = async () => {
      await getusercart();
      await getusercartaddress();
    };
  
    fetchData();
  }, []);

  const getusercartaddress = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/delivery_address/${order?.address}/`
      );
      //console.log(`New Release ${productId} data:`, response.data);
      console.log("response",response.data);
      setaddressget(response.data);
      const orderDateString = order?.order_date;
      new Date(orderDateString)
      console.log(orderDateString);
    } catch (error) {
      console.error(`Error fetching data `, error.message);
    }

   
  }
  const getusercart = async () => {
      try {
        const response1 = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/order_item/getproduct/${order?.order_id}/`
        );
        //console.log(`New Release ${productId} data:`, response.data);
        console.log("response1",response1.data);
        
        setselectedItems(response1.data);
        console.log("selected  like this",selectedItems);
      } catch (error) {
        console.error(`Error fetching data `, error.message);
      }
  }
  
  const handleHome =() => {
    navigate("/HomepagevTwo")
  } 
  const handleorder =() => {
    navigate("/ProfileorderhistoryOne")
  } 
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-roboto gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-yellow-50 flex flex-col h-[126px] md:h-auto items-center justify-center sm:px-5 px-[37px] py-8 w-full">
          <Img
            className="h-[89px] sm:h-auto object-cover w-[307px] md:w-full"
            src="images/img_greenonicslogo.png"
            alt="greenonicslogo"
          />
        </div>
        {success === "true" ? (
  <div className="flex flex-col items-center justify-start py-1 w-full">
    <Text
      className="capitalize md:text-3xl sm:text-[28px] text-[32px] text-teal-900_01 w-auto"
      size="txtRobotoRomanMedium32"
    >
      Thank You for your order!
    </Text>
  </div>
) : (
  <div></div>
)}

        <div className="flex flex-col gap-8 items-start justify-start max-w-[1368px] mx-auto md:px-5 w-full">
          <CategoryPageVTwoRowviewTwo className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full" />
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start max-w-[1368px] w-full">
            <div className="bg-white-A700 flex flex-1 flex-col gap-8 items-start justify-start max-w-[950px] p-8 sm:px-5 rounded w-full">
              <div className="flex flex-col gap-4 items-start justify-start py-8 w-auto md:w-full">
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  {/* <div className="border border-deep_orange-200 border-solid flex flex-1 flex-col gap-2 items-start justify-start max-w-[676px] py-1 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start px-2 py-1 w-full">
                      <div className="flex flex-1 flex-col items-start justify-start py-1 w-full">
                        <Text
                          className="capitalize text-base text-teal-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          Information
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
                        <Text
                          className="capitalize text-red-200 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Change
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-red-200 h-px w-full" />
                    <div className="flex flex-col gap-1 items-start justify-start pl-4 pr-1 py-1 w-full">
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        Adresse
                      </Text>
                      <Text
                        className="capitalize text-base text-teal-900 w-full"
                        size="txtRobotoRegular16"
                      >
                        Name custmer{" "}
                      </Text>
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        ghiz@email.
                      </Text>
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        {" "}
                        number Phone
                      </Text>
                    </div>
                  </div> */}
                  <div className="border border-deep_orange-200 border-solid flex flex-1 flex-col gap-2 items-start justify-start max-w-[676px] py-1 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start px-2 py-1 w-full">
                      <div className="flex flex-1 flex-col items-start justify-start py-1 w-full">
                        <Text
                          className="capitalize text-base text-teal-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          Shipping
                        </Text>
                      </div>
                      {/* <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
                        <Text
                          className="capitalize text-red-200 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Change
                        </Text>
                      </div> */}
                    </div>
                    <Line className="bg-red-200 h-px w-full" />
                    <div className="flex flex-col gap-1 items-start justify-start pl-4 pr-1 py-1 w-full">
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        {addressget?.address_line_1}, {addressget?.address_line_2}, {addressget?.city}, {addressget?.country}, {addressget?.phone_no}, {addressget?.postal_code}
                      </Text>
                      <Text
                        className="capitalize text-blue_gray-900 text-sm w-full"
                        size="txtRobotoLight14Bluegray900"
                      >
                        {selectedValue}
                      </Text>
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        {orderDateObject}
                      </Text>
                    </div>
                  </div>
                  {/* <div className="border border-deep_orange-200 border-solid flex flex-1 flex-col gap-2 items-start justify-start max-w-[676px] py-1 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start px-2 py-1 w-full">
                      <div className="flex flex-1 flex-col items-start justify-start py-1 w-full">
                        <Text
                          className="capitalize text-base text-teal-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          Payment
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
                        <Text
                          className="capitalize text-red-200 text-xs w-auto"
                          size="txtRobotoRegular12"
                        >
                          Change
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-red-200 h-px w-full" />
                    <div className="flex flex-col gap-1 items-start justify-start pl-4 pr-1 py-1 w-full">
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        Method Payment
                      </Text>
                      <Text
                        className="capitalize text-blue_gray-900 text-sm w-full"
                        size="txtRobotoLight14Bluegray900"
                      >
                        Name
                      </Text>
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        Number Card
                      </Text>
                      <Text
                        className="capitalize text-sm text-teal-900 w-full"
                        size="txtRobotoLight14Teal900"
                      >
                        Date Expire
                      </Text>
                    </div>
                  </div> */}
                </List>
                {/* <div className="flex md:flex-col flex-row gap-1 items-center justify-start px-1 py-2 w-auto md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_iconcheckbox_gray_700.svg"
                    alt="iconcheckbox"
                  />
                  <Text
                    className="capitalize text-gray-700 text-sm w-auto"
                    size="txtRobotoLight14Gray700"
                  >
                    <span className="text-teal-900 font-roboto text-left font-light">
                      By click the{" "}
                    </span>
                    <span className="text-teal-900 font-roboto text-left text-base font-normal">
                      “Place Order”
                    </span>
                    <span className="text-teal-900 font-roboto text-left font-light">
                      {" "}
                      action you agree to our Terms of use Privet Policy and
                      Return Policy.
                    </span>
                  </Text>
                </div> */}
              </div>
              <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between max-w-[632px] w-full">
                {/* <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-3 py-4 rounded w-auto">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="text-deep_orange-400 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Return To Payment
                  </Text>
                </div> */}
                <Button onClick={handleHome}
                  className="!text-gray-100 border border-solid border-yellow-800 cursor-pointer font-medium h-9 leading-[normal] text-center text-sm w-64"
                  shape="round"
                  color="yellow_800"
                  size="md"
                  variant="fill"
                >
                  Return Home
                </Button>
                <Button onClick={handleorder}
                  className="!text-gray-100 border border-solid border-yellow-800 cursor-pointer font-medium h-9 leading-[normal] text-center text-sm w-64"
                  shape="round"
                  color="yellow_800"
                  size="md"
                  variant="fill"
                >
                  Return Order History
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start p-4 rounded w-[363px]">
                ORDER SUMMARY
                <div>
  {selectedItems ? (
    selectedItems.map((item, index) => (
      <div key={index} className="flex flex-row gap-[11px] items-start justify-start w-full">
        <div className="flex flex-col items-center justify-start w-[34%]">
          <Img
            className="h-[121px] md:h-auto object-cover w-full"
            src={`${process.env.REACT_APP_API_URL}${item?.product?.main_image}`}
            alt="rectangle176"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[5px] items-end justify-start w-full">
          <div className="flex relative w-full">
            <div className="flex flex-col gap-[5px] items-center justify-start ml-[undefinedpx] my-auto w-auto z-[1]">
              <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-full">
                <Text
                  className="capitalize leading-[150.00%] max-w-[171px] md:max-w-full text-base text-teal-900"
                  size="txtRobotoRegular16"
                >
                  {item?.product?.product_name}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-[191px]">
                <Text
                  className="capitalize text-gray-800 text-xs w-auto"
                  size="txtRobotoRegular12Gray800"
                >
                  Quantity {item?.quantity}
                </Text>
              </div>
            </div>
            <Img
              className="h-8 ml-[-14px] w-8 z-[1]"
              src="images/img_dotsvertical.svg"
              alt="dotsvertical"
            />
          </div>
          <div className="flex flex-col items-center justify-end px-2.5 py-[5px] w-full">
            <Text
              className="capitalize text-lg text-right text-teal-900 w-auto"
              size="txtRobotoMedium18"
            >
             $ {item?.sub_total}
            </Text>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div></div>
  )}
</div>


        {/* <div className="flex flex-col gap-1 items-center justify-start w-[318px]">
          <div className="flex flex-row items-start justify-between px-1 w-full">
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-base text-teal-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.itemstotaltext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-base text-teal-900 w-auto"
                size="txtRobotoRegular16"
              >
                {props?.itemstotalprice}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between px-1 w-full">
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.discountstext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.discountsprice}
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-0.5 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.subtotaltext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.subtotalprice}
                </Text>
              </div>
            </div>
            <Line className="self-center h-px bg-deep_orange-400 shadow-bs w-full" />
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.shippingtext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-teal-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.shippingprice}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row items-start justify-between px-1 w-full">
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.dutiestaxestext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
              <Text
                className="capitalize text-sm text-teal-900 w-auto"
                size="txtRobotoLight14Teal900"
              >
                {props?.dutiestaxesprice}
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between px-1 w-full">
            <div className="flex flex-1 flex-col h-[45px] md:h-auto items-center justify-center w-full">
              <Text
                className="capitalize text-center text-lg text-teal-900 w-auto"
                size="txtRobotoMedium18"
              >
                {props?.totaltext}
              </Text>
            </div>
            <div className="flex flex-1 flex-col h-[45px] md:h-auto items-center justify-start w-full">
              <Text
                className="capitalize text-center text-lg text-teal-900 w-auto"
                size="txtRobotoMedium18"
              >
                {props?.order?.total_amount}
              </Text>
            </div>
          </div>
        </div> */}
      </div>
            </div>
          </div>
        </div>
        <Footer1 className="flex gap-2 items-center justify-center md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default ReviewvTwoPage;

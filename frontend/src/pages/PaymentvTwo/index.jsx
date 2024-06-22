import React, { useState } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CategoryPageVTwoRowviewTwo from "components/CategoryPageVTwoRowviewTwo";
import Footer1 from "components/Footer1";
import InformationPageVTwoColumnFour from "components/InformationPageVTwoColumnFour";
import InformationPageVTwoColumnarrowdown from "components/InformationPageVTwoColumnarrowdown";
import InformationPageVTwoOrdersummary from "components/InformationPageVTwoOrdersummary";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import axios from "axios";
const PaymentvTwoPage = () => {
  const location = useLocation();
  //console.log("This is loaction data",location?.state);
  const [order,setOrder] = useState(location?.state?.order);
  const [order_item,setOrder_item] = useState(location?.state?.order_item);
  const [selectedItems,setselectedItems] = useState(location?.state?.selectedItems);
  const [addressget,setaddressget] = useState(location?.state?.address);
  const [selectedValue, setSelectedValue] = useState(location?.state?.selectedValue);
  console.log(location?.state);
  const [data,setData] = useState({})
  const handleChange = (e, key) => {
    const value = e.target.value;
    console.log(key, value);
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  const navigate=useNavigate();
  const handlePayment = async() => {
    const userId = localStorage.getItem('user_id');
  
    const currentDate = new Date();
    const expectedDate = new Date(currentDate);
    expectedDate.setDate(currentDate.getDate() + 5);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/order_delivery/create/`,
        {
          user: userId,
          order : order.order_id,
          address : addressget.address_id,
          expected_date : expectedDate.toISOString().split('T')[0],
        }
      );

      console.log(response);
      navigate("/ReviewvTwo",  { state: {  order: order,
        order_item: order_item,
        selectedItems: selectedItems,
        address: addressget,
        selectedValue: selectedValue,
    success: "true"} });
    } catch (error) {
      alert("Please fill the data completely");
      console.error(`Error fetching data `, error.message);
      //throw error; // rethrow the error to ensure it's caught in the calling code
    }
  }

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
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
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1368px] mx-auto md:px-5 w-full">
          <CategoryPageVTwoRowviewTwo className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full" />
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start max-w-[1368px] w-full">
            <div className="bg-white-A700 flex flex-1 flex-col gap-8 items-start justify-start max-w-[950px] p-8 sm:px-5 rounded w-full">
              <List
                className="border border-deep_orange-200 border-solid flex flex-col gap-2 items-center p-1 rounded w-auto"
                orientation="vertical"
              >
                {/* <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[659px] my-0 w-full">
                  <div className="flex flex-col items-start justify-start p-[9px]">
                    <Text
                      className="capitalize mb-[3px] text-base text-teal-900"
                      size="txtRobotoRegular16"
                    >
                      Contact
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-1 w-full">
                    <Text
                      className="capitalize text-gray-700 text-sm w-auto"
                      size="txtRobotoLight14Gray700"
                    >
                      sara.store@gmail.com
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
                <Line className="self-center h-px bg-red-200 w-[84%]" /> */}
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[659px] my-0 w-full">
                  <div className="flex flex-col items-start justify-start p-2.5">
                    <Text
                      className="capitalize text-base text-teal-900"
                      size="txtRobotoRegular16"
                    >
                      Ship to
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-1 w-full">
                    <Text
                      className="capitalize text-gray-700 text-sm w-auto"
                      size="txtRobotoLight14Gray700"
                    >
                      {addressget?.address_line_1}, {addressget?.address_line_2}, {addressget?.city}, {addressget?.country}, {addressget?.phone_no}, {addressget?.postal_code}
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
                <Line className="self-center h-px bg-red-200 w-[84%]" />
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[659px] my-0 w-full">
                  <div className="flex flex-col items-start justify-start pl-2 py-2 w-[100px]">
                    <Text
                      className="capitalize text-base text-teal-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      Method
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start p-1 w-full">
                    <Text
                      className="capitalize text-gray-700 text-sm w-auto"
                      size="txtRobotoLight14Gray700"
                    >
                      {selectedValue}
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
              </List>
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start px-0.5 py-[5px] w-[172px]">
                  <Text
                    className="capitalize text-base text-center text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    Payment
                  </Text>
                </div>
                <div className="flex flex-col font-inter items-center justify-end w-full">
                  <div className="flex flex-col h-9 md:h-auto items-center justify-center p-2 rounded-tl rounded-tr w-auto">
                    <Text
                      className="text-red-200 text-sm w-auto"
                      size="txtInterMedium14"
                    >
                      Add a new Card
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-1.5 rounded-md w-[15%]">
                    <Img
                      className="h-2.5 my-1"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-1.5 rounded-md w-[15%]">
                    <Img
                      className="h-[18px]"
                      src="images/img_user_red_a700.svg"
                      alt="user"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-1 rounded-md w-[15%]">
                    <Img
                      className="h-[23px]"
                      src="images/img_settings_indigo_800.svg"
                      alt="settings_One"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-1.5 rounded-md w-[15%]">
                    <Img
                      className="h-3.5 my-0.5"
                      src="images/img_settings_gray_800_01.svg"
                      alt="settings_Two"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-start p-1.5 rounded-md w-[15%]">
                    <Img
                      className="h-3.5 my-0.5"
                      src="images/img_settings_black_900.svg"
                      alt="settings_Three"
                    />
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-end p-[5px] rounded-md w-[15%]">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                </div>
                <div className="flex flex-col font-roboto gap-[9px] items-start justify-center w-auto md:w-full">
                <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Card No"
                      value={data?.card_no}
                      onChange={(e) => handleChange(e, "card_no")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="CardHolder Name"
                      value={data?.card_holder}
                      onChange={(e) => handleChange(e, "card_holder")}
                    />
                  </div>
                  
                  
                 
                  <div className="flex md:flex-col flex-row gap-3.5 items-start justify-between max-w-[632px] w-full">
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Expiration Date(MM / yY)"
                      value={data?.expiry}
                      onChange={(e) => handleChange(e, "expiry")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Security code"
                      value={data?.security_code}
                      onChange={(e) => handleChange(e, "security_code")}
                    />
                  </div>
                  </div>
                  {/* <div className="flex flex-row gap-1 items-center justify-start px-1 py-2 w-auto">
                    
                    <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer appearance-none border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    checked={isChecked}
                    onChange={() => {}}
                    onClick={toggleCheckbox}
                  />
                    <Text
                      className="capitalize text-gray-700 text-sm w-auto"
                      size="txtRobotoLight14Gray700"
                    >
                      Save this information for next time
                    </Text>
                  </div> */}
                  <div className="flex flex-row gap-1 items-center justify-start px-1 py-2 w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_fileexclamation.svg"
                      alt="fileexclamation"
                    />
                    <Text
                      className="capitalize text-gray-400 text-xs w-auto"
                      size="txtRobotoRegular12Gray400"
                    >
                      Your order will be processed in USD
                    </Text>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-[154px]">
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    Billing address
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-[399px] sm:w-full">
                  <Text
                    className="capitalize text-sm text-teal-900 w-auto"
                    size="txtRobotoLight14Teal900"
                  >
                    Select the address that matches your card or payment method.
                  </Text>
                </div>
                <div className="border border-deep_orange-200 border-solid flex flex-col gap-2 items-center justify-start p-1 rounded w-auto md:w-full">
                  <div className="flex flex-row gap-4 h-[42px] md:h-auto items-center justify-start max-w-[662px] p-2.5 w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_iconradiobutton.svg"
                      alt="iconradiobutton"
                    />
                    <Text
                      className="capitalize text-base text-teal-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      Card Number
                    </Text>
                  </div>
                  <Line className="bg-red-200 h-px w-[84%]" />
                  <div className="flex flex-row gap-4 h-[42px] md:h-auto items-center justify-start max-w-[662px] p-2.5 w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_iconradiobutton_deep_orange_a100.svg"
                      alt="iconradiobutton_One"
                    />
                    <Text
                      className="capitalize text-sm text-teal-900 w-auto"
                      size="txtRobotoLight14Teal900"
                    >
                      card Number
                    </Text>
                  </div>
                </div>
              </div> */}
              <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between max-w-[632px] w-full">
                <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-3 py-4 rounded w-auto">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="text-deep_orange-400 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Return To Shipping
                  </Text>
                </div>
                <Button onClick={handlePayment}
                  className="!text-gray-100 border border-solid border-yellow-800 cursor-pointer font-medium h-9 leading-[normal] text-center text-sm w-64"
                  shape="round"
                  color="yellow_800"
                  size="md"
                  variant="fill"
                >
                  Pay Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <InformationPageVTwoOrdersummary
                className="bg-white-A700 flex flex-col gap-8 items-center justify-start p-4 rounded w-[363px]" selectedItems={selectedItems} order={order}
                ordersummarytext={
                  <Text className="border-b border-deep_orange-200 border-solid capitalize font-medium h-[39px] pb-[5px] pt-[9px] sm:px-5 px-[35px] text-center text-teal-900 text-xl w-full">
                    <span className="text-teal-900 font-roboto">
                      Order Summary
                    </span>
                    <span className="text-gray-500 font-roboto text-base font-normal">
                      ({order_item.length}  items)
                    </span>
                  </Text>
                }
              />
              {/* <List
                className="flex flex-col gap-4 items-center w-full"
                orientation="vertical"
              >
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
                      className="capitalize text-gray-900 text-sm w-auto"
                      size="txtRobotoLight14"
                    >
                      <>we keep your information and payment safe</>
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-4 h-[113px] md:h-auto items-start justify-start p-4 w-[363px]">
                  <div className="flex flex-row gap-1 items-center justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconhelpoutline.svg"
                      alt="iconhelpoutline"
                    />
                    <InformationPageVTwoRowviewNine
                      className="flex flex-col gap-4 items-center justify-start w-[134px] self-center"
                      viewTen="Help"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="capitalize leading-[120.00%] text-gray-900 text-sm"
                      size="txtRobotoLight14"
                    >
                      <>
                        Help Center, Disputes & Reports, Buyer Protection,{" "}
                        <br />
                        Report IPR infringement, Regulated Information
                      </>
                    </Text>
                  </div>
                </div>
              </List> */}
            </div>
          </div>
        </div>
        <Footer1 className="flex gap-4 items-center justify-center md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default PaymentvTwoPage;

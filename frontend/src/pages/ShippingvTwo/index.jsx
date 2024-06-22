import React, { useState } from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CategoryPageVTwoRowviewTwo from "components/CategoryPageVTwoRowviewTwo";
import Footer1 from "components/Footer1";
import InformationPageVTwoOrdersummary from "components/InformationPageVTwoOrdersummary";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import { useNavigate } from "react-router";
import { Radio, FormControlLabel } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import axios from "axios";
const ShippingvTwoPage = () => {
  const location = useLocation();
  console.log("This is loaction data",location?.state);
  const [order,setOrder] = useState(location?.state?.order);
  const [order_item,setOrder_item] = useState(location?.state?.order_item);
  const [selectedItems,setselectedItems] = useState(location?.state?.selectedItems);
  const [addressget,setaddressget] = useState(location?.state?.address);
  const [selectedValue, setSelectedValue] = React.useState("Free Shipping");

  console.log("selectedValue", {selectedValue});
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSelectedValue(value);
  };
  
  const navigate= useNavigate();
  const handlePayment = async () => {
    let method = "";
    const selectedValueString = selectedValue?.toString();

    if (selectedValueString === "Xpresspost (3 business days) $00,00") {
      method = "xpresspost";
    } else if (selectedValueString === "Expedited Shipping (4-5 business days) $00,00") {
      method = "expedited";
    } else {
      method = "free";
    }
  
    console.log("method", {method});
    try {
      const response1 = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/order/update/${order?.order_id}/`,
        {
          ...order,
          shipping_method: method,
        }
      );
  
      console.log("Response:", response1);
      navigate("/PaymentvTwo", {
        state: {
          order: response1.data,
          order_item: order_item,
          selectedItems: selectedItems,
          address: addressget,
          selectedValue: selectedValue
        },
      });
    } catch (error) {
      console.error("Error updating shipping method: ", error.message);
    }
  };
  

  const [address, setAddress] = useState("Current Address");
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Save the updated address
    setEditMode(false);
  };

  const handleCancel = () => {
    // Reset the address
    setEditMode(false);
  };
  const [showRegister, setShowRegister] = useState(false);

  const handleToggleRegister = () => {
    setShowRegister(!showRegister);
  };
  const goBack = () => {
    window.history.back();
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
            <div className="bg-white-A700 flex flex-1 flex-col gap-8 h-[479px] md:h-auto items-start justify-start max-w-[950px] p-8 sm:px-5 rounded w-full">
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
                </div> */}
                {/* <Line className="self-center h-px bg-red-200 w-[84%]" /> */}
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
                  <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
                  <Text
                  className="capitalize text-red-200 text-xs w-auto"
                  size="txtRobotoRegular12"
                  onClick={handleEdit}
                >
                  Change
                </Text>

                  </div>
                  
                </div>
              </List>
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start px-2.5 py-[5px] w-[154px]">
                  <Text
                    className="capitalize text-base text-teal-900 w-auto"
                    size="txtRobotoRegular16"
                  >
                    Shipping method
                  </Text>
                </div>
                <div className="border border-deep_orange-200 border-solid flex flex-col gap-2 items-center justify-start p-1 rounded w-auto md:w-full">
                  <div className="flex md:flex-col flex-row gap-4 h-[42px] md:h-auto items-center justify-start max-w-[662px] p-2.5 w-full">
                  <FormControlLabel
  control={<Radio color="primary" />}
  label="Free Shipping"
  value="Free Shipping"
  onChange={(event) => handleChange(event)}
  checked={selectedValue === "Free Shipping"}
/>
                  
                  </div>
                  <Line className="bg-red-200 h-px w-[84%]" />
                  <div className="flex md:flex-col flex-row gap-4 h-[42px] md:h-auto items-center justify-start max-w-[662px] p-2.5 w-full">
                  <FormControlLabel
  control={<Radio color="primary" />}
  label="Expedited Shipping (4-5 business days) $00,00"
  value="Expedited Shipping (4-5 business days) $00,00"
  onChange={(event) => handleChange(event)}
  checked={selectedValue === "Expedited Shipping (4-5 business days) $00,00"}
/>
                   
                    
                  </div>
                  <Line className="bg-red-200 h-px w-[84%]" />
                  <div className="flex md:flex-col flex-row gap-4 h-[42px] md:h-auto items-center justify-start max-w-[662px] p-2.5 w-full">
                  <FormControlLabel
  control={<Radio color="primary" />}
  label="Xpresspost (3 business days) $00,00"
  value="Xpresspost (3 business days) $00,00"
  onChange={(event) => handleChange(event)}
  checked={selectedValue === "Xpresspost (3 business days) $00,00"}
/>
                   
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-start justify-between max-w-[632px] w-full">
                <div className="flex flex-row gap-2 h-9 md:h-auto items-center justify-center px-3 py-4 rounded w-auto">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_arrowleft_black_900.svg"
                    alt="arrowleft"
                  />
                  <Text onClick={goBack}
                    className="text-deep_orange-400 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    Return To Information
                  </Text>
                </div>
                <Button onClick={handlePayment}
                  className="!text-gray-100 border border-solid border-yellow-800 cursor-pointer font-medium h-9 leading-[normal] text-center text-sm w-64"
                  shape="round"
                  color="yellow_800"
                  size="md"
                  variant="fill"
                >
                  Continue to Payment
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
            
            </div>
          </div>
        </div>
        <Footer1 className="flex gap-4 items-center justify-center md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default ShippingvTwoPage;

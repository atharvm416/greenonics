import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import CategoryPageVTwoRowviewTwo from "components/CategoryPageVTwoRowviewTwo";
import Footer1 from "components/Footer1";
import InformationPageVTwoColumnFour from "components/InformationPageVTwoColumnFour";
import InformationPageVTwoColumnarrowdown from "components/InformationPageVTwoColumnarrowdown";
import InformationPageVTwoColumnarrowdownOne from "components/InformationPageVTwoColumnarrowdownOne";
import InformationPageVTwoOrdersummary from "components/InformationPageVTwoOrdersummary";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import { useNavigate} from "react-router";
import { useLocation } from "react-router-dom";

const InformationpagevTwoPage = () => {
  const location = useLocation();
  //console.log("This is loaction data",location?.state);
  const [order,setOrder] = useState(location?.state?.order);
  const [order_item,setOrder_item] = useState(location?.state?.order_item);
  const [selectedItems,setselectedItems] = useState(location?.state?.selectedItems);
  const navigate = useNavigate();
  const handleShipping = async() => {
    const userId = localStorage.getItem('user_id');
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/delivery_address/create/`,
        {
          user: userId,
          address_line_1 : data?.address,
          address_line_2 : data?.apartment,
          city : data?.city,
          state : data?.state,
          country : data?.country,
          postal_code : data?.postal_code,
          phone_no : data?.phone_no
        }
      );

      console.log(response.data);
      try{
        const response1 = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/order/update/${order?.order_id }/`,
          {
            ...order, 
            address: response.data.address_id
          }
        );

        console.log("The response of oderer:", response1);
        navigate("/ShippingvTwo", { state: {  order: response1.data,
          order_item: order_item,
          selectedItems: selectedItems, address:response.data } })
      }catch (error) {
      console.error(`Error fetching data `, error.message);
      //throw error; // rethrow the error to ensure it's caught in the calling code
    }
      

    } catch (error) {
      alert("Please fill the data completely");
      console.error(`Error fetching data `, error.message);
      //throw error; // rethrow the error to ensure it's caught in the calling code
    }
  }
  const handleLogin = () => {
    navigate("/SignpagevTwo")
  }
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const [isChecked1, setIsChecked1] = useState(false);

  const toggleCheckbox1 = () => {
    setIsChecked1(!isChecked1);
  };
  const goBack = () => {
    window.history.back();
  };
   const [data,setData] = useState({})
  const handleChange = (e, key) => {
    const value = e.target.value;
    console.log(key, value);
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-roboto gap-2 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
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
            <div className="bg-white-A700 flex flex-1 flex-col gap-8 h-[902px] md:h-auto items-start justify-start max-w-[950px] sm:px-5 px-8 py-4 rounded w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                
                <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col items-center justify-start px-0.5 py-[5px] w-[172px]">
                    <Text
                      className="capitalize text-base text-center text-teal-900 w-auto"
                      size="txtRobotoRegular16"
                    >
                      Shipping address
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[310px] sm:w-full flex md:flex-col flex-row gap-1 h-auto md:h-[56px] items-center justify-start px-1 py-2 rounded">
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Address"
                      value={data?.address}
                      onChange={(e) => handleChange(e, "address")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Apartment"
                      value={data?.apartment}
                      onChange={(e) => handleChange(e, "apartment")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="City"
                      value={data?.city}
                      onChange={(e) => handleChange(e, "city")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="State"
                      value={data?.state}
                      onChange={(e) => handleChange(e, "state")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Country"
                      value={data?.country}
                      onChange={(e) => handleChange(e, "country")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Phone No"
                      value={data?.phone_no}
                      onChange={(e) => handleChange(e, "phone_no")}
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start px-1 py-[3px] w-full border border-deep_orange-200 border-solid ">
                    <input
                      style={{ width: '250px', alignItems: 'left', justifyContent: 'flex-start', height: '25px' }}
                      placeholder="Postal Code"
                      value={data?.postal_code}
                      onChange={(e) => handleChange(e, "postal_code")}
                    />
                  </div>
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
                    Back To Cart
                  </Text>
                </div>
                <Button onClick={handleShipping}
                  className="border border-solid border-yellow-800 cursor-pointer font-medium h-9 leading-[normal] text-center text-sm w-64"
                  shape="round"
                  color="yellow_800"
                  size="md"
                  variant="fill"
                >
                  Continue to shipping
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
                      ({order_item.length} items)
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
                      className="flex flex-col gap-4 items-center justify-start w-[134px]"
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

export default InformationpagevTwoPage;

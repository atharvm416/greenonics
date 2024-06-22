import React, { useState } from "react";
import axios from "axios";
import { Button, Line, List, Text } from "components";
import {  useNavigate } from "react-router";

const CartpageVTwoOrdersummary = (props) => {
  const navigate= useNavigate();
  const [order,setorder] = useState("");
  const handleCheckout = async () => {
    try {
      if(!props?.selectedItems || props.selectedItems.length === 0){
        alert("please select atleast one item");
      }
      else{
      const { order, order_item } = await createorder();
      console.log("This has to it");
      navigate("/InformationpagevTwo", { state: {  order: order,
        order_item: order_item,
        selectedItems: props?.selectedItems,} });
    } }catch (error) {
      console.error("Error during checkout:", error.message);
    }
  };
  

  const createorder = async () => {
    try {
      const userId = localStorage.getItem('user_id');
    
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/order/create/`,
        {
          user: userId,
          total_amount: props?.totalCheckout,
        }
      );
    
      const createdOrder = response.data.order_id;
      const order_master = response.data;
  
      let response1Data = [];
  
      const fetchPromises = props?.selectedItems.map(async (item) => {
        try {
          const response1 = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/order_item/create/`,
            {
              order: createdOrder,
              user: userId,
              product: item?.product?.product_id,
              quantity: item?.quantity,
              sub_total: item?.subtotal,
            }
          );
          response1Data.push(response1.data);
        } catch (error) {
          console.error(`Error creating order item:`, error.message);
          throw error;
        }
      });
  
      await Promise.all(fetchPromises);
  
      const deleteCartPromises = props?.selectedItems.map(async (item) => {
        try {
          await props?.deletecart(item?.cart_item_id);
        } catch (error) {
          console.error(`Error deleting cart item:`, error.message);
          throw error;
        }
      });
  
      await Promise.all(deleteCartPromises);
  
      return {
        order: order_master,
        order_item: response1Data,
      };
    } catch (error) {
      console.error(`Error creating order:`, error.message);
      throw error;
    }
  };
  
  
  
  
  return (
    <>
      <div className={props.className}>
        <Button
          className="!text-gray-900 capitalize cursor-pointer font-medium font-roboto min-w-[363px] text-center text-lg"
          shape="square"
          color="deep_orange_200"
          size="md"
          variant="outline"
        >
          {props?.ordersummarybutton}
        </Button>
        <div className="flex flex-col items-center justify-start w-[318px]">
          <List
            className="flex flex-col gap-0.5 items-center pt-11 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-gray-900 text-sm w-auto"
                  size="txtRobotoLight14"
                >
                  {props?.discountstext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-gray-900 text-sm w-auto"
                  size="txtRobotoLight14"
                >
                  {props?.pricetext}
                </Text>
              </div>
            </div>
            <Line className="self-center h-px bg-deep_orange-A100_01 shadow-bs w-full" />
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-gray-900 w-auto"
                  size="txtRobotoRegular16Gray900"
                >
                  {props?.subtotaltext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-gray-900 w-auto"
                  size="txtInterRegular16"
                >
                  {props?.pricetext2}
                </Text>
              </div>
            </div>
            <Line className="self-center h-px bg-deep_orange-A100_01 shadow-bs w-full" />
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-gray-900 w-auto"
                  size="txtRobotoRegular16Gray900"
                >
                  {props?.shippingtext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-base text-gray-900 w-auto"
                  size="txtRobotoRegular16Gray900"
                >
                  {props?.pricetext3}
                </Text>
              </div>
            </div>
            <Line className="self-center h-px bg-deep_orange-A100_01 shadow-bs w-full" />
            <div className="flex flex-1 flex-row items-start justify-between px-1 w-full">
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-gray-900 text-sm w-auto"
                  size="txtRobotoLight14"
                >
                  {props?.dutiestaxestext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start px-1 py-2 w-full">
                <Text
                  className="capitalize text-gray-900 text-sm w-auto"
                  size="txtRobotoLight14"
                >
                  {props?.pricetext4}
                </Text>
              </div>
            </div>
            <Line className="self-center h-px bg-deep_orange-A100_01 shadow-bs w-full" />
            <div className="flex flex-1 flex-row items-center justify-between px-1 w-full">
              <div className="flex flex-1 flex-col h-[45px] md:h-auto items-center justify-center w-full">
                <Text
                  className="capitalize text-center text-gray-900 text-lg w-auto"
                  size="txtRobotoMedium18Gray900"
                >
                  {props?.totaltext}
                </Text>
              </div>
              <div className="flex flex-1 flex-col h-[45px] md:h-auto items-center justify-start w-full">
                <Text
                  className="capitalize text-center text-gray-900 text-lg w-auto"
                  size="txtRobotoMedium18Gray900"
                >
                 $ {props?.totalCheckout}
                </Text>
              </div>
            </div>
          </List>
        </div>
        <Button onClick={handleCheckout}
          className="border border-solid border-yellow-800 cursor-pointer font-inter font-medium h-9 leading-[normal] text-center text-sm w-64"
          shape="round"
          color="yellow_800"
          size="md"
          variant="fill"
        >
          {props?.procederToChekout}
        </Button>
      </div>
    </>
  );
};

CartpageVTwoOrdersummary.defaultProps = {
  ordersummarybutton: "order summary",
  discountstext: "Discounts",
  pricetext: "-$00,00",
  itemstotalonetext: "Items Total (1)",
  pricetext1: "$00,00",
  subtotaltext: "Subtotal",
  pricetext2: "$00,00",
  shippingtext: "Shipping",
  pricetext3: "$00,00",
  dutiestaxestext: "Duties & Taxes",
  pricetext4: "$00,00",
  totaltext: "Total",
  pricetext5: "$00,00",
  procederToChekout: "Proceed To Checkout",
};

export default CartpageVTwoOrdersummary;

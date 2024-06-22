import { Img, Text } from "components";
import { Heading } from "components/Heading";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function ProfileOrderHistoryOneList({
  ninetysixmillio = "#71667167",
  inprogress = "COMPLETED",
  dec302019five = "Dec 7, 2019 23:26",
  price = "$70 (4 Products)",
  viewdetails = "View Details",
  ...props
}) 
{
  const navigate=useNavigate();
  const handleDtrails =()=>{
    navigate("/ReviewvTwo",  { state: {  order: props,
  success: "false"} });
  }
  //console.log("The props",props);
  const orderDate = new Date(props?.order_date);
const formattedDate = orderDate.toLocaleString();
const [order_stat, setOrder_stat] = useState({});
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/order_delivery/byorder/${props?.order_id}/`
      );
      //console.log(`New Release ${productId} data:`, response.data);
      console.log("response4411",response.data);
      setOrder_stat(response.data);
    } catch (error) {
      console.error(`Error fetching data `, error.message);
    }

   
  }

  fetchData();
}, []);


  return (
    <div {...props}>
      <div className="flex flex-row justify-between items-start w-[68%] " >
        <div className="flex flex-row  w-[68%]">
          <Text as="p" className="!font-medium items-left  w-[30%]" >
           # {props?.order_id}
          </Text>
          <Heading as="h1" className="!text-green-700 items-left w-[30%] mx-auto text-left" >
          {order_stat[0]?.current_stage}
        </Heading>
        
          <Text as="p" className="!text-blue_gray-600">
            {formattedDate}
          </Text>
        </div>
        <Text as="p" className="!text-blue_gray-700">
        $ {props?.total_amount}
        </Text>
      </div>
      <div className="flex flex-row justify-start items-center mr-10 gap-2 cursor-pointer"  onClick={handleDtrails}>
        <Heading as="h2">{viewdetails}</Heading>
        <Img src="images/img_regular_arrowright.svg" alt="regular_one" className="h-[16px] w-[16px]" />
      </div>
    </div>
  );
}

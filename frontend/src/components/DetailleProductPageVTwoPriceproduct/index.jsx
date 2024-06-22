import React, { useEffect, useState } from "react";

import { Button, Img, Text } from "components";
import {useNavigate } from "react-router";
import axios from "axios";

const DetailleProductPageVTwoPriceproduct = (props) => {
  const [productData,setProductData] = useState({ })
  const [data, setData] = useState({"quantity": 1});
  const navigate = useNavigate();
  const handleChange = (e, key) => {
    const value = e.target.value;
    setData((prevData) => ({
      ...prevData,
      [key]: key === "quantity" ? Math.max(1, parseInt(value, 10) || 1) : value,
    }));
  };
  // const handleAddToCart = () => {
  //   const cartId = localStorage.getItem('cart_id');
  //   const userId = localStorage.getItem('user_id');
  //   console.log("use ID: ",userId)
  //   console.log("cart ID: ",cartId)
  //   if (!cartId || !userId) {
  //     // If cart_id or user_id is not present, navigate to /signpagevtwo
  //     navigate("/signpagevtwo");
  //   } else {
  //     // If both cart_id and user_id are present, navigate to /CartpagevTwo
  //     navigate("/CartpagevTwo", { state: { data: props?.productData } });
  //   }
  // };
  
  const handleAddToCart = async() => {
    const cartId = localStorage.getItem('cart_id');
    const userId = localStorage.getItem('user_id');
    console.log("use ID: ",userId)
    console.log("cart ID: ",cartId)
    if (!cartId || !userId) {
      // If cart_id or user_id is not present, navigate to /signpagevtwo
      navigate("/signpagevtwo");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/cart_item/create/`, {
            "cart": cartId,
            "product": productData?.product_id,
            "quantity": data?.quantity,
            "subtotal": (data?.quantity * productData?.product_price).toFixed(2),
          }
        );
        console.log("This is response", response);
        navigate("/CartpagevTwo" );
      } catch (error) {
        // Handle error
        console.error(`Error fetching data:`, error.message);
        // You might want to store an error state or handle it as needed
      }  
      // If both cart_id and user_id are present, navigate to /CartpagevTwo
    }
  };
  // const createorder = async () => {
  //   const userId = localStorage.getItem('user_id');
  
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/api/order/create/`,
  //       {
  //         user: userId,
  //         total_amount: props?.totalCheckout,
  //       }
  //     );
  
  //     const createdOrder = response.data.order_id;
  //     console.log(createdOrder);
  
  //     let response1Data = []; // Initialize response1Data as an array
  
  //     try {
  //       const fetchPromises = props?.selectedItems.map(async (item) => {
  //         try {
  //           const response1 = await axios.post(
  //             `${process.env.REACT_APP_API_URL}/api/order_item/create/`,
  //             {
  //               order: createdOrder,
  //               user: userId,
  //               product: item?.product?.product_id,
  //               quantity: item?.quantity,
  //               sub_total: item?.subtotal,
  //             }
  //           );
  //           console.log(` data:`, response1.data);
  //           response1Data.push(response1.data); // Add each response to the array
  //         } catch (error) {
  //           console.error(`Error fetching data :`, error.message);
  //         }
  //       });
  
  //       await Promise.all(fetchPromises);
  //     } catch (error) {
  //       console.error("Error fetching new release data:", error.message);
  //     }
  
  //     return {
  //       order: createdOrder,
  //       order_item: response1Data,
  //     };
  //   } catch (error) {
  //     console.error(`Error fetching data `, error.message);
  //   }
  // }; 
  useEffect(() => {
    setProductData(props?.productData || {});
  }, [props.productData]);
  
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col justify-start mb-12 md:ml-[0] ml-[7px] w-[86%] md:w-full">
          <div className="flex flex-row gap-[38px] items-center justify-start w-[70%] md:w-full">
            <div className="flex flex-col items-center justify-start px-1 py-[5px] w-auto">
              <Text
                className="text-lg text-teal-900 w-auto"
                size="txtRobotoRomanMedium18Teal900"
              >
                Price
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-1 py-[5px] w-auto">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-teal-900 w-auto"
                size="txtRobotoRomanMedium30"
              >
                $&nbsp;{(productData?.product_price * (data?.quantity  || 1)).toFixed(2)}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center justify-between mt-3.5 w-full">
            <div className="flex flex-col items-center justify-start px-1 py-[5px] w-auto">
              <Text
                className="text-lg text-teal-900 w-auto"
                size="txtRobotoRomanMedium18Teal900"
              >
                Quantity
              </Text>
            </div>
            <div className="border border-red-100 border-solid flex flex-row gap-1 items-center justify-start px-1 py-[5px] rounded w-[150px]">
            <input
              type="number"
              className="text-xl sm:text-lg md:text-md text-teal-900 w-[130px] border border-none "
              value={data?.quantity || 1}  // Use the quantity prop or default to 1
              onChange={(e) => handleChange(e, "quantity")}
            />
          </div>


          </div>
          {/* <div className="flex flex-row gap-[23px] items-center justify-start mt-[7px] w-[79%] md:w-full">
            <Text
              className="text-lg text-teal-900"
              size="txtRobotoRomanMedium18Teal900"
            >
              {props?.delivery}
            </Text>
            <Text
              className="text-gray-800 text-lg"
              size="txtRobotoRomanRegular18Gray800"
            >
              {props?.delivery1}
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[97px] mt-3 text-gray-800 text-lg"
            size="txtRobotoRomanRegular18Gray800"
          >
            {props?.deliverylocation}
          </Text> */}
          {/* <Text
            className="md:ml-[0] ml-[97px] mt-[11px] text-lg text-teal-900"
            size="txtRobotoRomanMedium18Teal900"
          >
            {props?.availability}
          </Text> */}
          <Button onClick={handleAddToCart}
            className="border border-solid border-yellow-800 cursor-pointer font-inter font-medium h-9 leading-[normal] ml-10 md:ml-[0] mt-[41px] text-center text-sm w-64"
            shape="round"
            color="yellow_800"
            size="md"
            variant="fill"
          >
            Add To Cart
          </Button>
          {/* <div className="bg-amber-A200 border border-light_green-700 border-solid h-9 md:h-auto md:ml-[0] ml-[41px] mt-[17px] p-4 relative rounded w-64">
            <div className="absolute bg-amber-A200_cc h-9 inset-y-[0] left-[44%] my-auto rounded-[47px] w-[38%]"></div>
            <Text
              className="mt-auto mx-auto relative text-sm text-teal-900 w-auto"
              size="txtInterRegular14Teal900"
            >
              Buy Now
            </Text>
          </div> */}
        </div>
      </div>
    </>
  );
};



export default DetailleProductPageVTwoPriceproduct;

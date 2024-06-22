import React from "react";
import { Text, Img, Input } from "./..";
import { useNavigate } from "react-router";

export default function ProfileAccountDetailsNavigationside({

  
 Order="Order History",
  dashboard = "Account settings",
  dashboardOne = "Log-out",
  ...props
}

)

{
  const navigate = useNavigate();
  const handleOrder =()=>{
    navigate("/ProfileorderhistoryOne")
  }
  const handleLogout = () => {
    // Clear all items in local storage
    localStorage.clear();
    navigate('/Homepagevtwo');
    // Redirect or perform any additional logout actions as needed
    // For example, you might want to redirect the user to the login page
    // window.location.href = "/login";
  };
  
  const profile =()=>{
    navigate("/Profileaccountdetails")
  }
  return (
    <div {...props}>
      {props?.usecolor !== 1 ? (
        <div className="flex flex-row justify-start items-center w-full gap-3 p-2.5 cursor-pointer" onClick={handleOrder}>
          <Img src="images/img_regular_stack.svg" alt="regularstack" className="h-[20px] w-[20px] ml-3.5" />
          <Text as="p" className="!text-blue_gray-600">
            {Order}
          </Text>
        </div>
      ) : (
        <div
          className="flex flex-row justify-start items-center w-full gap-3 p-2.5 cursor-pointer"
          style={{ backgroundColor: '#FBAF29', color: '#FFFFFF' }}
        >
          <Img src="images/img_regular_stack.svg" alt="regularstack" className="h-[20px] w-[20px] ml-3.5" />
          <Text as="p" className="!text-white">
            {Order}
          </Text>
        </div>
      )}

      {props?.usecolor !== 0 ? (
        <div className="flex flex-row justify-start items-center w-full gap-3 p-2.5 cursor-pointer" onClick={profile}>
          <Img src="images/img_regular_stack.svg" alt="regularstack" className="h-[20px] w-[20px] ml-3.5" />
          <Text as="p" className="!text-blue_gray-600">
            {dashboard}
          </Text>
        </div>
      ) : (
        <div
          className="flex flex-row justify-start items-center w-full gap-3 p-2.5 cursor-pointer"
          style={{ backgroundColor: '#FBAF29', color: '#FFFFFF' }}
        >
          <Img src="images/img_regular_stack.svg" alt="regularstack" className="h-[20px] w-[20px] ml-3.5" />
          <Text as="p" className="!text-white">
            {dashboard}
          </Text>
        </div>
      )}
      <div className="flex flex-row justify-start items-center w-full gap-3 p-2.5 cursor-pointer" onClick={handleLogout}>
        <Img src="images/img_regular_stack.svg" alt="regularstack" className="h-[20px] w-[20px] ml-3.5" />
        <Text as="p" className="!text-blue_gray-600">
          {dashboardOne}
        </Text>
      </div>
    </div>
  );
}

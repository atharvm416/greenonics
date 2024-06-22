import React, { useState } from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import InformationPageVTwoColumnarrowdown from "components/InformationPageVTwoColumnarrowdown";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import axios from "axios";

const SignpagevTwoPage = () => {
  

  const [data, setData] = useState({
    "email": "",
          "password": "",
          "phone_no": "",
          "first_name": "",
          "last_name": ""
  });

const handleChange = (e, key) => {
  const value = e.target.value;
  console.log(key, value);
  setData((prevData) => ({
    ...prevData,
    [key]: value,
  }));
};
  const navigate = useNavigate();

  const handleLogin = async () => {
   
  
      // Handle successful login response

      navigate("/homepagevtwo")
   
  };
  const [showRegisterFields, setShowRegisterFields] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterFields(true);
  };
 
  const handleSigninClick = () => {
    setShowRegisterFields(false);
  };
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleCheckboxChange = () => {
    setKeepSignedIn(!keepSignedIn);
  };
  const handleSignin_register = async () => {
      
    if(showRegisterFields){
      if(data.password !== data.confirm_password){
        alert("password missmatched")
      }
      else{
    try {
      console.log(data?.email);
      console.log(data.first_name);
      console.log(data?.phone_no);
      console.log(data?.password);
      console.log(data?.last_name);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/create_user/`, {
          "email": data?.email,
          "password": data?.password,
          "phone_no": data?.phone_no,
          "first_name": data?.first_name,
          "last_name": data?.last_name
        }
      );
      console.log("This is response", response);
      localStorage.setItem("user_id",response.data.user.user_id)
      localStorage.setItem("cart_id",response.data.shopping_cart.cart_id)
      alert("Registration Successful");
      navigate("/homepagevtwo")
    } catch (error) {
      // Handle error
      console.error(`Error fetching data:`, error.message);
      alert("Please fill email and password correctly")
      // You might want to store an error state or handle it as needed
    }
    }
  }
    else{
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/users/login/${data.email}/${data.password}/`
        );
    
        // Handle successful login response
        console.log("Login successful:", response.data);
        localStorage.setItem('cart_id', response.data.cart.cart_id);
        localStorage.setItem('user_id', response.data.user.user_id);
        navigate("/homepagevtwo")
      } catch (error) {
        // Handle login error
        console.error("Login error:", error.message);
        alert("Incorrect Email or Password");
      }
    }
  };
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-roboto items-center justify-start mx-auto w-full" >
        <div className="bg-yellow-50 flex flex-col h-[126px] md:h-auto items-center justify-center sm:px-5 px-[37px] py-8 w-full"  >
          <Img
            className="h-[89px] sm:h-auto object-cover w-[307px] md:w-full"
            src="images/img_greenonicslogo.png"
            alt="greenonicslogo"
          />
        </div>
        <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start max-w-[972px] mt-[20px] mx-auto md:px-5 py-8 rounded w-full" >
          <div className="flex flex-row items-center w-[190px] justify-evenly ml-4">
          <div className="flex flex-row justify-start w-[49%]">
          <div className="flex flex-col items-center justify-start w-full pt-[5px] gap-0.5">
            
              <Text size="md" as="p" className="capitalize text-center cursor-pointer" onClick={handleSigninClick}>
             Signin
              </Text>
       
              {!showRegisterFields && <div className="h-px w-full bg-deep_orange-600" />}
          </div>
          </div>
          <div className="flex flex-row items-center w-[200px] justify-evenly">
          <div className="flex flex-col items-center justify-start w-full pt-[5px] gap-0.5">
            <div onClick={handleRegisterClick}>
              <Text size="md" as="p" className="capitalize text-center cursor-pointer">
                Register
              </Text>
            </div>
            {showRegisterFields && <div className="h-px w-[80px] bg-deep_orange-600" />}
          </div>
          </div></div>
          <div className="flex flex-col items-center justify-start w-[972px]   md:w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-auto md:w-full">
          
      {showRegisterFields && (
        <>
        <input
            type="text"
            placeholder="Enter First Name"
            value={data.first_name}
            onChange={(e) => handleChange(e, "first_name")}
            style={{ width: "100%", padding: "8px", marginBottom: "2px" }}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            value={data.last_name}
            onChange={(e) => handleChange(e, "last_name")}
            style={{ width: "100%", padding: "8px", marginBottom: "2px" }}
          />
          <input
          type="number"
          placeholder="Enter contact no"
          value={data.phone_no}
          onChange={(e) => handleChange(e, "phone_no")}
          style={{ width: "100%", padding: "8px", marginBottom: "2px" }}
        />
        </>
        )}
            <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => handleChange(e, "email")}
            style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
          />
       
    
        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => handleChange(e, "password")}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        {showRegisterFields && (
         <input
          type="password"
          placeholder="Confirm Password"
          value={data.confirm_password}
          onChange={(e) => handleChange(e, "confirm_password")}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        )}
              
              {!showRegisterFields && (
                <div className="flex flex-row font-roboto gap-4 items-start justify-between w-full">
              <div className="flex flex-row gap-1 items-center justify-start px-1 py-2 w-auto">
              <input
                    type="checkbox"
                    checked={keepSignedIn}
                    className="border border-deep_orange-400 p-2"
                    onChange={handleCheckboxChange}
                  />
                  <Text
                    className="capitalize text-deep_orange-400 text-sm w-auto"
                    size="txtRobotoLight14Deeporange400"
                  >
                    Stay Signed In
                  </Text>
                </div>
                
                {/* <div className="flex flex-col items-start justify-center px-1 py-2 w-auto">
                  <Text
                    className="capitalize text-sm text-yellow-800 underline w-auto"
                    size="txtRobotoLight14Yellow800"
                  >
                    Forget Password{" "}
                  </Text>
                </div> */}
                </div>
                )}
              
              <Button
                className="border border-solid border-yellow-800 cursor-pointer font-inter font-medium h-9 leading-[normal] text-center text-sm w-64"
                shape="round"
                color="yellow_800"
                size="md"
                onClick={handleSignin_register}
                variant="fill"
              >
                {showRegisterFields ? "Register" : "Sign In"}

              </Button>
            </div>
            
          </div>
          <div className="h-[42px] relative w-[47%] sm:w-full">
            <Line className="absolute bg-red-200 bottom-[38%] h-px inset-x-[0] mx-auto w-full" />
            <Button
              className="absolute capitalize font-medium h-full inset-[0] m-auto min-w-[157px] text-center text-lg"
              shape="square"
              color="white_A700"
              size="md"
              variant="fill"
            >
              Or continue with
            </Button>
          </div>
          <div className="flex flex-row gap-[31px] items-start justify-start w-auto">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_5296499fbfacebookfacebook.png"
              alt="5296499fbfacebo"
            />
            <div className="flex flex-col h-12 items-center justify-start w-12">
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_google.svg"
                alt="google"
               
              />
            </div>
          </div>
          <Text
            className="capitalize text-center text-sm text-teal-900 w-auto"
            size="txtRobotoLight14Teal900"
          >
            <span className="text-gray-900 font-roboto font-light">
              <>By continuing, you agree to Greenonics </>
            </span>
            <span className="text-gray-900 font-roboto text-base font-normal">
              Conditions of Use
            </span>
            <span className="text-gray-900 font-roboto font-light"> and </span>
            <span className="text-gray-900 font-roboto text-base font-normal">
              Privacy Notice
            </span>
            <span className="text-gray-900 font-roboto text-base font-normal">
              .
            </span>
          </Text>
        </div>
        <Footer1 className="flex gap-4 items-center justify-center mt-24 md:px-5 py-4 w-full" />
      </div>
    </>
  );
};

export default SignpagevTwoPage;

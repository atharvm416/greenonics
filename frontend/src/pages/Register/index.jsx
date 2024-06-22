import React, { useState } from "react";

import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";
import Footer1 from "components/Footer1";
import InformationPageVTwoColumnarrowdown from "components/InformationPageVTwoColumnarrowdown";
import InformationPageVTwoRowviewNine from "components/InformationPageVTwoRowviewNine";
import axios from "axios";

const Register = () => {
  

  const [data, setData] = useState({});

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
  
  return (
    <>
      <div className="bg-white-A700_01 flex flex-col font-roboto items-center justify-start mx-auto w-full" style={{border:'2px solid black'}}>
        <div className="bg-yellow-50 flex flex-col h-[126px] md:h-auto items-center justify-center sm:px-5 px-[37px] py-8 w-full"  style={{border:'2px solid black'}}>
          <Img
            className="h-[89px] sm:h-auto object-cover w-[307px] md:w-full"
            src="images/img_greenonicslogo.png"
            alt="greenonicslogo"
          />
        </div>
        <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start max-w-[972px] mt-[101px] mx-auto md:px-5 py-8 rounded w-full" style={{border:'2px solid black'}}>
          <div className="flex flex-row items-center w-[200px] justify-evenly ">
         
          <div className="flex flex-row justify-start w-[49%]">
          <div className="flex flex-row justify-center w-full p-0.5">
            <a href="SignpagevTwo" className="mt-[3px] mx-[75px]">
              <Text size="md" as="p" className="!text-blue_gray-500 capitalize text-center">
            signin
              </Text>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-start w-[49%]">
        <div className="flex flex-col items-center justify-start w-full pt-[5px] gap-0.5">
          <a href="#">
            <Text size="md" as="p" className="capitalize text-center">
       register
            </Text>
          </a>
          <div className="h-px w-full bg-deep_orange-600" />
        </div>
        </div>
          </div>
          
          <div className="flex flex-col items-center justify-start w-[972px]   md:w-full">
            <div className="flex flex-col gap-8 items-center justify-center w-auto md:w-full">
            <input
            type="email"
            placeholder="Enter Name"
            value={data.name}
            onChange={(e) => handleChange(e, "Enter Name")}
            style={{ width: "100%", padding: "8px", marginBottom: "2px" }}
          />
          <input
          type="password"
          placeholder="Enter contact no"
          value={data.email}
          onChange={(e) => handleChange(e, "enter contact no")}
          style={{ width: "100%", padding: "8px", marginBottom: "2px" }}
        />
            <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => handleChange(e, "email")}
            style={{ width: "100%", padding: "8px", marginBottom: "2px" }}
          />
          <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => handleChange(e, "password")}
          style={{ width: "100%", padding: "8px", marginBottom: "2px" }}
        />
              <div className="flex flex-row font-roboto  items-center justify-center w-full" >

                 
              
                <div className="flex flex-col items-center justify-center px-1 w-auto">
                  <Text
                    className="capitalize text-sm text-yellow-800 underline w-auto"
                    size="txtRobotoLight14Yellow800"
                  >
                    Forget Password{" "}
                  </Text>
                  </div>
                  </div>
              <Button
                className="border border-solid border-yellow-800 cursor-pointer font-inter font-medium h-9 leading-[normal] text-center text-sm w-64"
                shape="round"
                color="yellow_800"
                size="md"
                onClick={handleLogin}
                variant="fill"
              >
            Register
              </Button>
            </div>
          </div>
          <div className="h-[42px] relative w-[47%] sm:w-full">
            <Line className="absolute bg-red-200 bottom-[38%] h-px inset-x-[0] mx-auto w-full" />
            <Button
              className="absolute capitalize cursor-pointer font-medium h-full inset-[0] m-auto min-w-[157px] text-center text-lg"
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
                className="common-pointer h-12 w-12"
                src="images/img_google.svg"
                alt="google"
               
              />
            </div>
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="circle"
              color="light_blue_400"
              size="md"
              variant="fill"
            >
              <Img src="images/img_trash.svg" alt="trash" />
            </Button>
            <Img
              className="h-12 w-12"
              src="images/img_favorite.svg"
              alt="favorite"
            />
          </div>
          <Text
            className="capitalize text-center text-sm text-teal-900 w-auto"
            size="txtRobotoLight14Teal900"
          >
            <span className="text-gray-900 font-roboto font-light">
              <>By continuing, you agree to mom store&#39;s </>
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

export default Register;

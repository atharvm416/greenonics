import React, { useEffect, useState } from "react";

import { Text, Img, Button, Input, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileAccountDetailsGender from "../../components/ProfileAccountDetailsGender";
import ProfileAccountDetailsNavigationside from "../../components/ProfileAccountDetailsNavigationside";
import axios from "axios";
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ProfileaccountdetailsPage() {
  const [data,setData] = useState();
  const handleChange = (e, key) => {
    const value = e.target.value;
    console.log(key, value);
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('user_id');
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/users/${userId}/`
        );
        //console.log(`New Release ${productId} data:`, response.data);
        console.log("response",response.data);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching data `, error.message);
      }
  
     
    }
  
    fetchData();
  }, []);

  const updateprofile = async () => {
    try {
      const userId = localStorage.getItem('user_id');
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/users/updatedetail/${userId}/`, {
         ...data
        }
      );
      console.log("This is response", response);
      alert("Profile Updated successfully");
      // localStorage.setItem("user_id",response.data.user.user_id)
      // localStorage.setItem("cart_id",response.data.shopping_cart.cart_id)
      // navigate("/homepagevtwo")
    } catch (error) {
      // Handle error
      console.error(`Error fetching data:`, error.message);
      alert("email can't be empty")
      // You might want to store an error state or handle it as needed
    }
  };

  const updatepassword = async () => {
    // Check if newpassword and confirm_password are not empty and match
    if (!data.newpassword || !data.confirm_password || data.newpassword !== data.confirm_password) {
      // Handle invalid password case
      alert("Invalid password or passwords do not match");
      return;
    }
  
    try {
      const userId = localStorage.getItem('user_id');
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/users/updatedetail/${userId}/`, {
          ...data,
          password: data.newpassword
        }
      );
      //console.log("This is response", response);
      // Update password successfully
      alert("Password updated successfully");
    } catch (error) {
      // Handle error
      console.error(`Error updating password:`, error.message);
      alert("Failed to update password");
      // You might want to store an error state or handle it as needed
    }
  };
  
  return (
    <>
     
      <div className="flex flex-col items-center justify-start w-full gap-[31px] bg-white-A700">
        <Header className="flex justify-center items-center w-full p-1 bg-yellow-50" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-between items-start w-full p-10">
          <ProfileAccountDetailsNavigationside
          className="flex flex-col items-center justify-start w-[19%] ml-[59px] py-4 border-gray-300 border border-solid bg-white-A700_02 shadow-xs rounded"
          usecolor={0}
        />

            <div className="flex flex-col items-start justify-start w-[69%] mb-8 mr-[61px] gap-6">
              <div className="flex flex-col items-center justify-start w-full pb-6 gap-6 border-gray-300 border border-solid bg-white-A700_02 rounded">
                <div className="flex flex-row justify-start w-full p-3 rounded-tl rounded-tr border-gray-300 border border-solid bg-white-A700_02">
                  <Text size="lg" as="p" className="mt-1 ml-[11px] !font-roboto capitalize">
                    Account Setting
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-[96%]">
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <div className="flex flex-row justify-start items-center w-full gap-6">
                      
                      <div className="flex flex-col items-center justify-start w-[79%] gap-4">
                        <div className="flex flex-row justify-start w-full gap-4">
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              First Name
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "first_name")}
                              value = {data?.first_name}
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              Last Name
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "last_name")}
                              value = {data?.last_name}
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-full gap-4">
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              Email
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "email")}
                              value = {data?.email }
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              country
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "country")}
                              value = {data?.country}
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start w-full gap-4">
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              Phone No
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "phone_no")}
                              value = {data?.phone_no }
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              State
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "state")}
                              value = {data?.state}
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                        </div>
                          <div className="flex flex-row justify-start w-full gap-4">
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              Postal Code
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "postal_code")}
                              value = {data?.postal_code }
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              Address
                            </Text>
                            <input
                              onChange={(e) => handleChange(e, "address")}
                              value = {data?.address}
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                        </div>
                        {/* <div className="flex flex-row justify-start w-full gap-4">
                          <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              Country/Region
                            </Text>
                            <SelectBox
                              indicator={<Img src="images/img_arrowdown_blue_gray_200.svg" alt="arrow_down" />}
                              name="country"
                              placeholder="India"
                              options={dropDownOptions}
                              className="w-full gap-px font-roboto capitalize font-light border-gray-300 border border-solid"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[24%] gap-[11px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              States
                            </Text>
                            <SelectBox
                              indicator={<Img src="images/img_arrowdown_blue_gray_200.svg" alt="arrow_down" />}
                              name="select"
                              placeholder="Gujarat"
                              options={dropDownOptions}
                              className="w-full gap-px font-roboto capitalize font-light border-gray-300 border border-solid"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[24%] pt-[3px] gap-[9px]">
                            <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                              Zip Code
                            </Text>
                            <Input
                              name="zipcode"
                              placeholder="1207"
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div onClick={updateprofile} style={{ textAlign: 'center' }}>
                  <Button
                    className="mt-4 tracking-[0.17px] font-inter capitalize font-bold !rounded-2px"
                    style={{ width: '148px', height: '48px', backgroundColor: '#FBAF29', color: '#FFFFFF' }}
                  >
                    Save Changes
                  </Button>
                </div>

                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col items-center justify-start w-[49%] pb-6 gap-6 border-gray-300 border border-solid bg-white-A700_02 rounded">
                <div className="flex flex-row justify-start w-full p-3 rounded-tl rounded-tr border-gray-300 border border-solid bg-white-A700_02">
                  <Text size="lg" as="p" className="mt-1 ml-[11px] !font-roboto capitalize">
                    Billing Address
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[90%] gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <div className="flex flex-row justify-start w-full gap-4">
                      <div className="flex flex-col items-start justify-start w-[49%] gap-[11px]">
                        <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                          First Name
                        </Text>
                        <Input
                          name="firstName"
                          placeholder="Dummy name "
                          className="w-full !text-blue_gray-500 font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] gap-[11px]">
                        <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                          Last Name
                        </Text>
                        <Input
                          name="lastName"
                          placeholder="Dummy name"
                          className="w-full !text-blue_gray-500 font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-2.5">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        <span className="text-blue_gray-900">Company Name </span>
                        <span className="text-blue_gray-500">(Optional)</span>
                      </Text>
                      <Input size="lg" onChange={(e) => handleChange(e, "first_name")} className="w-full border-gray-300 border border-solid !rounded-sm" />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        Address
                      </Text>
                      <Input
                        name="address"
                        placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
                        className="w-full !text-blue_gray-500 font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[9px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        Country
                      </Text>
                      <SelectBox
                        indicator={<Img src="images/img_arrowdown_blue_gray_200.svg" alt="arrow_down" />}
                        name="country"
                        placeholder="Bangladesh"
                        options={dropDownOptions}
                        className="w-full gap-px !text-blue_gray-500 font-roboto capitalize font-light border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[9px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        Region/State
                      </Text>
                      <SelectBox
                        indicator={<Img src="images/img_arrowdown_blue_gray_200.svg" alt="arrow_down" />}
                        name="select_one"
                        placeholder="Select..."
                        options={dropDownOptions}
                        className="w-full gap-px !text-blue_gray-300 border-gray-300 border border-solid"
                      />
                    </div>
                    <div className="flex flex-row justify-start w-full gap-4">
                      <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                        <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                          City
                        </Text>
                        <SelectBox
                          indicator={<Img src="images/img_arrowdown_blue_gray_200.svg" alt="arrow_down" />}
                          name="city"
                          placeholder="Gandhinagar"
                          options={dropDownOptions}
                          className="w-full gap-px border-gray-300 border border-solid"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] pt-[3px] gap-[9px]">
                        <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                          Zip Code
                        </Text>
                        <Input
                          name="zipcode"
                          placeholder="1207"
                          className="w-full border-gray-300 border border-solid !rounded-sm"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        Email
                      </Text>
                      <a
                        href="#"
                        className="flex justify-center items-center w-[432px] h-[44px] pl-4 pr-[35px] py-[13px] border-gray-300 border border-solid bg-white-A700_02 rounded-sm"
                      >
                        <Text as="p" className="!text-blue_gray-500 !font-roboto capitalize !font-light">
                          kevin12345@gmail.com
                        </Text>
                      </a>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        Phone Number
                      </Text>
                      <Input
                        name="phoneNumber"
                        placeholder="+1-202-555-0118"
                        className="w-full !text-blue_gray-500 font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                      />
                    </div>
                  </div>
                  <Button className="tracking-[0.17px] font-inter capitalize font-bold min-w-[148px]">
                    Save Changes
                  </Button>
                </div>
              </div> */}
              <div className="flex flex-col items-center justify-start w-full pb-6 gap-6 border-gray-300 border border-solid bg-white-A700_02 rounded">
                <Input
                  size="xl"
                  name="password"
                  placeholder="Change Password"
                  className="w-full !text-gray-900_01 rounded-tl rounded-tr font-roboto capitalize font-medium border-gray-300 border border-solid"
                />
                <div className="flex flex-col items-start justify-start w-[98%] gap-6">
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    {/* <div className="flex flex-col items-start justify-start w-[98%] gap-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        Current Password
                      </Text>
                      <Input
                        size="lg"
                        name="password"
                        suffix={<Img src="images/img_regular_eye.svg" alt="Regular/Eye" />}
                        className="w-full gap-[35px] border-gray-300 border border-solid rounded-sm"
                      />
                    </div> */}
                    <div className="flex flex-col items-start justify-start w-[98%] gap-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        New Password
                      </Text>
                      <input
                      type="password"
                              onChange={(e) => handleChange(e, "newpassword")}
                              value = {data?.newpassword }
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[98%] gap-[11px]">
                      <Text size="md" as="p" className="!text-blue_gray-900 !font-roboto capitalize">
                        Confirm Password
                      </Text>
                      <input
                      type="password"
                              onChange={(e) => handleChange(e, "confirm_password")}
                              value = {data?.confirm_password }
                              className="w-full font-roboto capitalize font-light border-gray-300 border border-solid !rounded-sm"
                            />
                    </div>
                  </div>
                  <div onClick={updatepassword} style={{ textAlign: 'center' }}>
                  <Button
                    className="mt-4 tracking-[0.17px] font-inter capitalize font-bold !rounded-2px"
                    style={{ width: '148px', height: '48px', backgroundColor: '#FBAF29', color: '#FFFFFF' }}
                  >
                    Change&nbsp;Password
                  </Button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full p-4 bg-teal-900" />
        {/* <ProfileAccountDetailsGender className="flex" />
        <div className="flex flex-row justify-start items-center w-[18%] gap-2.5">
          <div className="flex flex-col items-center justify-center h-[16px] w-[16px] p-[3px] border-red-900 border border-solid bg-white-A700_01 rounded-sm">
            <Img src="images/img_icon.svg" alt="icon_three" className="h-[7px] mt-px mb-0.5" />
          </div>
          <Text as="p" className="!text-black-900 !font-montserrat">
            Get regular updates on your email
          </Text>
        </div> */}
      </div>
    </>
  );
}

import React, { useState } from "react";

import { Text } from "../../components";
import Header from "../../components/Header";
import ProfileAccountDetailsNavigationside from "../../components/ProfileAccountDetailsNavigationside";
import ProfileOrderHistoryOneList from "../../components/ProfileOrderHistoryOneList";
import ProfileOrderHistoryOnePagination from "../../components/ProfileOrderHistoryOnePagination";
import { useEffect } from "react";
import axios from "axios";

export default function ProfileorderhistoryOnePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this value as needed 
  const [order,setOrder] = useState({});

  const [yourItemList,setyourItemList] = useState([
  ]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = yourItemList.slice(indexOfFirstItem, indexOfLastItem);
  
  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('user_id');
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/order/bysuer/${userId}/`
        );
        //console.log(`New Release ${productId} data:`, response.data);
        //console.log("response",response.data);
        setyourItemList(response.data);
      } catch (error) {
        console.error(`Error fetching data `, error.message);
      }
  
     
    }
  
    fetchData();
  }, []);
  return (
    <>
      
      <div className="flex flex-col items-center justify-start w-full gap-8 bg-white-A700">
        <Header className="flex justify-center items-center w-full p-1 bg-yellow-50" />
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-between items-start w-full p-10">
            <ProfileAccountDetailsNavigationside className="flex flex-col items-center justify-start w-[19%] ml-[59px] py-4 border-gray-300 border border-solid bg-white-A700_02 shadow-xs rounded" usecolor={1}/>
            <div className="flex flex-col items-center justify-start w-[69%] mb-8 mr-[61px] pb-6 border-gray-300 border border-solid bg-white-A700_02 rounded">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-start w-full p-[17px]">
                  <Text as="p" className="ml-1.5 uppercase !font-medium">
                    Order HIstory
                  </Text>
                </div>
                <div className="flex flex-row justify-between w-full p-[11px] border-gray-300 border border-solid bg-gray-100">
                  <div className="flex flex-row justify-between w-[61%] ml-3">
                    <div className="flex flex-row justify-center">
                      <Text size="xs" as="p" className="!text-blue_gray-700 uppercase">
                        Order ID
                      </Text>
                      <Text size="xs" as="p" className="ml-[91px] !text-blue_gray-700 uppercase">
                        Status
                      </Text>
                      <Text size="xs" as="p" className="ml-[130px] !text-blue_gray-700 uppercase">
                        Date
                      </Text>
                    </div>
                    <Text size="xs" as="p" className="!text-blue_gray-700 uppercase">
                      Total
                    </Text>
                  </div>
                  <Text size="xs" as="p" className="mr-[84px] !text-blue_gray-700 uppercase">
                    Action
                  </Text>
                </div>
              </div>
              <div className="flex flex-col w-full mt-3 gap-px">
                {currentItems.map((item, index) => (
                  <ProfileOrderHistoryOneList
                    key={index}
                    yourItemList={yourItemList}
                    {...item} // Pass item data to the component
                    className="flex flex-row justify-between w-full p-3"
                  />
                ))}
              </div>
              <ProfileOrderHistoryOnePagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={yourItemList.length}
                
                onPageChange={(page) => setCurrentPage(page)}
                className="flex flex-row justify-start w-[41%] mt-6 gap-5"
              />
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full p-4 bg-teal-900">
          <div className="flex flex-col items-center justify-center w-full mt-1 gap-[15px] mx-auto max-w-[1441px]">
            <div className="flex flex-col items-center justify-start w-[61%] gap-[18px]">
              <a href="#">
                <Text as="p" className="!text-white-A700_02 !font-roboto capitalize text-center !font-light">
                  <span className="text-white-A700_02 text-base font-normal">Refund policy </span>
                  <span className="text-white-A700_02"></span>
                  <span className="text-white-A700_02 text-base font-normal">Shipping policy </span>
                  <span className="text-white-A700_02"></span>
                  <span className="text-white-A700_02 text-base font-normal">Privacy policy </span>
                  <span className="text-white-A700_02"></span>
                  <span className="text-white-A700_02 text-base font-normal">Terms of service</span>
                </Text>
              </a>
              <div className="h-px w-full bg-white-A700" />
            </div>
            <div className="flex flex-row justify-center w-full p-2.5">
              <Text size="md" as="p" className="mt-0.5 !text-white-A700 !font-roboto capitalize text-center">
                Copyright © 2024 coherent Business Solutions .<br />
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

import React from "react";
import { Button, Img, Text } from "components";
import { Heading } from "components/Heading";

export default function ProfileOrderHistoryOnePagination({
  currentPage,
  onPageChange,
  totalItems,
  itemsPerPage,
  ...props
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div {...props}>
      <Button
        color="deep_orange_A200"
        size="xs"
        variant="outline"
        shape="circle"
        className="w-[40px]"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ visibility: currentPage === 1 ? "hidden" : "visible" }}
      >
        <Img src="images/img_arrow_button.svg" />
      </Button>
      <div className="flex flex-row justify-start w-[40%] gap-2"  >
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <Text 
              key={pageNumber}
              as="p"
              className={`flex justify-center items-center h-[40px] w-[40px] text-center border-gray-300 border border-solid rounded-[50%] ${
                currentPage === pageNumber ? 'bg-blue-500 text-white cursor-pointer' : 'bg-white-A700_02'
              }`} 
              onClick={() => handlePageChange(pageNumber)}
              style={{ cursor: currentPage === pageNumber ? "default" : "pointer", }}
            >
              {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
            </Text>
          );
        })}
      </div>
      <Button
        color="deep_orange_A200"
        size="xs"
        variant="outline"
        shape="circle"
        className="w-[40px] "
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ visibility: currentPage === totalPages ? "hidden" : "visible" }}
      >
        <Img src="images/img_arrow_button.svg" />
      </Button>
    </div>
  );
}

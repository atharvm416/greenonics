import React from "react";
import {useNavigate } from "react-router";
import { Button, Input, Line, Text } from "components";

const Footer = (props) => {
  const navigate = useNavigate();
  const handleFooterClick = () => {
    console.log("I am being clicked");
      navigate("/footeroption");
  };
  return (
    <>
      <footer className={props.className}>
        <div className="md:h-[1151px] sm:h-[713px] h-[588px] relative w-full">
          <div className="bg-teal-900 flex flex-col gap-8 h-full items-center justify-start m-auto py-8 w-full">
        
            <div className="flex flex-col gap-[31px] items-center justify-start w-[61%] md:w-full">
              <Line className="bg-white-A700 h-px w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[90px] items-start justify-start max-w-[845px] w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="bg-teal-900 capitalize justify-center pr-[3px] py-1.5 text-gray-100 text-lg w-auto"
                    size="txtRobotoRomanSemiBold18"
                  >
                    <>About</>
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[82px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      About Us
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[160px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Terms & Conditions</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[209px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Loyalty & Referral Program</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[119px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Privacy Policy</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[133px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Shipping Policy</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[118px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Refund Policy</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[142px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Terms of Service</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[118px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Where to Buy</>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="bg-teal-900 capitalize justify-center py-1.5 text-gray-100 text-lg w-auto"
                    size="txtRobotoRomanRegular18Gray100"
                  >
                    Customers Service
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[103px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Contact Us</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[76px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Delivery</>
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[219px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      <>Frequently Asked Questions</>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="bg-teal-900 capitalize justify-center py-1.5 text-gray-100 text-lg w-auto"
                    size="txtRobotoRomanRegular18Gray100"
                  >
                    Resources
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[48px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      Blog
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[98px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      Community
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[106px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      Accessibility
                    </Button>
                    <Button
                      className="!text-gray-100 capitalize cursor-pointer font-roboto min-w-[106px] text-base text-center"
                      shape="square"
                      color="teal_900"
                      size="xs"
                      variant="fill"
                      onClick={handleFooterClick} 
                    >
                      Sales & Offers
                    </Button>
                  </div>
                </div>
              </div>
              <Line className="bg-white-A700_01 h-px w-full" />
            </div>
          </div>
          <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-2.5 w-full">
            <Text
              className="capitalize mt-0.5 text-base text-center text-white-A700_01"
              size="txtRobotoRegular16WhiteA70001"
            >
              <>Copyright © 2024 coherent Business Solutions .</>
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;

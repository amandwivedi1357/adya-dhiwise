import React from "react";
import { Heading, Img, Text } from "./..";

export default function Header1({ ...props }) {
  return (
    <header {...props}>
      <div className="w-full">
        <div className="p-7 sm:p-5 shadow-xs bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full gap-1.5 mx-auto md:p-5 max-w-[1189px]">
            <ul className="flex md:flex-col self-stretch items-center ml-[5px] gap-[217px] md:gap-5">
              <li>
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <Img
                    src="images/img_logo_removebg_preview.png"
                    alt="logoremovebg"
                    className="w-[17%] md:w-full object-cover"
                  />
                  <div className="flex sm:flex-col self-end justify-between w-[69%] md:w-full gap-5">
                    <a href="#" className="w-auto bg-white-A700">
                      <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                        Solutions
                      </Text>
                    </a>
                    <a href="#">
                      <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                        services
                      </Text>
                    </a>
                    <a href="#">
                      <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                        Products
                      </Text>
                    </a>
                    <a href="#">
                      <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                        sectors
                      </Text>
                    </a>
                    <a href="#">
                      <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                        Partners
                      </Text>
                    </a>
                    <a href="#">
                      <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                        About Us
                      </Text>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Img src="images/img_search.svg" alt="search_one" className="self-end h-[24px] md:w-[24px]" />
              </li>
            </ul>
            <Heading size="xs" as="p" className="flex flex-row justify-start tracking-[0.25px] capitalize">
              <span className="text-black-900_e5">Advanced </span>
              <span className="text-deep_orange-700_07">Energy Management</span>
            </Heading>
          </div>
        </div>
      </div>
    </header>
  );
}

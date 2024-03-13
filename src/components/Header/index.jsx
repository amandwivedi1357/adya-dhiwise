import React from "react";
import { Img, Text, Heading } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="w-full">
        <div className="flex md:flex-col justify-between items-center gap-5 p-7 sm:p-5 shadow-xs bg-white-A700">
          <div className="flex md:flex-col justify-between items-center w-[80%] md:w-full ml-[70px] gap-5">
            <div className="flex flex-col items-center w-[18%] md:w-full gap-1.5">
              <Img
                src="images/img_logo_removebg_preview.png"
                alt="logoremovebg"
                className="self-stretch object-cover"
              />
              <Heading size="xs" as="p" className="flex tracking-[0.25px] capitalize">
                <span className="text-black-900_e5">Advanced </span>
                <span className="text-deep_orange-700_07">Energy Management</span>
              </Heading>
            </div>
            <ul className="flex md:flex-col justify-center gap-11">
              <li>
                <a href="#">
                  <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                    Solutions
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                    services
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                    Products
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                    sectors
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                    Partners
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="tracking-[0.16px] capitalize !font-medium">
                    About Us
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px] mr-[123px]" />
        </div>
      </div>
    </header>
  );
}

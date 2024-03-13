import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import Header1 from "../../components/Header1";

export default function AllSolutionsPagePage() {
  return (
    <>
      <Helmet>
        <title>Aadya</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[5319px] md:pb-5 bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="self-stretch h-[634px] relative">
            <div className="justify-center h-[634px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_rectangle_21758_634x1440.png"
                alt="imageoneone_one"
                className="justify-center h-[634px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center justify-center w-max h-max gap-2.5 left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Heading size="5xl" as="h1" className="tracking-[0.25px]">
                  Solutions{" "}
                </Heading>
                <div className="flex justify-center items-center w-full gap-2.5 mx-auto md:p-5 max-w-[175px]">
                  <Img src="images/img_home.svg" alt="homeoneoneone" className="h-[29px] w-[29px]" />
                  <Text size="s" as="p" className="tracking-[0.50px] text-center">
                    Home / Solutions
                  </Text>
                </div>
              </div>
            </div>
            <Header1 className="w-full top-[4%] right-0 left-0 m-auto bg-cyan-900 absolute" />
          </div>
          <div className="flex flex-col w-[36%] md:w-full mt-[119px] gap-[11px]">
            <Heading size="4xl" as="h2" className="tracking-[1.00px]">
              Solutions We Offer
            </Heading>
            <Text size="s" as="p" className="tracking-[0.50px] !leading-[29px]">
              Seamlessly integrated, easy to rollout and cost effective solution which impacts business.
            </Text>
          </div>
          <div className="justify-center w-full mt-[84px] gap-[41px] grid-cols-3 mx-auto md:grid-cols-[1fr] md:p-5 grid max-w-[1240px]">
            <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col w-full mt-[3px]">
                <Img src="images/img_group_49854.svg" alt="image" className="h-[34px]" />
                <div className="flex items-center mt-[27px] gap-[9px]">
                  <Heading as="h2" className="!text-black-900 tracking-[0.25px]">
                    AMI{" "}
                  </Heading>
                  <Text size="xs" as="p" className="!text-black-900 tracking-[0.25px] !font-inter">
                    ( Advance Metering Infrastructure )
                  </Text>
                </div>
                <Text size="xs" as="p" className="mt-[19px] tracking-[0.25px]">
                  As pioneers we offer a comprehensive plug-and-play smart metering solutions.
                </Text>
                <div className="flex items-center mt-[42px] gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore{" "}
                  </Text>
                  <Img src="images/img_right_arrow.svg" alt="explore_two" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col w-full mt-[3px]">
                <Img src="images/img_group.svg" alt="imageoneone_one" className="h-[37px]" />
                <Heading as="h3" className="mt-[26px] !text-black-900 tracking-[0.25px]">
                  Smart Prepayment
                </Heading>
                <Text size="xs" as="p" className="mt-[17px] tracking-[0.25px]">
                  Curtail your revenue leakages by upgrading your legacy prepayment system with Smart prepayment
                </Text>
                <div className="flex items-center mt-[17px] gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore
                  </Text>
                  <Img src="images/img_right_arrow.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex w-full p-[30px] sm:p-5 border-deep_orange-700_07 border border-solid bg-deep_orange-700 rounded-[10px]">
              <div className="flex flex-col w-full mt-1 gap-[18px]">
                <Img src="images/img_vector_white_a700.svg" alt="vectoroneone" className="h-[41px]" />
                <Heading as="h4" className="ml-[7px] !text-white-A700 tracking-[0.25px]">
                  Digi2smart
                </Heading>
                <Text size="xs" as="p" className="ml-[7px] !text-white-A700_e5_03 tracking-[0.25px]">
                  We upgrade existing meters to smart systems, saving both utilities and consumers money.
                </Text>
                <div className="flex items-center ml-[7px] gap-3">
                  <Text as="p" className="self-end !text-white-A700 tracking-[1.00px] capitalize !font-medium">
                    Explore{" "}
                  </Text>
                  <Img src="images/img_right_arrow_white_a700.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                <div className="flex flex-col mt-[3px] gap-[19px]">
                  <Img
                    src="images/img_vector_deep_orange_700_41x41.svg"
                    alt="vectoroneone"
                    className="h-[41px] w-[41px]"
                  />
                  <Heading as="h5" className="!text-black-900 tracking-[0.25px]">
                    RF Mesh Network
                  </Heading>
                  <Text size="xs" as="p" className="tracking-[0.25px]">
                    Scalable and secured networks which enable self-healing and get your alerts, notifications in
                    seconds.
                  </Text>
                  <div className="flex items-center gap-3">
                    <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                      Explore
                    </Text>
                    <Img src="images/img_right_arrow.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[26px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col w-full mb-[5px] gap-[19px]">
                <Img
                  src="images/img_vector_deep_orange_700_48x48.svg"
                  alt="vectoroneone"
                  className="h-[48px] w-[48px]"
                />
                <Heading as="h6" className="!text-black-900 tracking-[0.25px]">
                  Interoperability
                </Heading>
                <Text size="xs" as="p" className="tracking-[0.25px]">
                  Connect any Smart Meter, Digital Meter, any communication with one Head End System
                </Text>
                <div className="flex items-center gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore
                  </Text>
                  <Img src="images/img_right_arrow.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col w-full mt-[3px]">
                <Img src="images/img_group_deep_orange_700.svg" alt="imageoneone_one" className="h-[47px]" />
                <Heading as="h4" className="mt-[15px] !text-black-900 tracking-[0.25px]">
                  Microgrid
                </Heading>
                <Text size="xs" as="p" className="mt-[18px] tracking-[0.25px]">
                  Deploy, monitor and manage your zero emission resources.
                </Text>
                <div className="flex items-center mt-[41px] gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore{" "}
                  </Text>
                  <Img src="images/img_right_arrow.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full p-2.5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col items-start w-full mt-[23px] mb-5 gap-[19px]">
                <Img src="images/img_vector_deep_orange_700_38x40.svg" alt="vectoroneone" className="h-[38px]" />
                <div className="flex items-center gap-2.5">
                  <Heading as="h4" className="!text-black-900 tracking-[0.25px]">
                    DERM
                  </Heading>
                  <Text size="xs" as="p" className="!text-black-900 tracking-[0.25px] !font-inter">
                    ( Distributed Energy Resource Mgmt )
                  </Text>
                </div>
                <Text size="xs" as="p" className="w-[93%] md:w-full tracking-[0.25px]">
                  Helping operators, C&I consumers control energy costs, reduce carbon emissions, & ensure more reliable
                  electricity.
                </Text>
                <div className="flex items-center gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore{" "}
                  </Text>
                  <Img src="images/img_right_arrow.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[27px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col w-full mb-1 gap-[18px]">
                <Img src="images/img_group_50217.svg" alt="imageoneone_one" className="h-[50px] w-[50px]" />
                <Heading as="h4" className="!text-black-900 tracking-[0.25px]">
                  Distributed Intelligence
                </Heading>
                <Text size="xs" as="p" className="tracking-[0.25px]">
                  Distributed Intelligence (DI) powers the next-gen smart grid with a secure, open platform and edge
                  computing.
                </Text>
                <div className="flex items-center gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore
                  </Text>
                  <Img src="images/img_right_arrow.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-end w-full p-6 sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col items-start w-full gap-[18px] my-2">
                <Img src="images/img_probability.svg" alt="probabilityone" className="h-[45px] w-[45px]" />
                <div className="flex items-center gap-[11px]">
                  <Heading as="h4" className="!text-black-900 tracking-[0.25px]">
                    DTA{" "}
                  </Heading>
                  <Text size="xs" as="p" className="!text-black-900 tracking-[0.25px] !font-inter">
                    ( Distributed Transformer Automation )
                  </Text>
                </div>
                <Text size="xs" as="p" className="w-[96%] md:w-full tracking-[0.25px]">
                  Our system empowers you with data for better asset management, energy auditing, outage prediction, and
                  more.
                </Text>
                <div className="flex items-center gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore{" "}
                  </Text>
                  <Img src="images/img_right_arrow.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col w-full mt-[5px]">
                <Img src="images/img_group_deep_orange_700_33x44.svg" alt="imageoneone_one" className="h-[33px]" />
                <Heading as="h4" className="mt-7 !text-black-900 tracking-[0.25px]">
                  Net Metering
                </Heading>
                <Text size="xs" as="p" className="mt-[17px] tracking-[0.25px]">
                  Our solution helps in monitoring the generation, efficiency and calculating correct credits for
                  utilised units.
                </Text>
                <div className="flex items-center mt-[17px] gap-3">
                  <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                    Explore
                  </Text>
                  <Img src="images/img_right_arrow_black_900.svg" alt="rightarrowone" className="h-[32px] w-[31px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-[90px]">
            <div className="h-[404px] relative">
              <Img
                src="images/img_rectangle_21843.png"
                alt="imageoneoneone"
                className="justify-center h-[404px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col items-center w-[86%] bottom-[14%] right-0 left-0 m-auto absolute">
                <div className="flex md:flex-col self-stretch justify-center items-start">
                  <div className="flex flex-col w-[27%] md:w-full gap-3.5">
                    <Text size="xl" as="p" className="!text-white-A700 tracking-[0.03px] !font-medium">
                      Address
                    </Text>
                    <a href="#">
                      <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                        Plot no.61, Nagarjuna hills, Punjagutta, Hyderabad - 500 082, Telangana, India
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-col items-start ml-[97px] gap-3.5">
                    <Text size="xl" as="p" className="!text-white-A700 tracking-[0.03px]">
                      Contact Details
                    </Text>
                    <a href="#">
                      <Text as="p" className="!text-white-A700_bc tracking-[0.04px] capitalize">
                        +91 40 4857 9530
                      </Text>
                    </a>
                  </div>
                  <div className="flex sm:flex-col justify-between items-start ml-[130px] gap-5 flex-1">
                    <div className="flex flex-col items-start gap-4">
                      <Text size="xl" as="p" className="!text-white-A700 tracking-[0.03px]">
                        Email Id
                      </Text>
                      <Text as="p" className="!text-white-A700_bc tracking-[0.04px] capitalize">
                        info@adyasmartmetering.com
                      </Text>
                    </div>
                    <div className="flex flex-col w-[48%] sm:w-full gap-[13px]">
                      <Text size="xl" as="p" className="!text-white-A700 tracking-[0.03px]">
                        Quick Links
                      </Text>
                      <div>
                        <div className="flex flex-col gap-[9px]">
                          <div className="flex justify-between gap-5">
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                Home
                              </Text>
                            </a>
                            <div className="flex justify-center gap-[30px]">
                              <a href="#">
                                <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                  solutions
                                </Text>
                              </a>
                              <a href="#">
                                <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                  Services
                                </Text>
                              </a>
                            </div>
                          </div>
                          <div className="flex justify-between gap-5">
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                About Us
                              </Text>
                            </a>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                Products
                              </Text>
                            </a>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                Sectors
                              </Text>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[60px] w-[12%] mt-[3px] bg-white-A700" />
                <Text size="lg" as="p" className="mt-[23px] !text-white-A700 tracking-[0.03px] !font-nunito">
                  @2023Adya - Website by Rayformula
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

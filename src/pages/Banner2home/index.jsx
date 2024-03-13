import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Text, Button, Input } from "../../components";
import Header1 from "../../components/Header1";

export default function Banner2homePage() {
  return (
    <>
      <Helmet>
        <title>Aadya</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full py-[29px] sm:py-5 bg-white-A700">
        <Header1 className="bg-cyan-900" />
        <div className="mb-[5px]">
          <div className="flex flex-col">
            <div>
              <div className="flex flex-col">
                <div className="h-[873px] z-[1] relative">
                  <Img
                    src="images/img_rectangle_21985.png"
                    alt="image"
                    className="justify-center h-[873px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start w-[76%] gap-5 left-[7%] top-[20%] m-auto absolute">
                    <Heading size="4xl" as="h1" className="tracking-[0.25px] capitalize !leading-[67px]">
                      Enabling Sustainable Energy Management Solutions for Utilities, Commercial & Industries sectors
                    </Heading>
                    <Text size="xl" as="p" className="tracking-[0.50px]">
                      Adya Smart metering solutions
                    </Text>
                    <Button
                      color="deep_orange_700_06"
                      size="sm"
                      variant="fill"
                      className="sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 min-w-[151px] rounded"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-col items-center mt-[-57px] ml-[100px] gap-[25px]">
                  <Heading size="4xl" as="h2" className="!text-black-900 tracking-[1.00px]">
                    Solutions We Offer
                  </Heading>
                  <Img src="images/img_arrow.svg" alt="arrow_one" className="h-[29px] w-[29px]" />
                </div>
              </div>
            </div>
            <Text size="s" as="p" className="w-[38%] md:w-full mt-[11px] ml-[100px] tracking-[0.50px] !leading-[29px]">
              Seamless integrated, easy to rollout and cost-effective solutions which impacts the operational
              efficiency.
            </Text>
            <div className="justify-center w-full mt-[68px] gap-[41px] grid-cols-3 mx-auto md:grid-cols-[1fr] md:p-5 grid max-w-[1240px]">
              <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                <div className="flex flex-col w-full mt-[3px] gap-[19px]">
                  <Img src="images/img_group_49854.svg" alt="image" className="h-[39px]" />
                  <div className="flex items-center gap-3">
                    <Heading as="h3" className="!text-black-900 tracking-[0.25px]">
                      AMI
                    </Heading>
                    <Text size="xs" as="p" className="!text-black-900 tracking-[0.25px] !font-inter">
                      ( Advance Metering Infrastructure )
                    </Text>
                  </div>
                  <Text size="xs" as="p" className="tracking-[0.25px]">
                    As industry leaders, we offer a comprehensive, plug-and-play smart metering solution.
                  </Text>
                  <div className="flex items-center gap-3">
                    <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                      Explore
                    </Text>
                    <Img src="images/img_right_arrow.svg" alt="explore_two" className="h-[32px] w-[31px]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                <div className="flex flex-col w-full mt-[3px]">
                  <Img src="images/img_group.svg" alt="image" className="h-[38px]" />
                  <Heading as="h4" className="mt-[25px] !text-black-900 tracking-[0.25px]">
                    Smart Prepayment
                  </Heading>
                  <Text size="xs" as="p" className="mt-[17px] tracking-[0.25px]">
                    Introducing our advanced Smart Prepaid System for Commercial, Industrial, and Home use.{" "}
                  </Text>
                  <div className="flex items-center mt-[17px] gap-3">
                    <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                      Explore
                    </Text>
                    <Img src="images/img_right_arrow.svg" alt="rightarrow_one" className="h-[32px] w-[31px]" />
                  </div>
                </div>
              </div>
              <div className="flex w-full p-[30px] sm:p-5 border-deep_orange-700_07 border border-solid bg-deep_orange-700 rounded-[10px]">
                <div className="flex flex-col w-full mt-1 gap-[18px]">
                  <Img src="images/img_vector_white_a700.svg" alt="vector_one" className="h-[41px]" />
                  <Heading as="h5" className="ml-[7px] !text-white-A700 tracking-[0.25px]">
                    Digi2smart
                  </Heading>
                  <Text size="xs" as="p" className="ml-[7px] !text-white-A700_e5_03 tracking-[0.25px]">
                    Upgrade your existing Digital Meter to Smart Meter or smart prepayment at fractional cost
                  </Text>
                  <div className="flex items-center ml-[7px] gap-3">
                    <Text as="p" className="self-end !text-white-A700 tracking-[1.00px] capitalize !font-medium">
                      Explore{" "}
                    </Text>
                    <Img
                      src="images/img_right_arrow_white_a700.svg"
                      alt="rightarrow_one"
                      className="h-[32px] w-[31px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                <div className="flex flex-col w-full mt-[3px]">
                  <Img
                    src="images/img_vector_deep_orange_700_41x41.svg"
                    alt="vector_one"
                    className="h-[41px] w-[41px]"
                  />
                  <Heading as="h6" className="mt-[19px] !text-black-900 tracking-[0.25px]">
                    RF Mesh Solution
                  </Heading>
                  <Text size="xs" as="p" className="mt-[21px] tracking-[0.25px]">
                    Wireless networks are vital for IoT growth and business data flow.
                  </Text>
                  <div className="flex items-center mt-[41px] gap-3">
                    <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                      Explore
                    </Text>
                    <Img src="images/img_right_arrow.svg" alt="rightarrow_one" className="h-[32px] w-[31px]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full p-[26px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                <div className="flex flex-col w-full mb-[5px] gap-[19px]">
                  <Img
                    src="images/img_vector_deep_orange_700_48x48.svg"
                    alt="vector_one"
                    className="h-[48px] w-[48px]"
                  />
                  <Heading as="h4" className="!text-black-900 tracking-[0.25px]">
                    Interoperability
                  </Heading>
                  <Text size="xs" as="p" className="tracking-[0.25px]">
                    Struggling with multiple Smart Meter brands and systems? We have the ideal solution for you!
                  </Text>
                  <div className="flex items-center gap-3">
                    <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                      Explore
                    </Text>
                    <Img src="images/img_right_arrow.svg" alt="rightarrow_one" className="h-[32px] w-[31px]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                <div className="flex flex-col w-full mt-[3px]">
                  <Img
                    src="images/img_group_deep_orange_700.svg"
                    alt="image"
                    className="flex justify-start h-[47px] w-auto"
                  />
                  <Heading as="h4" className="mt-[15px] !text-black-900 tracking-[0.25px]">
                    Microgrid
                  </Heading>
                  <Text size="xs" as="p" className="mt-[17px] tracking-[0.25px]">
                    Deploy, monitor and manage your more zero emission energy resources.
                  </Text>
                  <div className="flex items-center mt-[42px] gap-3">
                    <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                      Explore{" "}
                    </Text>
                    <Img src="images/img_right_arrow.svg" alt="rightarrow_one" className="h-[32px] w-[31px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[90px] ml-[100px]">
              <div className="flex md:flex-col justify-end items-center gap-[175px]">
                <div className="flex flex-col items-stretch w-[40%] md:w-full z-[1]">
                  <Heading size="4xl" as="h1" className="!text-black-900 tracking-[1.00px]">
                    Services We Offer
                  </Heading>
                  <Text size="s" as="p" className="mt-[11px] tracking-[0.25px] !leading-[30px]">
                    Our services help utilities, solution providers and system integrators to rollout projects faster
                    and cost effectively.
                  </Text>
                  <Input
                    color="gray_500_77_03"
                    size="md"
                    shape="round"
                    name="right_arrow"
                    placeholder="Business Consulting"
                    prefix={<Img src="images/img_group_deep_orange_700_34x37.svg" alt="Group" />}
                    suffix={<Img src="images/img_right_arrow.svg" alt="Right Arrow" />}
                    className="w-[73%] mt-[54px] gap-[13px] sm:pr-5 tracking-[0.25px] font-inter font-medium !rounded-[5px]"
                  />
                  <div className="flex flex-col w-[73%] md:w-full mt-7 gap-7">
                    <div className="flex justify-between items-center gap-5 p-[15px] border-deep_orange-700_b2_03 border border-solid bg-deep_orange-700_07 flex-1 rounded-[5px]">
                      <div className="flex justify-center items-center ml-1 gap-[25px]">
                        <Img src="images/img_vector_white_a700_34x26.svg" alt="meter_testing" className="h-[34px]" />
                        <Text
                          as="p"
                          className="self-end !text-white-A700_e5_03 tracking-[0.25px] !font-inter !font-medium"
                        >
                          Meter Testing
                        </Text>
                      </div>
                      <Img
                        src="images/img_right_arrow_white_a700.svg"
                        alt="meter_testing"
                        className="h-[32px] w-[31px] mr-[9px]"
                      />
                    </div>
                    <div className="flex justify-between items-center gap-5 p-4 border-gray-500_77 border border-solid flex-1 rounded-[5px]">
                      <div className="flex justify-center items-center ml-[3px] gap-[17px]">
                        <Img
                          src="images/img_vector_deep_orange_700_33x34.svg"
                          alt="vector_one"
                          className="h-[33px] w-[34px]"
                        />
                        <Text as="p" className="self-end tracking-[0.25px] !font-inter !font-medium">
                          System Integrations
                        </Text>
                      </div>
                      <Img
                        src="images/img_right_arrow.svg"
                        alt="rightarrow_one"
                        className="self-start h-[32px] w-[31px]"
                      />
                    </div>
                    <div className="flex justify-center flex-1">
                      <div className="flex sm:flex-col justify-center items-start p-4 border-gray-500_77 border border-solid rounded-[5px]">
                        <Img
                          src="images/img_group_49854_deep_orange_700_01.svg"
                          alt="image"
                          className="h-[26px] sm:w-full mt-[3px]"
                        />
                        <Text as="p" className="mt-2 ml-[19px] tracking-[0.25px] !font-inter !font-medium">
                          Application Programming Interface
                        </Text>
                        <Img
                          src="images/img_right_arrow.svg"
                          alt="rightarrow_one"
                          className="h-[32px] w-[31px] sm:w-full ml-[45px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_rectangle_21987.png"
                  alt="image_one"
                  className="w-[60%] md:w-full ml-[-182px] object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-[89px] mx-auto md:p-5 max-w-[1238px]">
              <Heading size="4xl" as="h1" className="!text-black-900 tracking-[1.00px]">
                Products We Offer
              </Heading>
              <Text size="s" as="p" className="mt-4 tracking-[0.25px]">
                Enabling collection of high quality data for AMI 2.0 rollouts.
              </Text>
              <div className="flex md:flex-col mt-[70px] gap-10">
                <div className="flex justify-center w-full p-[31px] sm:p-5 border-deep_orange-700 border border-solid bg-deep_orange-700 rounded-[10px]">
                  <div className="flex flex-col w-full mt-[3px] gap-[19px]">
                    <Img src="images/img_group_white_a700.svg" alt="measurement" className="h-[41px]" />
                    <Heading as="h4" className="!text-white-A700 tracking-[0.25px]">
                      Measurement Device
                    </Heading>
                    <Text size="xs" as="p" className="!text-white-A700_e5_03 tracking-[0.25px]">
                      High precision devices seamlessly integrated and supports multiple communications 4G/NBIoT/RF
                      Mesh.
                    </Text>
                    <div className="flex items-center gap-3">
                      <Text as="p" className="self-end !text-white-A700 tracking-[1.00px] capitalize !font-medium">
                        Explore{" "}
                      </Text>
                      <Img
                        src="images/img_right_arrow_white_a700.svg"
                        alt="explore_two"
                        className="h-[32px] w-[31px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                  <div className="flex flex-col w-full mt-[3px] gap-[17px]">
                    <Img
                      src="images/img_vector_deep_orange_700_45x46.svg"
                      alt="vector_one"
                      className="h-[45px] w-[46px]"
                    />
                    <Heading as="h4" className="!text-black-900 tracking-[0.25px]">
                      Communication Network
                    </Heading>
                    <Text size="xs" as="p" className="tracking-[0.25px]">
                      Choice of highly intelligent comm. networks customised for every sector based on use case and
                      topography.
                    </Text>
                    <div className="flex items-center gap-3">
                      <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                        Explore
                      </Text>
                      <Img src="images/img_right_arrow.svg" alt="rightarrow_one" className="h-[32px] w-[31px]" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full p-[31px] sm:p-5 border-gray-500_77 border border-solid rounded-[10px]">
                  <div className="flex flex-col w-full mt-[3px] gap-[19px]">
                    <Img src="images/img_vector_deep_orange_700_40x43.svg" alt="vector_one" className="h-[40px]" />
                    <Heading as="h4" className="!text-black-900 tracking-[0.25px]">
                      Softwares
                    </Heading>
                    <Text size="xs" as="p" className="tracking-[0.25px]">
                      End-to-end softwares stack built using open source based offered on subscription model.
                    </Text>
                    <div className="flex items-center gap-3">
                      <Text as="p" className="self-end tracking-[1.00px] capitalize !font-medium">
                        Explore
                      </Text>
                      <Img src="images/img_right_arrow.svg" alt="rightarrow_one" className="h-[32px] w-[31px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[93px] mx-auto md:p-5 max-w-[1335px]">
              <div className="flex md:flex-col items-center">
                <Img src="images/img_rectangle_21988.png" alt="image_two" className="w-[58%] md:w-full object-cover" />
                <div className="flex w-[42%] md:w-full ml-[-153px]">
                  <div className="flex flex-col items-end w-full">
                    <div className="flex sm:flex-col justify-end items-center gap-[25px]">
                      <Img src="images/img_arrow_black_900.svg" alt="arrow_three" className="h-[29px] w-[29px]" />
                      <Heading size="4xl" as="h1" className="!text-black-900 tracking-[1.00px] text-right">
                        Sectors We Serve
                      </Heading>
                    </div>
                    <Text size="s" as="p" className="mt-[9px] tracking-[0.25px] text-right !leading-[30px]">
                      Our services cater to a diverse range of sectors that benefit from the implementation of our
                      cutting-edge energy management systems.
                    </Text>
                    <div className="flex flex-col w-[70%] md:w-full mt-14 gap-7">
                      <div className="flex justify-between items-start gap-5 p-4 border-gray-500_77 border border-solid flex-1 rounded-[5px]">
                        <div className="flex justify-center items-center mt-[3px] ml-[3px] gap-[23px]">
                          <Img src="images/img_group_50488.svg" alt="energy" className="h-[27px] w-[28px]" />
                          <Text as="p" className="self-end tracking-[0.25px] !font-inter !font-medium">
                            Energy & Utilities{" "}
                          </Text>
                        </div>
                        <Img src="images/img_right_arrow.svg" alt="energy" className="h-[32px] w-[31px] mr-2" />
                      </div>
                      <div className="flex justify-between items-center gap-5 p-4 border-gray-500_77 border border-solid flex-1 rounded-[5px]">
                        <div className="flex self-start justify-center items-center ml-[3px] gap-[21px]">
                          <Img
                            src="images/img_vector_deep_orange_700_30x30.svg"
                            alt="vector_one"
                            className="h-[30px] w-[30px]"
                          />
                          <Text as="p" className="self-end tracking-[0.25px] !font-inter !font-medium">
                            Industrial Sector
                          </Text>
                        </div>
                        <Img
                          src="images/img_right_arrow.svg"
                          alt="rightarrow_one"
                          className="self-start h-[32px] w-[31px]"
                        />
                      </div>
                      <div className="flex justify-center flex-1">
                        <div className="flex justify-between items-start w-full gap-5 p-4 border-gray-500_77 border border-solid rounded-[5px]">
                          <div className="flex justify-center items-center mt-[3px] ml-[3px] gap-5">
                            <Img src="images/img_group_50220.svg" alt="image" className="h-[27px]" />
                            <Text as="p" className="tracking-[0.25px] !font-inter !font-medium">
                              Commercial Sector
                            </Text>
                          </div>
                          <Img
                            src="images/img_right_arrow.svg"
                            alt="rightarrow_one"
                            className="h-[32px] w-[31px] mr-2"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center flex-1">
                        <div className="flex justify-between items-center w-full gap-5 p-4 border-deep_orange-700_b2_03 border border-solid bg-deep_orange-700_07 rounded-[5px]">
                          <div className="flex self-start justify-center items-center ml-[3px] gap-[21px]">
                            <Img src="images/img_group_50255.svg" alt="image" className="h-[29px] w-[30px]" />
                            <Text
                              as="p"
                              className="self-end !text-white-A700_e5_03 tracking-[0.25px] !font-inter !font-medium"
                            >
                              Residential Sector
                            </Text>
                          </div>
                          <Img
                            src="images/img_right_arrow_white_a700.svg"
                            alt="rightarrow_one"
                            className="self-start h-[32px] w-[31px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[93px] mx-auto md:p-5 max-w-[913px]">
              <div className="flex flex-col">
                <Heading
                  size="4xl"
                  as="h1"
                  className="w-[62%] md:w-full !text-black-900 tracking-[1.00px] !leading-[55px]"
                >
                  Why Our Customers Choose Working With Us
                </Heading>
                <Text size="s" as="p" className="w-[56%] md:w-full mt-3 tracking-[0.25px] !leading-[30px]">
                  Adya empowers you and your community to control your energy generation and payments.
                </Text>
                <div className="flex flex-col mt-[74px] gap-[81px]">
                  <div className="flex md:flex-col justify-between items-start gap-5 flex-1">
                    <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full mb-1 gap-3.5">
                      <div className="h-[12px] w-[12px] mt-[9px] bg-deep_orange-700 rounded-[50%]" />
                      <div className="flex-1">
                        <div>
                          <div className="flex flex-col gap-2.5">
                            <Heading as="h4" className="tracking-[0.25px]">
                              End-to-end Solution
                            </Heading>
                            <Text size="xs" as="p" className="tracking-[0.25px]">
                              Complete Smart Devices, Networks with Energy Platform enables fast rollouts and
                              operational outcomes.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full mt-1.5 gap-3.5">
                      <div className="h-[12px] w-[12px] mt-1.5 bg-deep_orange-700 rounded-[50%]" />
                      <div className="flex-1">
                        <div>
                          <div className="flex flex-col gap-[7px]">
                            <Heading as="h4" className="tracking-[0.25px]">
                              Interoperability
                            </Heading>
                            <Text size="xs" as="p" className="tracking-[0.25px]">
                              Connecting any third-party devices, comm networks, softwares seamlessly to the platfrom
                              and help in decrearing IT cost.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-between items-center gap-5 flex-1">
                    <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full gap-3.5">
                      <div className="h-[12px] w-[12px] mt-[9px] bg-deep_orange-700 rounded-[50%]" />
                      <div className="flex-1">
                        <div>
                          <div className="flex flex-col gap-2">
                            <Heading as="h4" className="tracking-[0.25px]">
                              Cost Effective
                            </Heading>
                            <Text size="xs" as="p" className="tracking-[0.25px] !leading-[26px]">
                              Our seamlessly integrated end-to-end solutions enables least Total Cost of Ownership for
                              rolling out Smart Metering Solution.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full gap-3.5">
                      <div className="h-[12px] w-[12px] mt-[9px] bg-deep_orange-700 rounded-[50%]" />
                      <div className="flex-1">
                        <div>
                          <div className="flex flex-col gap-2.5">
                            <Heading as="h4" className="tracking-[0.25px]">
                              Commitment
                            </Heading>
                            <Text size="xs" as="p" className="tracking-[0.25px]">
                              We provide complete support to our customers with Poc, pilots, commercial rollouts and
                              post deployment management for eight years.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-1">
                    <div className="flex flex-col items-start w-full gap-[70px]">
                      <div className="flex md:flex-col self-stretch justify-between items-center gap-5">
                        <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full gap-3.5">
                          <div className="h-[12px] w-[12px] mt-1.5 bg-deep_orange-700 rounded-[50%]" />
                          <div className="flex-1">
                            <div>
                              <div className="flex flex-col gap-[7px]">
                                <Heading as="h4" className="tracking-[0.25px]">
                                  Energy - as - a service
                                </Heading>
                                <Text size="xs" as="p" className="tracking-[0.25px]">
                                  Our cloud platform is subscription based model and customers pay subject to meeting
                                  service level agreements.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full gap-3.5">
                          <div className="h-[12px] w-[12px] mt-[9px] bg-deep_orange-700 rounded-[50%]" />
                          <div className="flex-1">
                            <div>
                              <div className="flex flex-col gap-2.5">
                                <Heading as="h4" className="tracking-[0.25px]">
                                  Carbon neutral solutions
                                </Heading>
                                <Text size="xs" as="p" className="tracking-[0.25px]">
                                  Our products and solutions are built with Distributed Intelligence which enables
                                  DERMS, Micro-grids and other Carbon Neutral technologies.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        color="deep_orange_700_06"
                        size="sm"
                        variant="fill"
                        className="sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 min-w-[151px] rounded"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[93px] ml-[100px]">
              <div className="flex md:flex-col justify-end items-center">
                <div className="flex flex-col items-start w-[46%] md:w-full z-[1]">
                  <div className="flex flex-col items-start gap-[15px]">
                    <Heading size="4xl" as="h1" className="!text-black-900 tracking-[1.00px]">
                      Our Trusted Client Stories
                    </Heading>
                    <Text size="s" as="p" className="tracking-[0.25px]">
                      Empowering Journeys, Empowered Words
                    </Text>
                  </div>
                  <Img src="images/img_quote_right.svg" alt="quoteright_one" className="h-[27px] w-[27px] mt-[46px]" />
                  <Text as="p" className="w-[92%] md:w-full mt-[15px] tracking-[0.25px] leading-[30px]">
                    We are Immensely satisfied and delighted on the Installation, Commissioning of end to end smart
                    meter project awarded to ADYA Smart Metering Pvt. Ltd., We also hereby certify that the plug & play
                    project was delivered to our satisfactory levels.
                  </Text>
                  <Heading size="s" as="h6" className="w-[57%] md:w-full mt-3 tracking-[0.25px] leading-[35px]">
                    -APSPDCL (Andhra Pradesh State Power Distribution Corporation Ltd.)
                  </Heading>
                </div>
                <Img
                  src="images/img_rectangle_21988_635x957.png"
                  alt="image_three"
                  className="w-[64%] md:w-full ml-[-166px] object-cover"
                />
              </div>
            </div>
            <div className="flex md:flex-col mt-[89px] ml-0.5 gap-[38px] overflow-auto">
              <div className="flex md:flex-col justify-center items-center w-full mx-auto md:p-5 max-w-[1235px]">
                <Img
                  src="images/img_whatsapp_image_2023_12_01.png"
                  alt="whatsappimage"
                  className="w-[10%] md:w-full object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_50x130.png"
                  alt="whatsappimage"
                  className="w-[12%] md:w-full ml-[11px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_90x59.png"
                  alt="whatsappimage"
                  className="w-[6%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_49x106.png"
                  alt="whatsappimage"
                  className="w-[10%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_54x81.png"
                  alt="whatsappimage"
                  className="w-[8%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_28x157.png"
                  alt="whatsappimage"
                  className="w-[15%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_55x74.png"
                  alt="whatsappimage"
                  className="w-[7%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_60x43.png"
                  alt="whatsappimage"
                  className="w-[4%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_82x44.png"
                  alt="whatsappimage"
                  className="self-start w-[4%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_54x195.png"
                  alt="whatsappimage"
                  className="w-[18%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_63x63.png"
                  alt="whatsappimage"
                  className="w-[63px] ml-5 object-cover"
                />
              </div>
              <div className="flex md:flex-col justify-center items-center w-full mx-auto md:p-5 max-w-[1235px]">
                <Img
                  src="images/img_whatsapp_image_2023_12_01.png"
                  alt="whatsappimage"
                  className="w-[10%] md:w-full object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_50x130.png"
                  alt="whatsappimage"
                  className="w-[12%] md:w-full ml-[11px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_90x59.png"
                  alt="whatsappimage"
                  className="w-[6%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_49x106.png"
                  alt="whatsappimage"
                  className="w-[10%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_54x81.png"
                  alt="whatsappimage"
                  className="w-[8%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_28x157.png"
                  alt="whatsappimage"
                  className="w-[15%] md:w-full ml-[15px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_55x74.png"
                  alt="whatsappimage"
                  className="w-[7%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_60x43.png"
                  alt="whatsappimage"
                  className="w-[4%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_82x44.png"
                  alt="whatsappimage"
                  className="self-start w-[4%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_54x195.png"
                  alt="whatsappimage"
                  className="w-[18%] md:w-full ml-[18px] object-cover"
                />
                <Img
                  src="images/img_whatsapp_image_2023_12_01_63x63.png"
                  alt="whatsappimage"
                  className="w-[63px] ml-5 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

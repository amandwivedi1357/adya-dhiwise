import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";

export default function AboutusPage() {
  return (
    <>
      <Helmet>
        <title>Aadya</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[2595px] md:pb-5 bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="self-stretch h-[634px] relative">
            <div className="justify-center h-[634px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
              <Img
                src="images/img_rectangle_21758.png"
                alt="imageoneone_one"
                className="justify-center h-[634px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-col justify-center w-max h-max gap-[9px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Heading size="5xl" as="h1" className="tracking-[0.25px]">
                  About Us
                </Heading>
                <div className="flex items-center w-full gap-[11px] mx-auto md:p-5 max-w-[174px]">
                  <Img src="images/img_home.svg" alt="homeoneoneone" className="h-[29px] w-[29px]" />
                  <Text size="s" as="p" className="tracking-[0.50px] text-center">
                    Home / About Us
                  </Text>
                </div>
              </div>
            </div>
            <Header className="w-full top-[4%] right-0 left-0 m-auto bg-cyan-900 absolute" />
          </div>
          <Heading size="4xl" as="h2" className="self-start mt-[119px] !text-black-900 tracking-[1.00px]">
            Who We Are
          </Heading>
          <Text as="p" className="w-[86%] md:w-full mt-[25px] tracking-[0.50px] leading-[30px]">
            <>
              Adya is a Sanskrit term meaning &quot;Original,&quot; reflecting our core philosophy. We pioneer unique
              solutions for the smart grid ecosystem. Our journey started with a mission: to create SMART and efficient
              utility solutions. Today, we stand out by offering comprehensive solutions, combining high-end metering,
              advanced communication, cutting-edge software, and consulting.
              <br />
              <br />
              Our research and innovations aim to transform how utilities and energy retailers manage resources and
              data. We help them consolidate information from various sources to realize their smart grid vision,
              enhancing global customer service.
              <br />
              <br />
              Adya is positioned to deploy cutting-edge technology for Earth&#39;s resource conservation. The importance
              of power has risen due to global scarcity. Utility companies and energy retailers grapple with supply
              constraints, environmental regulations, and changing demand driven by electric vehicles, distributed
              generation, and energy conservation.
              <br />
              <br />
              Environmental consciousness, climate change, rising energy prices, and technology advancements are
              reshaping consumer behavior. Consumers seek control, transitioning from passive customers to informed,
              environmentally conscious individuals.
              <br />
              <br />
              As a technological leader in energy, water, and gas metering, Adya Smart Metering provides end-to-end
              solutions globally, addressing evolving needs with innovative solutions.
            </>
          </Text>
          <div className="self-stretch h-[621px] mt-[93px] relative">
            <Img
              src="images/img_rectangle_22055.png"
              alt="imageoneoneone"
              className="justify-center h-[621px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-col items-center w-[86%] gap-[131px] top-[15%] right-0 left-0 m-auto absolute">
              <Heading size="4xl" as="h2" className="!text-black-900 tracking-[1.00px] text-right">
                Our Vision & Mision
              </Heading>
              <div className="flex md:flex-col self-stretch justify-between gap-5">
                <div className="flex flex-col w-[47%] md:w-full gap-[19px] p-9 sm:p-5 bg-white-A700_d3 rounded-[10px]">
                  <Heading as="h3" className="ml-[7px] !text-black-900 tracking-[0.25px]">
                    Vision
                  </Heading>
                  <Text as="p" className="mb-[23px] ml-[7px] tracking-[0.25px] leading-[29px]">
                    Our goal is to make power accessible, affordable and sustainable for both utilities and consumers.
                  </Text>
                </div>
                <div className="flex flex-col items-start w-[47%] md:w-full gap-[19px] p-[31px] sm:p-5 bg-white-A700_d3 rounded-[10px]">
                  <Heading as="h4" className="mt-[5px] ml-3.5 !text-black-900 tracking-[0.25px]">
                    Mision
                  </Heading>
                  <Text as="p" className="w-[97%] md:w-full ml-[13px] tracking-[0.25px] leading-[29px]">
                    To become the primary platform for energy management among consumers and provide high precision
                    smart meter device.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[133px] mx-auto md:p-5 max-w-[913px]">
            <div className="flex flex-col">
              <Heading
                size="4xl"
                as="h2"
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
                          <Heading as="h3" className="tracking-[0.25px]">
                            End-to-end Solution
                          </Heading>
                          <Text size="xs" as="p" className="tracking-[0.25px]">
                            Complete Smart Devices, Networks with Energy Platform enables fast rollouts and operational
                            outcomes.
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
                            Connecting any third-party devices, comm networks, softwares seamlessly to the platfrom and
                            help in decrearing IT cost.
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
                          <Heading as="h5" className="tracking-[0.25px]">
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
                          <Heading as="h6" className="tracking-[0.25px]">
                            Commitment
                          </Heading>
                          <Text size="xs" as="p" className="tracking-[0.25px]">
                            We provide complete support to our customers with Poc, pilots, commercial rollouts and post
                            deployment management for eight years.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col justify-between items-center gap-5 flex-1">
                  <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full gap-3.5">
                    <div className="h-[12px] w-[12px] mt-1.5 bg-deep_orange-700 rounded-[50%]" />
                    <div className="flex-1">
                      <div className="flex flex-col gap-[7px]">
                        <Heading as="h4" className="tracking-[0.25px]">
                          Energy - as - a service
                        </Heading>
                        <Text size="xs" as="p" className="tracking-[0.25px]">
                          Our cloud platform is subscription based model and customers pay subject to meeting service
                          level agreements.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-center items-start w-[45%] md:w-full gap-3.5">
                    <div className="h-[12px] w-[12px] mt-[9px] bg-deep_orange-700 rounded-[50%]" />
                    <div className="flex-1">
                      <div className="flex flex-col gap-2.5">
                        <Heading as="h4" className="tracking-[0.25px]">
                          Carbon neutral solutions
                        </Heading>
                        <Text size="xs" as="p" className="tracking-[0.25px]">
                          Our products and solutions are built with Distributed Intelligence which enables DERMS,
                          Micro-grids and other Carbon Neutral technologies.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[17%] md:w-full mt-[70px]">
                <Button
                  color="deep_orange_700"
                  size="sm"
                  variant="fill"
                  className="w-full sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 rounded"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[635px] mt-[141px] relative">
            <Img
              src="images/img_rectangle_22056.png"
              alt="imagetwooneone"
              className="justify-center h-[635px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
            />
            <div className="flex flex-col items-end w-[43%] right-[7%] top-[15%] m-auto absolute">
              <Heading size="4xl" as="h2" className="tracking-[1.00px] text-right">
                Awards & Recognitions
              </Heading>
              <div className="flex sm:flex-col justify-end items-start mt-[103px] gap-[15px]">
                <Img
                  src="images/img_vector_deep_orange_700_24x24.svg"
                  alt="vectoroneone"
                  className="h-[24px] w-[24px]"
                />
                <Heading size="lg" as="h3" className="!text-black-900 tracking-[0.25px] text-right">
                  Electrical Research & Development Association
                </Heading>
              </div>
              <div className="flex sm:flex-col justify-end mt-5 gap-[19px]">
                <Text size="s" as="p" className="self-end mt-0.5 tracking-[0.25px] text-right">
                  Certificate of Life Membership
                </Text>
                <Text size="s" as="p" className="self-start tracking-[0.25px] text-right">
                  Year of Issue - 29/10/2018
                </Text>
              </div>
              <div className="flex justify-end w-[69%] md:w-full mt-[74px]">
                <div className="flex flex-col items-end gap-[22px]">
                  <div className="flex justify-end items-center gap-2">
                    <Img
                      src="images/img_vector_deep_orange_700_24x24.svg"
                      alt="vectorthreeone"
                      className="self-start h-[24px] w-[24px]"
                    />
                    <Heading size="lg" as="h4" className="!text-black-900 tracking-[0.25px] text-right">
                      Earth Care Award - 2012
                    </Heading>
                  </div>
                  <div className="flex sm:flex-col justify-end gap-[19px]">
                    <Text size="s" as="p" className="tracking-[0.25px] text-right">
                      JSW - Time Of India
                    </Text>
                    <Text size="s" as="p" className="tracking-[0.25px] text-right">
                      Year of Issue - 29/10/2018
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[193px] gap-[86px] mx-auto md:p-5 max-w-[1242px]">
            <Heading size="4xl" as="h2" className="tracking-[1.00px]">
              Our Team Members
            </Heading>
            <div className="gap-[85px] grid-cols-4 md:grid-cols-[1fr] grid">
              <div className="flex flex-col w-full">
                <Img
                  src="images/img_rectangle_21920.png"
                  alt="viraj_pathi_one"
                  className="h-[245px] md:w-[245px] object-cover rounded-[7px]"
                />
                <Text size="2xl" as="p" className="mt-[23px] tracking-[0.25px]">
                  Viraj Pathi
                </Text>
                <Text as="p" className="mt-[3px] tracking-[0.25px] !font-inter">
                  Founder & CEO
                </Text>
              </div>
              <div className="flex flex-col w-full">
                <Img
                  src="images/img_rectangle_21921.png"
                  alt="imageoneone_one"
                  className="h-[245px] md:w-[245px] object-cover rounded-[7px]"
                />
                <Text size="2xl" as="p" className="mt-[23px] tracking-[0.25px]">
                  Virupakshi
                </Text>
                <Text as="p" className="mt-1 tracking-[0.25px] !font-inter">
                  VP Engineering (Products)
                </Text>
              </div>
              <div className="flex flex-col w-full">
                <div className="h-[245px] w-[245px] bg-blue_gray-800_3a rounded-[7px]" />
                <Text size="2xl" as="p" className="mt-[23px] tracking-[0.25px]">
                  Viraj Pathi
                </Text>
                <Text as="p" className="mt-[3px] tracking-[0.25px] !font-inter">
                  Founder & CEO
                </Text>
              </div>
              <div className="flex flex-col w-full">
                <div className="h-[245px] w-[245px] bg-blue_gray-800_3a rounded-[7px]" />
                <Text size="2xl" as="p" className="mt-[23px] tracking-[0.25px]">
                  Viraj Pathi
                </Text>
                <Text as="p" className="mt-[3px] tracking-[0.25px] !font-inter">
                  Founder & CEO
                </Text>
              </div>
              <div className="flex flex-col w-full">
                <div className="h-[245px] w-[245px] bg-blue_gray-800_3a rounded-[7px]" />
                <Text size="2xl" as="p" className="mt-[23px] tracking-[0.25px]">
                  Viraj Pathi
                </Text>
                <Text as="p" className="mt-[3px] tracking-[0.25px] !font-inter">
                  Founder & CEO
                </Text>
              </div>
              <div className="flex flex-col w-full">
                <div className="h-[245px] w-[245px] bg-blue_gray-800_3a rounded-[7px]" />
                <Text size="2xl" as="p" className="mt-[23px] tracking-[0.25px]">
                  Viraj Pathi
                </Text>
                <Text as="p" className="mt-[3px] tracking-[0.25px] !font-inter">
                  Founder & CEO
                </Text>
              </div>
            </div>
          </div>
          <footer className="flex flex-col self-stretch mt-[155px]">
            <Img src="images/img_rectangle_21843.png" alt="imagethreeone" className="h-[404px] w-full object-cover" />
            <div className="w-full mb-[57px] mx-auto md:p-5 max-w-[1238px]">
              <div className="flex flex-col items-center">
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
                      <div className="flex justify-between items-center gap-5">
                        <ul className="flex flex-col items-start gap-[9px]">
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                Home
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                About Us
                              </Text>
                            </a>
                          </li>
                        </ul>
                        <ul className="flex flex-col gap-2.5">
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                solutions
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                Products
                              </Text>
                            </a>
                          </li>
                        </ul>
                        <ul className="flex flex-col items-start gap-2.5">
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                Services
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_bc tracking-[0.16px] capitalize">
                                Sectors
                              </Text>
                            </a>
                          </li>
                        </ul>
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
          </footer>
        </div>
      </div>
    </>
  );
}

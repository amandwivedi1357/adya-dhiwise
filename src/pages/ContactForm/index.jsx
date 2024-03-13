import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, SelectBox, Heading, Button, Input } from "../../components";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ContactFormPage() {
  return (
    <>
      <Helmet>
        <title>Aadya</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[4934px] md:pb-5 bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="self-stretch">
            <div>
              <div className="z-[1]">
                <Img
                  src="images/img_rectangle_21748.png"
                  alt="imageoneone_one"
                  className="h-[27px] w-full object-cover"
                />
                <header className="p-7 sm:p-5 shadow-xs">
                  <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[1189px]">
                    <div className="flex md:flex-col justify-between items-center w-[80%] md:w-full gap-5">
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
                    <Img src="images/img_search.svg" alt="searchoneone" className="h-[24px] w-[24px]" />
                  </div>
                </header>
              </div>
              <div className="h-[634px] mt-[-160px] relative">
                <Img
                  src="images/img_rectangle_22059.png"
                  alt="imageoneoneone"
                  className="justify-center h-[634px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-start justify-center w-max h-max gap-4 left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <Heading size="5xl" as="h1" className="tracking-[0.25px]">
                    Connect With Adya
                  </Heading>
                  <div className="flex sm:flex-col items-center ml-[87px] gap-2.5">
                    <Img src="images/img_vector.svg" alt="vectoroneone" className="h-[20px] sm:w-full" />
                    <Text size="s" as="p" className="tracking-[0.50px] text-center">
                      Home / About Us / Contact Form
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col justify-center w-full mt-[58px] gap-6 mx-auto md:p-5 max-w-[1142px]">
            <div className="flex flex-col items-start justify-center w-[47%] md:w-full pl-[72px] pr-14 py-[72px] md:p-5 border-gray-700_93_02 border border-solid rounded-[10px]">
              <div className="flex flex-col items-start w-[87%] md:w-full mt-[5px]">
                <div className="flex items-start gap-3">
                  <Img src="images/img_vector_deep_orange_700.svg" alt="vectorthreeone" className="h-[24px]" />
                  <Heading size="md" as="h2" className="tracking-[0.25px]">
                    India, Headquarters{" "}
                  </Heading>
                </div>
                <a href="#" className="w-[93%] md:w-full mt-[18px]">
                  <Text as="p" className="tracking-[0.16px] capitalize">
                    Plot no.61, Nagarjuna hills, Punjagutta, Hyderabad - 500 082, Telangana, India
                  </Text>
                </a>
                <div className="flex items-center mt-[23px] gap-[11px]">
                  <Img
                    src="images/img_vector_deep_orange_700_25x25.svg"
                    alt="vectorfiveone"
                    className="self-start h-[25px] w-[25px] mb-0.5"
                  />
                  <a href="#" className="self-end">
                    <Text as="p" className="tracking-[0.04px] capitalize">
                      +91 40 4857 9530
                    </Text>
                  </a>
                </div>
                <div className="flex items-center mt-6 gap-[15px]">
                  <Img src="images/img_at.svg" alt="atoneoneone_one" className="self-start h-[23px] w-[23px]" />
                  <a href="#">
                    <Text as="p" className="!text-black-900_cc tracking-[0.25px]">
                      info@adyasmartmetering.com
                    </Text>
                  </a>
                </div>
                <div className="flex items-start mt-[41px] gap-3">
                  <Img src="images/img_vector_deep_orange_700.svg" alt="vectorsevenone" className="h-[24px]" />
                  <Heading size="md" as="h3" className="tracking-[0.25px]">
                    North America, Regional Sales
                  </Heading>
                </div>
                <a href="#" className="w-[93%] md:w-full mt-[18px]">
                  <Text as="p" className="tracking-[0.16px] capitalize">
                    7909 Rocky Mountain Lane, Mckinney, TX 75070
                  </Text>
                </a>
                <div className="flex items-center mt-[22px] gap-4">
                  <Img
                    src="images/img_vector_deep_orange_700_25x25.svg"
                    alt="vectornineone"
                    className="h-[25px] w-[25px]"
                  />
                  <a href="#">
                    <Text as="p" className="tracking-[0.04px] capitalize">
                      (972)-832-9454
                    </Text>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[532px] md:w-full flex-1 relative md:flex-none">
              <Img
                src="images/img_rectangle_21782.png"
                alt="imagetwooneone"
                className="justify-center h-[532px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[10px]"
              />
              <div className="flex items-start w-[55%] gap-[19px] left-[12%] top-[12%] m-auto absolute">
                <Img src="images/img_vector_deep_orange_700.svg" alt="vectoreleven" className="h-[24px]" />
                <Heading size="md" as="h4" className="tracking-[0.25px]">
                  Find us on google maps
                </Heading>
              </div>
            </div>
          </div>
          <Heading size="3xl" as="h2" className="mt-[100px] tracking-[0.25px]">
            Share Your Requirements
          </Heading>
          <div className="flex flex-col items-center w-full mt-14 p-[43px] mx-auto md:p-5 border-gray-700_7c border border-solid max-w-[1141px] rounded-[10px]">
            <div className="flex flex-col w-[90%] md:w-full mt-[78px] gap-[39px]">
              <div className="flex md:flex-col justify-center items-center gap-[46px]">
                <div className="flex flex-col w-full gap-4">
                  <Heading size="s" as="h2" className="flex tracking-[0.02px] !font-rambla !font-bold">
                    <span className="text-black-900_e5 font-poppins font-semibold">First Name</span>
                    <span className="text-red_900_e5 font-poppins font-semibold">*</span>
                  </Heading>
                  <Input color="green_700" shape="round" name="firstName" className="sm:pr-5" />
                </div>
                <div className="flex flex-col w-full gap-[13px]">
                  <Heading size="s" as="h3" className="tracking-[0.02px]">
                    Last Name*{" "}
                  </Heading>
                  <Input shape="round" name="lastName" className="sm:pr-5" />
                </div>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-[46px]">
                <div className="flex flex-col w-full gap-4">
                  <Heading size="s" as="h4" className="flex tracking-[0.02px] !font-rambla !font-bold">
                    <span className="text-black-900_e5 font-poppins font-semibold">Business Email Id </span>
                    <span className="text-red_900_e5 font-poppins font-semibold">*</span>
                  </Heading>
                  <Input color="gray_700_93_01" shape="round" name="businessemail" className="sm:pr-5" />
                </div>
                <div className="flex flex-col w-full gap-[13px]">
                  <Heading size="s" as="h5" className="tracking-[0.02px]">
                    Company / Prganization
                  </Heading>
                  <Input shape="round" name="edittext" className="sm:pr-5" />
                </div>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-[46px]">
                <div className="flex flex-col w-full gap-[11px]">
                  <Heading size="s" as="h6" className="tracking-[0.02px]">
                    Industry
                  </Heading>
                  <Input
                    size="xs"
                    shape="round"
                    name="arrowdropdown"
                    placeholder="Select"
                    suffix={<Img src="images/img_arrow_drop_down.svg" alt="Arrow Drop Down" />}
                    className="gap-[35px] tracking-[0.25px]"
                  />
                </div>
                <div className="flex flex-col w-full gap-3.5">
                  <Heading size="s" as="h6" className="tracking-[0.02px]">
                    Job Tittle
                  </Heading>
                  <Input shape="round" name="edittext_one" className="sm:pr-5" />
                </div>
              </div>
              <div className="flex md:flex-col justify-between gap-5">
                <div className="flex flex-col w-[47%] md:w-full gap-[13px]">
                  <a href="#" className="flex">
                    <Text as="p" className="tracking-[0.02px] !font-medium">
                      <span className="text-black-900_e5 font-semibold">Contact Number </span>
                      <span className="text-red_A700 font-semibold">*</span>
                    </Text>
                  </a>
                  <div className="flex sm:flex-col gap-[13px]">
                    <SelectBox
                      color="gray_700_93_01"
                      shape="round"
                      indicator={<Img src="images/img_arrow_drop_down_black_900_01.svg" alt="Arrow Drop Down" />}
                      name="ninetyone"
                      placeholder="+91"
                      options={dropDownOptions}
                      className="w-[17%] gap-px sm:pr-5 tracking-[0.02px] font-medium"
                    />
                    <div className="h-[49px] border-gray-700_93_01 border border-solid flex-1 rounded-[3px]" />
                  </div>
                </div>
                <div className="flex flex-col w-[48%] md:w-full gap-[13px]">
                  <Heading size="s" as="h6" className="tracking-[0.02px]">
                    Country / Region
                  </Heading>
                  <Input
                    size="xs"
                    shape="round"
                    name="country"
                    placeholder="Select"
                    suffix={<Img src="images/img_arrow_drop_down.svg" alt="Arrow Drop Down" />}
                    className="gap-[35px] tracking-[0.25px]"
                  />
                </div>
              </div>
              <div className="flex md:flex-col justify-center items-center gap-[46px]">
                <div className="flex flex-col w-full gap-3">
                  <Heading size="s" as="h6" className="tracking-[0.02px]">
                    City
                  </Heading>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_arrow_drop_down.svg" alt="Arrow Drop Down" />}
                    name="city"
                    placeholder="Select"
                    options={dropDownOptions}
                    className="gap-px sm:pr-5 tracking-[0.25px]"
                  />
                </div>
                <div className="flex flex-col w-full gap-[15px]">
                  <Heading size="s" as="h6" className="flex tracking-[0.02px] !font-rambla !font-bold">
                    <span className="text-black-900_e5 font-poppins font-semibold">Postal Code / Zip </span>
                    <span className="text-red_900_e5 font-poppins font-semibold">*</span>
                  </Heading>
                  <Input
                    size="xs"
                    shape="round"
                    name="arrowdropdown"
                    placeholder="Select"
                    suffix={<Img src="images/img_arrow_drop_down.svg" alt="Arrow Drop Down" />}
                    className="gap-[35px] tracking-[0.25px]"
                  />
                </div>
              </div>
              <div className="h-[467px] relative">
                <div className="flex flex-col justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                  <div className="flex w-[48%] md:w-full z-[1]">
                    <div className="flex items-start w-full">
                      <Heading size="s" as="h6" className="mt-[37px] tracking-[0.02px]">
                        Tell us your requirements
                      </Heading>
                      <div className="flex flex-col items-start justify-center ml-[-206px] gap-[15px] p-[23px] sm:p-5 border-gray-700_93 border border-solid bg-white-A700 shadow-xs flex-1 rounded-[3px]">
                        <a href="#" className="mt-1 ml-[11px]">
                          <Text size="s" as="p" className="!text-deep_orange-700 tracking-[0.02px] !font-medium">
                            Solution
                          </Text>
                        </a>
                        <a href="#" className="ml-[11px]">
                          <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                            Products
                          </Text>
                        </a>
                        <a href="#" className="ml-[11px]">
                          <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                            Services
                          </Text>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="h-[222px] mt-[-76px] border-gray-700_93_01 border border-solid rounded-[3px]" />
                </div>
                <div className="flex flex-col w-[48%] gap-4 left-0 top-0 m-auto absolute">
                  <Heading size="s" as="h6" className="flex tracking-[0.02px] !font-rambla !font-bold">
                    <span className="text-black-900_e5 font-poppins font-semibold">Area Of interest</span>
                    <span className="text-red_900_e5 font-poppins font-semibold">*</span>
                  </Heading>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_arrow_drop_down.svg" alt="Arrow Drop Down" />}
                    name="select"
                    placeholder="Select"
                    options={dropDownOptions}
                    className="gap-px sm:pr-5 tracking-[0.25px]"
                  />
                </div>
                <Button
                  color="deep_orange_700"
                  size="sm"
                  variant="fill"
                  className="bottom-0 left-0 m-auto sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 min-w-[115px] absolute rounded"
                >
                  Sumbit
                </Button>
                <div className="flex flex-col w-[48%] gap-[3px] right-0 top-0 m-auto absolute">
                  <div className="flex flex-col gap-3.5">
                    <Heading size="s" as="h6" className="flex tracking-[0.02px] !font-rambla !font-bold">
                      <span className="text-black-900_e5 font-poppins font-semibold">What are you looking for ? </span>
                      <span className="text-red_900_e5 font-poppins font-semibold">*</span>
                    </Heading>
                    <SelectBox
                      shape="round"
                      indicator={<Img src="images/img_arrow_drop_down.svg" alt="Arrow Drop Down" />}
                      name="selectone"
                      placeholder="Select"
                      options={dropDownOptions}
                      className="gap-px sm:pr-5 tracking-[0.25px]"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col items-start justify-center gap-3.5 p-[25px] sm:p-5 border-gray-700_93 border border-solid bg-white-A700 shadow-xs rounded-[3px]">
                      <a href="#" className="mt-0.5 ml-[9px]">
                        <Text size="s" as="p" className="!text-deep_orange-700 tracking-[0.02px] !font-medium">
                          Contact Sales
                        </Text>
                      </a>
                      <a href="#" className="ml-[9px]">
                        <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                          General Enquiry
                        </Text>
                      </a>
                      <a href="#" className="ml-[9px]">
                        <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                          Make A purchase
                        </Text>
                      </a>
                      <a href="#" className="ml-[9px]">
                        <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                          Licenscing of Technology
                        </Text>
                      </a>
                      <a href="#" className="ml-[9px]">
                        <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                          Value Added Partners
                        </Text>
                      </a>
                      <a href="#" className="ml-[9px]">
                        <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                          Product Related
                        </Text>
                      </a>
                      <a href="#" className="ml-[9px]">
                        <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                          Service Related
                        </Text>
                      </a>
                      <a href="#" className="ml-[9px]">
                        <Text size="s" as="p" className="tracking-[0.02px] !font-medium">
                          Solutions Related
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[404px] mt-[94px] relative">
            <Img
              src="images/img_rectangle_21843.png"
              alt="imagethreeone"
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
                    <Text as="p" className="!text-white-A700_bc tracking-[0.04px]">
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
    </>
  );
}

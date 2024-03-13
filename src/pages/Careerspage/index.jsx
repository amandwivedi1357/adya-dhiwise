import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import Header from "../../components/Header";

export default function CareerspagePage() {
  return (
    <>
      <Helmet>
        <title>Aadya</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-[106px] py-[27px] sm:py-5 bg-white-A700">
        <Header className="bg-cyan-900" />
        <div className="flex flex-col items-center w-full gap-[367px] mx-auto md:p-5 max-w-[1240px]">
          <div className="flex flex-col items-center gap-[9px]">
            <Heading size="5xl" as="h1" className="tracking-[0.25px]">
              Join Our Team
            </Heading>
            <div className="flex justify-center items-center gap-2.5">
              <Img src="images/img_home.svg" alt="homeoneoneone" className="h-[29px] w-[29px]" />
              <Text size="s" as="p" className="tracking-[0.50px] text-center">
                Home / Careers
              </Text>
            </div>
          </div>
          <div className="flex flex-col self-stretch">
            <Heading size="4xl" as="h2" className="!text-black-900 tracking-[1.00px]">
              Positions Open Now
            </Heading>
            <Text size="s" as="p" className="w-[42%] md:w-full mt-1.5 tracking-[0.50px] !leading-[29px]">
              Are you willing to be the change? Create a smarter world? Come join us at Adya and make a difference.
            </Text>
            <div className="mt-[84px] p-[49px] md:p-5 border-gray-500_77 border border-solid rounded-[10px]">
              <div className="flex flex-col mb-3.5 gap-10">
                <div className="flex md:flex-col items-start gap-11">
                  <div className="flex flex-col mt-[3px] flex-1">
                    <Heading size="2xl" as="h3" className="!text-black-900 tracking-[0.25px]">
                      Senior Data Engineer 
                    </Heading>
                    <Text
                      size="s"
                      as="p"
                      className="w-[97%] md:w-full mt-[19px] tracking-[0.50px] !font-light !leading-[29px]"
                    >
                      We are looking for Senior Data Engineer with MS or BS in Computer Science or a related field OR
                      equivalent practical experience in data engineering.
                    </Text>
                    <div className="mt-[33px]">
                      <div className="flex flex-col gap-[19px]">
                        <Text size="lg" as="p" className="!text-black-900 tracking-[1.00px] capitalize">
                          Required Skills
                        </Text>
                        <div className="flex md:flex-col items-start gap-4">
                          <div className="h-[10px] w-[10px] mt-2.5 bg-deep_orange-700 rounded-[50%]" />
                          <Text size="s" as="p" className="tracking-[0.50px] !font-light !leading-[29px]">
                            4+ years of industry experience working with distributed data technologies (e.g.Hadoop,
                            MapReduce, Spark, Flink, Kafka, etc.) for building efficient & large-scale data pipelines.
                          </Text>
                        </div>
                        <div className="flex md:flex-col items-start gap-4">
                          <div className="h-[10px] w-[10px] mt-2.5 bg-deep_orange-700 rounded-[50%]" />
                          <Text size="s" as="p" className="tracking-[0.50px] !font-light !leading-[29px]">
                            Software Engineering proficiency in at least one high-level programming language (Java,
                            Scala, Python or equivalent).
                          </Text>
                        </div>
                        <div className="flex md:flex-col items-start gap-4">
                          <div className="h-[10px] w-[10px] mt-2.5 bg-deep_orange-700 rounded-[50%]" />
                          <Text size="s" as="p" className="tracking-[0.50px] !font-light !leading-[29px]">
                            <>
                              Experience required in building batch data processing pipelines curating data for data
                              <br />
                              science consumers.
                            </>
                          </Text>
                        </div>
                        <div className="flex md:flex-col items-start gap-4">
                          <div className="h-[10px] w-[10px] mt-2.5 bg-deep_orange-700 rounded-[50%]" />
                          <Text size="s" as="p" className="tracking-[0.50px] !font-light !leading-[29px]">
                            <>
                              Experience strongly preferred building stream-processing applications using Apache
                              <br />
                              Flink, Spark-Streaming, Apache Storm, Kafka Streams or others.
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[13%] md:w-full">
                    <Button
                      color="deep_orange_700"
                      size="sm"
                      variant="fill"
                      className="w-full sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 rounded"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-col w-[42%] md:w-full ml-[25px] gap-[23px]">
                  <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                    Onsite/Remote
                  </Button>
                  <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                    + 4 Years of exp.
                  </Button>
                  <Button shape="round" className="sm:px-5 tracking-[0.25px] min-w-[107px]">
                    Full Time
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[47px] gap-[47px]">
              <div className="flex justify-center p-[49px] md:p-5 border-gray-500_77 border border-solid flex-1 rounded-[10px]">
                <div className="flex flex-col w-full">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <Heading size="2xl" as="h4" className="!text-black-900 tracking-[0.25px]">
                      Cloud Infrastructure Engineer
                    </Heading>
                    <div className="flex justify-center w-[13%] sm:w-full">
                      <Button
                        color="deep_orange_700"
                        size="sm"
                        variant="fill"
                        className="w-full sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 rounded"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  <div className="h-[58px] w-[81%] mt-[17px] relative">
                    <Text
                      size="s"
                      as="p"
                      className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto tracking-[0.50px] !font-light !leading-[29px] absolute"
                    >
                      We are looking for Senior Data Engineer with MS or BS in Computer Science or a related field OR
                      equivalent practical experience in data engineering.
                    </Text>
                    <a href="#" className="bottom-[5%] left-[28%] m-auto absolute">
                      <Text size="s" as="p" className="!text-deep_orange-700 tracking-[1.00px] capitalize !font-medium">
                        Read more
                      </Text>
                    </a>
                  </div>
                  <div className="flex sm:flex-col w-[41%] md:w-full mt-[37px] gap-[23px]">
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      Onsite/Remote
                    </Button>
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      + 4 Years of exp.
                    </Button>
                    <Button shape="round" className="sm:px-5 tracking-[0.25px] min-w-[107px]">
                      Full Time
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-[49px] md:p-5 border-gray-500_77 border border-solid flex-1 rounded-[10px]">
                <div className="flex flex-col w-full">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <Heading size="2xl" as="h5" className="tracking-[0.25px]">
                      Full Stack Engineer 
                    </Heading>
                    <div className="flex justify-center w-[13%] sm:w-full">
                      <Button
                        color="deep_orange_700"
                        size="sm"
                        variant="fill"
                        className="w-full sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 rounded"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  <div className="h-[58px] w-[81%] mt-[17px] relative">
                    <Text
                      size="s"
                      as="p"
                      className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto tracking-[0.50px] !font-light !leading-[29px] absolute"
                    >
                      We are looking for Senior Data Engineer with MS or BS in Computer Science or a related field OR
                      equivalent practical experience in data engineering.
                    </Text>
                    <a href="#" className="bottom-[5%] left-[28%] m-auto absolute">
                      <Text size="s" as="p" className="!text-deep_orange-700 tracking-[1.00px] capitalize !font-medium">
                        Read more
                      </Text>
                    </a>
                  </div>
                  <div className="flex sm:flex-col w-[41%] md:w-full mt-[37px] gap-[23px]">
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      Onsite/Remote
                    </Button>
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      + 4 Years of exp.
                    </Button>
                    <Button shape="round" className="sm:px-5 tracking-[0.25px] min-w-[107px]">
                      Full Time
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-[49px] md:p-5 border-gray-500_77 border border-solid flex-1 rounded-[10px]">
                <div className="flex flex-col w-full">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <Heading size="2xl" as="h6" className="!text-black-900 tracking-[0.25px]">
                      Data Quality Engineer 
                    </Heading>
                    <div className="flex justify-center w-[13%] sm:w-full">
                      <Button
                        color="deep_orange_700"
                        size="sm"
                        variant="fill"
                        className="w-full sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 rounded"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  <div className="h-[58px] w-[81%] mt-[17px] relative">
                    <Text
                      size="s"
                      as="p"
                      className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto tracking-[0.50px] !font-light !leading-[29px] absolute"
                    >
                      We are looking for Senior Data Engineer with MS or BS in Computer Science or a related field OR
                      equivalent practical experience in data engineering.
                    </Text>
                    <a href="#" className="bottom-[5%] left-[28%] m-auto absolute">
                      <Text size="s" as="p" className="!text-deep_orange-700 tracking-[1.00px] capitalize !font-medium">
                        Read more
                      </Text>
                    </a>
                  </div>
                  <div className="flex sm:flex-col w-[41%] md:w-full mt-[37px] gap-[23px]">
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      Onsite/Remote
                    </Button>
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      + 4 Years of exp.
                    </Button>
                    <Button shape="round" className="sm:px-5 tracking-[0.25px] min-w-[107px]">
                      Full Time
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-[49px] md:p-5 border-gray-500_77 border border-solid flex-1 rounded-[10px]">
                <div className="flex flex-col w-full">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <Heading size="2xl" as="h4" className="!text-black-900 tracking-[0.25px]">
                      Hardware Engineer   
                    </Heading>
                    <div className="flex justify-center w-[13%] sm:w-full">
                      <Button
                        color="deep_orange_700"
                        size="sm"
                        variant="fill"
                        className="w-full sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 rounded"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  <div className="h-[58px] w-[81%] mt-[17px] relative">
                    <Text
                      size="s"
                      as="p"
                      className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto tracking-[0.50px] !font-light !leading-[29px] absolute"
                    >
                      We are looking for Senior Data Engineer with MS or BS in Computer Science or a related field OR
                      equivalent practical experience in data engineering.
                    </Text>
                    <a href="#" className="bottom-[5%] left-[28%] m-auto absolute">
                      <Text size="s" as="p" className="!text-deep_orange-700 tracking-[1.00px] capitalize !font-medium">
                        Read more
                      </Text>
                    </a>
                  </div>
                  <div className="flex sm:flex-col w-[41%] md:w-full mt-[37px] gap-[23px]">
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      Onsite/Remote
                    </Button>
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      + 4 Years of exp.
                    </Button>
                    <Button shape="round" className="sm:px-5 tracking-[0.25px] min-w-[107px]">
                      Full Time
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center p-[49px] md:p-5 border-gray-500_77 border border-solid flex-1 rounded-[10px]">
                <div className="flex flex-col w-full">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <Heading size="2xl" as="h4" className="!text-black-900 tracking-[0.25px]">
                      .NET Sr. Developer
                    </Heading>
                    <div className="flex justify-center w-[13%] sm:w-full">
                      <Button
                        color="deep_orange_700"
                        size="sm"
                        variant="fill"
                        className="w-full sm:px-5 tracking-[1.00px] font-medium border-deep_orange-700 rounded"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                  <div className="h-[58px] w-[81%] mt-[17px] relative">
                    <Text
                      size="s"
                      as="p"
                      className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto tracking-[0.50px] !font-light !leading-[29px] absolute"
                    >
                      We are looking for Senior Data Engineer with MS or BS in Computer Science or a related field OR
                      equivalent practical experience in data engineering.
                    </Text>
                    <a href="#" className="bottom-[5%] left-[28%] m-auto absolute">
                      <Text size="s" as="p" className="!text-deep_orange-700 tracking-[1.00px] capitalize !font-medium">
                        Read more
                      </Text>
                    </a>
                  </div>
                  <div className="flex sm:flex-col w-[41%] md:w-full mt-[37px] gap-[23px]">
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      Onsite/Remote
                    </Button>
                    <Button shape="round" className="w-full sm:px-5 tracking-[0.25px] flex-1">
                      + 4 Years of exp.
                    </Button>
                    <Button shape="round" className="sm:px-5 tracking-[0.25px] min-w-[107px]">
                      Full Time
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col mb-[4255px]">
          <Img src="images/img_rectangle_21843.png" alt="imageoneone_one" className="h-[404px] w-full object-cover" />
          <div className="w-full mb-[57px] mx-auto md:p-5 max-w-[1239px]">
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
                    <Text as="p" className="!text-white-A700_bc tracking-[0.04px]">
                      info@adyasmartmetering.com
                    </Text>
                  </div>
                  <div className="flex flex-col w-[48%] sm:w-full gap-[13px]">
                    <Text size="xl" as="p" className="!text-white-A700 tracking-[0.03px]">
                      Quick Links
                    </Text>
                    <div className="flex justify-between items-center gap-5">
                      <div className="flex justify-center w-[26%]">
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
                      </div>
                      <div className="flex justify-center w-[27%]">
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
                      </div>
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
    </>
  );
}

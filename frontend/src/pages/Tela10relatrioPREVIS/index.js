import React from "react";

import { Column, Row, Img, Text, Line, Stack, Input, Button } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Tela10relatrioPREVISPage = () => {
  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/telaprincipal");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-end mx-[auto] shadow-bs w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Row className="bg-indigo_700 items-center p-[2px] w-[100%]">
            <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] w-[97%]">
              <Row className="items-start justify-evenly w-[10%]">
                <Img src="images/img_cart.svg" className="cart" alt="cart" />
                <Column className="items-center justify-start mb-[1px] w-[68%]">
                  <Text
                    className="font-semibold text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    SuperMarket
                  </Text>
                  <Text
                    className="font-light text-white_A700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    management
                  </Text>
                  <Line className="bg-white_A700 h-[2px] mt-[1px] w-[99%]" />
                </Column>
              </Row>
              <Row className="items-center justify-center lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[11%]">
                <Text
                  className="common-pointer menu"
                  as="h2"
                  variant="h2"
                  onClick={handleNavigate20}
                >
                  Clientes
                </Text>
                <Text className="Produtos" as="h2" variant="h2">
                  Produtos
                </Text>
              </Row>
              <Row className="items-center justify-center lg:ml-[226px] xl:ml-[283px] 2xl:ml-[319px] 3xl:ml-[383px] w-[13%]">
                <Img src="images/img_reply.svg" className="reply" alt="reply" />
                <Text className="Padariabompo" as="h2" variant="h2">
                  PADARIA BOM PÃO
                </Text>
              </Row>
              <Img
                src="images/img_notification.svg"
                className="notification"
                alt="notification"
              />
              <Text className="rowcart" as="h2" variant="h2">
                Ronaldo Richards{" "}
              </Text>
              <Img
                src="images/img_avatarusurio.png"
                className="lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] rounded-radius50 lg:w-[53px] xl:w-[66px] 2xl:w-[75px] 3xl:w-[90px]"
                alt="AvatarUsurio"
              />
            </Row>
          </Row>
          <Row className="items-center justify-evenly w-[100%]">
            <Sidebar className="lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] w-[22%]" />
            <Column className="items-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[78%]">
              <Stack className="bg-white_A700 3xl:h-[1134px] lg:h-[672px] xl:h-[840px] 2xl:h-[945px] lg:px-[32px] xl:px-[40px] 2xl:px-[46px] 3xl:px-[55px] w-[100%]">
                <div className="absolute bg-white_A700 border border-gray_600 border-solid bottom-[2%] lg:h-[471px] xl:h-[589px] 2xl:h-[663px] 3xl:h-[795px] inset-x-[0] mx-[auto] rounded-radius4 w-[91%]"></div>
                <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[92%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-center w-[13%]">
                      <Img
                        src="images/img_ticket.svg"
                        className="save"
                        alt="ticket"
                      />
                      <Text className="cadastrarclien" as="h1" variant="h1">
                        Relatório
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] rounded-radius4 w-[100%]">
                      <Text
                        className="bg-indigo_700 font-medium xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius4 text-white_A700 w-[1021px]"
                        as="h3"
                        variant="h3"
                      >
                        REVISÃO DE ENTRADA DE CAIXA
                      </Text>
                      <Line className="bg-indigo_700 h-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius25 w-[100%]" />
                    </Column>
                    <Column className="items-center justify-end lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pt-[19px] xl:pt-[24px] 2xl:pt-[27px] 3xl:pt-[32px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Input
                          className="placeholder:text-white_A700 dadosdoclient"
                          wrapClassName="w-[100%]"
                          name="novo"
                          placeholder="Filtrar por:"
                          variant="FillIndigo700"
                        ></Input>
                        <Row className="items-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[91%]">
                          <Column className="items-center w-[37%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Text
                                className="rownovo_one"
                                as="h3"
                                variant="h3"
                              >
                                Data Inicial
                              </Text>
                              <Text
                                className="rownovo_one"
                                as="h3"
                                variant="h3"
                              >
                                Data Final
                              </Text>
                            </Row>
                            <Row className="items-center justify-between mt-[4px] w-[100%]">
                              <Text
                                className="zipcode_One1"
                                as="h3"
                                variant="h3"
                              >
                                00/00/2000
                              </Text>
                              <Text
                                className="zipcode_One1"
                                as="h3"
                                variant="h3"
                              >
                                00/00/2001
                              </Text>
                            </Row>
                          </Column>
                          <Button
                            className="font-medium lg:ml-[293px] xl:ml-[367px] 2xl:ml-[413px] 3xl:ml-[495px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                            size="sm"
                          >
                            EXPORTAR PARA EXCEL
                          </Button>
                        </Row>
                        <Button
                          className="font-medium 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[16%]"
                          size="sm"
                        >
                          PESQUISAR
                        </Button>
                        <Column className="items-center justify-start 3xl:mt-[108px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]">
                          <Row className="bg-indigo_700 items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[100%]">
                            <Text
                              className="font-medium mb-[1px] lg:ml-[131px] xl:ml-[164px] 2xl:ml-[185px] 3xl:ml-[222px] text-white_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              DATA
                            </Text>
                            <Text
                              className="font-medium mb-[1px] lg:mr-[158px] xl:mr-[198px] 2xl:mr-[223px] 3xl:mr-[267px] text-white_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              RECEBER
                            </Text>
                          </Row>
                          <Column
                            className="bg-cover bg-repeat justify-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[18px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 w-[75%]"
                            style={{
                              backgroundImage: "url('images/img_group7.svg')",
                            }}
                          >
                            <Stack className="lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[90%]">
                              <Column className="absolute items-center justify-start w-[100%]">
                                <Column className="items-center justify-start w-[100%]">
                                  <Row className="items-start justify-between w-[100%]">
                                    <Text
                                      className="zipcode_One1"
                                      as="h3"
                                      variant="h3"
                                    >
                                      00/00/2001
                                    </Text>
                                    <Text
                                      className="font-medium text-gray_600 w-[auto]"
                                      as="h3"
                                      variant="h3"
                                    >
                                      R$ 1000,80
                                    </Text>
                                  </Row>
                                  <Row className="items-start justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                                    <Column className="bg-white_A700 border border-black_900 border-solid justify-start mt-[4px] p-[4px] rounded-radius4 w-[26%]">
                                      <Text
                                        className="novo2"
                                        as="h3"
                                        variant="h3"
                                      >
                                        00/00/2001
                                      </Text>
                                    </Column>
                                    <Text
                                      className="font-medium text-gray_600 w-[auto]"
                                      as="h3"
                                      variant="h3"
                                    >
                                      R$ 1000,80
                                    </Text>
                                  </Row>
                                </Column>
                              </Column>
                              <div className="absolute bg-bluegray_100 bottom-[32%] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] left-[9%] rounded-radius50 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                            </Stack>
                            <Row className="items-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
                              <Text
                                className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] zipcode_One1"
                                as="h3"
                                variant="h3"
                              >
                                00/00/2001
                              </Text>
                              <Text
                                className="font-medium lg:ml-[285px] xl:ml-[357px] 2xl:ml-[402px] 3xl:ml-[482px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                R$ 1000,80
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Tela10relatrioPREVISPage;

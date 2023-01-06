import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, Input } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Tela5gerarpedidoPage = () => {
  const navigate = useNavigate();

  function handleNavigate23() {
    navigate("/telaprincipal");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-end mx-[auto] w-[100%]">
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
                onClick={handleNavigate23}
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
        <Stack className="3xl:h-[1171px] lg:h-[694px] xl:h-[868px] 2xl:h-[976px] w-[99%]">
          <Stack className="absolute 3xl:h-[1134px] lg:h-[672px] xl:h-[840px] 2xl:h-[945px] inset-y-[0] my-[auto] right-[0] w-[80%]">
            <Column className="absolute items-center justify-start right-[10%] rounded-radius4 top-[32%] w-[14%]">
              <Text
                className="font-medium text-gray_600 w-[auto]"
                as="h3"
                variant="h3"
              >
                Porcentagem de desconto
              </Text>
              <Button
                className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[97%]"
                variant="OutlineIndigo700"
              >
                10%
              </Button>
            </Column>
            <Row className="absolute items-start justify-evenly w-[100%]">
              <Column className="bg-white_A700 items-center justify-center lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[99%]">
                <Column className="items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[98%]">
                  <Column className="items-center justify-start w-[98%]">
                    <Row className="items-start w-[97%]">
                      <Img
                        src="images/img_map.svg"
                        className="lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] save"
                        alt="map"
                      />
                      <Text
                        className="ml-[4px] text-gray_600 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Gerar novo pedido
                      </Text>
                      <Button
                        className="font-medium lg:ml-[334px] xl:ml-[418px] 2xl:ml-[471px] 3xl:ml-[565px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[15%]"
                        size="sm"
                        variant="FillTeal400"
                      >
                        GERAR PEDIDO
                      </Button>
                      <Button
                        className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[12%]"
                        size="sm"
                        variant="FillPink900"
                      >
                        CANCELAR
                      </Button>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] rounded-radius4 w-[100%]">
                      <Text className="novo1" as="h3" variant="h3">
                        DADOS DO PEDIDO{" "}
                      </Text>
                      <Line className="bg-indigo_700 h-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius25 w-[100%]" />
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-gray_600 border-solid items-end justify-start lg:mb-[21px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius4 w-[96%]">
                  <Column className="justify-start 3xl:mb-[112px] lg:mb-[66px] xl:mb-[83px] 2xl:mb-[94px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius4 w-[90%]">
                    <Row className="items-start lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[76%]">
                      <Column className="justify-start pb-[1px] rounded-radius4 w-[90%]">
                        <Stack className="3xl:h-[111px] lg:h-[66px] xl:h-[82px] 2xl:h-[93px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[82%]">
                          <Column className="absolute h-[max-content] inset-y-[0] justify-start my-[auto] right-[0] rounded-radius4 w-[39%]">
                            <Text
                              className="font-medium lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] text-gray_600 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              DATA DE ENTREGA
                            </Text>
                            <div className="bg-white_A700 border border-indigo_700 border-solid lg:h-[47px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius4 w-[100%]"></div>
                          </Column>
                          <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] rounded-radius4 w-[87%]">
                            <Column className="justify-start w-[100%]">
                              <Text
                                className="font-medium xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                EMPRESA COMPRADORA
                              </Text>
                              <Row className="items-center justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                                <Input
                                  className="placeholder:text-gray_600 GroupThree"
                                  wrapClassName="w-[44%]"
                                  name="GroupFifteen"
                                  placeholder="PADARIA DA CASA"
                                  size="md"
                                  variant="OutlineIndigo700"
                                ></Input>
                                <Text
                                  className="font-medium text-gray_600 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  21/05/2023
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Stack>
                        <Column className="justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius4 w-[100%]">
                          <Text
                            className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] text-gray_600 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ENDREÇO DE ENTREGA
                          </Text>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] w-[100%] xl:mt-[8px]"
                            name="price One"
                            placeholder="AVENIDA JOAO ALFREDO, 375"
                            variant="OutlineIndigo700"
                          ></Input>
                        </Column>
                      </Column>
                      <div className="bg-bluegray_100 lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-radius75 w-[2%]"></div>
                    </Row>
                    <Column className="justify-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] rounded-radius4 w-[100%]">
                      <Row className="items-center justify-between rounded-radius4 w-[100%]">
                        <Input
                          className="placeholder:text-white_A700 dadosdoclient"
                          wrapClassName="w-[22%]"
                          name="GroupEight"
                          placeholder="PRODUTO"
                          variant="FillIndigo700"
                        ></Input>
                        <Stack className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] w-[77%]">
                          <Row className="absolute items-center justify-between left-[0] rounded-radius4 w-[77%]">
                            <Column className="bg-indigo_700 mt-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 w-[20%]">
                              <Text
                                className="font-medium my-[3px] text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                MARCA
                              </Text>
                            </Column>
                            <Column className="bg-indigo_700 mt-[1px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[37%]">
                              <Text
                                className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                UNIDADE DE COMPRA
                              </Text>
                            </Column>
                            <Column className="bg-indigo_700 mb-[1px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[36%]">
                              <Text
                                className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                VALOR
                              </Text>
                            </Column>
                          </Row>
                          <Row className="absolute items-center left-[0] lg:pr-[44px] xl:pr-[55px] 2xl:pr-[62px] 3xl:pr-[74px] rounded-radius4 w-[100%]">
                            <Text className="rowgrouptwo" as="h3" variant="h3">
                              MARCA
                            </Text>
                            <Input
                              className="placeholder:text-white_A700 dadosdoclient"
                              wrapClassName="2xl:ml-[19px] 3xl:ml-[22px] lg:ml-[13px] mt-[1px] w-[31%] xl:ml-[16px]"
                              name="GroupThree"
                              placeholder="UNIDADE DE COMPRA"
                              variant="FillIndigo700"
                            ></Input>
                            <Row className="items-center justify-center mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius4 w-[46%]">
                              <Input
                                className="placeholder:text-white_A700 dadosdoclient"
                                wrapClassName="w-[66%]"
                                name="GroupEighteen"
                                placeholder="VALOR"
                                variant="FillIndigo700"
                              ></Input>
                              <Button className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[28%]">
                                QTD
                              </Button>
                            </Row>
                          </Row>
                        </Stack>
                      </Row>
                      <Row className="items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius4 w-[93%]">
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="mt-[1px] w-[23%]"
                          name="language One"
                          placeholder="FARINHA  DE TRIGO"
                        ></Input>
                        <Button
                          className="font-medium xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-gray_600 w-[13%]"
                          variant="OutlineBluegray400"
                        >
                          RECIFE FRIO
                        </Button>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="2xl:ml-[19px] 3xl:ml-[22px] lg:ml-[13px] mt-[1px] w-[23%] xl:ml-[16px]"
                          name="GroupThree One"
                          placeholder="PACOTE"
                        ></Input>
                        <Row className="items-center justify-between mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius4 w-[35%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="w-[66%]"
                            name="price Two"
                            placeholder="R$ 4,50"
                          ></Input>
                          <Text className="rowprice_two" as="h3" variant="h3">
                            10
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center ml-[2px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius4 w-[93%]">
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="mt-[1px] w-[23%]"
                          name="language Two"
                          placeholder="FARINHA  DE TRIGO"
                        ></Input>
                        <Text
                          className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] colunadedados2"
                          as="h3"
                          variant="h3"
                        >
                          OLINDA
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="2xl:ml-[19px] 3xl:ml-[22px] lg:ml-[13px] mt-[1px] w-[23%] xl:ml-[16px]"
                          name="GroupThree Two"
                          placeholder="PACOTE"
                        ></Input>
                        <Row className="items-center justify-between mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius4 w-[35%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="w-[66%]"
                            name="price Three"
                            placeholder="R$ 5,50"
                          ></Input>
                          <Text className="rowprice_two" as="h3" variant="h3">
                            10
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center ml-[2px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius4 w-[93%]">
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="mt-[1px] w-[23%]"
                          name="language Three"
                          placeholder="FARINHA  DE TRIGO"
                        ></Input>
                        <Text
                          className="bg-white_A700 border border-bluegray_400 border-solid font-medium xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius4 text-gray_600 w-[101px]"
                          as="h3"
                          variant="h3"
                        >
                          PAULISTA
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="2xl:ml-[19px] 3xl:ml-[22px] lg:ml-[13px] mt-[1px] w-[23%] xl:ml-[16px]"
                          name="GroupThree Three"
                          placeholder="PACOTE"
                        ></Input>
                        <Row className="items-center justify-between mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius4 w-[35%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="w-[66%]"
                            name="price Four"
                            placeholder="R$ 6,50"
                          ></Input>
                          <Text className="rowprice_two" as="h3" variant="h3">
                            10
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center ml-[2px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius4 w-[93%]">
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="mt-[1px] w-[23%]"
                          name="language Four"
                          placeholder="FARINHA  DE TRIGO"
                        ></Input>
                        <Text
                          className="bg-white_A700 border border-bluegray_400 border-solid font-medium xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[22px] xl:pr-[27px] 2xl:pr-[31px] 3xl:pr-[37px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius4 text-gray_600 w-[101px]"
                          as="h3"
                          variant="h3"
                        >
                          CARUARU
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="2xl:ml-[19px] 3xl:ml-[22px] lg:ml-[13px] mt-[1px] w-[23%] xl:ml-[16px]"
                          name="GroupThree Four"
                          placeholder="PACOTE"
                        ></Input>
                        <Row className="items-center justify-between mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius4 w-[35%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="w-[66%]"
                            name="price Five"
                            placeholder="R$ 4,50"
                          ></Input>
                          <Text className="rowprice_two" as="h3" variant="h3">
                            10
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center ml-[2px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius4 w-[93%]">
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="mt-[1px] w-[23%]"
                          name="language Five"
                          placeholder="FARINHA  DE TRIGO"
                        ></Input>
                        <Text
                          className="bg-white_A700 border border-bluegray_400 border-solid font-medium xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] mt-[1px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[18px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius4 text-gray_600 w-[101px]"
                          as="h3"
                          variant="h3"
                        >
                          NORONHA
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="2xl:ml-[19px] 3xl:ml-[22px] lg:ml-[13px] mt-[1px] w-[23%] xl:ml-[16px]"
                          name="GroupThree Five"
                          placeholder="PACOTE"
                        ></Input>
                        <Row className="items-center justify-between mb-[1px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rounded-radius4 w-[35%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="w-[66%]"
                            name="price Seven"
                            placeholder="R$ 10,50"
                          ></Input>
                          <Text className="rowprice_two" as="h3" variant="h3">
                            10
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Img
                src="images/img_bookmark.svg"
                className="bookmark"
                alt="bookmark"
              />
            </Row>
          </Stack>
          <Sidebar className="absolute inset-y-[0] left-[0] my-[auto] w-[22%]" />
        </Stack>
      </Column>
    </>
  );
};

export default Tela5gerarpedidoPage;

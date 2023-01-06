import React from "react";

import { Column, Row, Img, Text, Line, Button, Stack, Input } from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const Tela4cadastraroualtePage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/tela2cadastrodocliente");
  }
  function handleNavigate8() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-end mx-[auto] w-[100%]">
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
              <Row
                className="common-pointer items-center justify-center lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] w-[11%]"
                onClick={handleNavigate7}
              >
                <Text className="menu" as="h2" variant="h2">
                  Clientes
                </Text>
                <Text
                  className="common-pointer Produtos"
                  as="h2"
                  variant="h2"
                  onClick={handleNavigate8}
                >
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
            <Sidebar1 className="lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] w-[22%]" />
            <Column className="items-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[78%]">
              <Column className="bg-white_A700 items-center justify-center lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[100%]">
                <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Row className="items-start justify-between w-[99%]">
                      <Row className="items-start justify-evenly lg:mb-[17px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] w-[28%]">
                        <Img
                          src="images/img_map.svg"
                          className="save"
                          alt="map One"
                        />
                        <Text
                          className="text-gray_600 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          Cadastrar novo produto
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:pr-[34px] xl:pr-[42px] 2xl:pr-[48px] 3xl:pr-[57px] rounded-radius4 w-[32%]">
                        <Button
                          className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                          size="sm"
                          variant="FillTeal400"
                        >
                          SALVAR
                        </Button>
                        <Button
                          className="font-medium lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[43%]"
                          size="sm"
                          variant="FillPink900"
                        >
                          CANCELAR
                        </Button>
                      </Row>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] rounded-radius4 w-[100%]">
                      <Text className="novo1" as="h3" variant="h3">
                        DADOS DOS PRODUTOS DA EMPRESA{" "}
                      </Text>
                      <Line className="bg-indigo_700 h-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius25 w-[100%]" />
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-gray_600 border-solid items-center justify-start xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[29px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius4 w-[100%]">
                  <Column className="justify-start lg:my-[17px] xl:my-[22px] 2xl:my-[25px] 3xl:my-[30px] rounded-radius4 w-[96%]">
                    <Row className="items-center rounded-radius4 w-[89%]">
                      <Text
                        className="bg-white_A700 border border-indigo_700 border-solid font-medium lg:pb-[19px] xl:pb-[24px] 2xl:pb-[27px] 3xl:pb-[32px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[7px] xl:pl-[9px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius4 text-gray_600 w-[186px]"
                        as="h3"
                        variant="h3"
                      >
                        122
                      </Text>
                      <Text
                        className="bg-white_A700 border border-indigo_700 border-solid font-medium lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[7px] xl:pl-[9px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] rounded-radius4 text-gray_600 w-[186px]"
                        as="h3"
                        variant="h3"
                      >
                        FARINHA DE TRIGO
                      </Text>
                      <Text
                        className="bg-white_A700 border border-indigo_700 border-solid font-medium lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[7px] xl:pl-[9px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] rounded-radius4 text-gray_600 w-[182px]"
                        as="h3"
                        variant="h3"
                      >
                        COM FERMENTO
                      </Text>
                      <Text
                        className="bg-white_A700 border border-indigo_700 border-solid font-medium lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] rounded-radius4 text-gray_600 w-[191px]"
                        as="h3"
                        variant="h3"
                      >
                        CATEGORIA
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] rounded-radius4 w-[94%]">
                      <Stack className="lg:h-[291px] xl:h-[363px] 2xl:h-[409px] 3xl:h-[490px] rounded-radius4 w-[100%]">
                        <Column className="absolute items-center justify-start right-[0] rounded-radius4 w-[76%]">
                          <Column className="justify-start w-[100%]">
                            <Row className="items-center lg:mr-[100px] xl:mr-[126px] 2xl:mr-[142px] 3xl:mr-[170px] w-[78%]">
                              <Text
                                className="rowgrouptwo"
                                as="h3"
                                variant="h3"
                              >
                                VALOR
                              </Text>
                              <Button className="font-medium lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]">
                                UNDIDADE COMPRADA
                              </Button>
                              <Input
                                className="placeholder:text-white_A700 dadosdoclient"
                                wrapClassName="2xl:ml-[19px] 3xl:ml-[22px] lg:ml-[13px] mb-[1px] w-[36%] xl:ml-[16px]"
                                name="GroupFour One"
                                placeholder="QTD ESTOQUE"
                                variant="FillIndigo700"
                              ></Input>
                            </Row>
                            <Button
                              className="font-medium lg:ml-[275px] xl:ml-[345px] 2xl:ml-[388px] 3xl:ml-[465px] lg:mt-[239px] xl:mt-[299px] 2xl:mt-[337px] 3xl:mt-[404px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                              variant="FillCyan800"
                            >
                              REPLICAR CADASTRO PARA FILIAIS
                            </Button>
                          </Column>
                        </Column>
                        <Input
                          className="absolute left-[0] placeholder:text-white_A700 top-[0] dadosdoclient"
                          wrapClassName="absolute mt-[1px] top-[0] w-[22%]"
                          name="GroupEight"
                          placeholder="MARCA"
                          variant="FillIndigo700"
                        ></Input>
                        <Row className="absolute items-center justify-between left-[0] rounded-radius4 top-[11%] w-[83%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            name="GroupFive One"
                            placeholder="RECIFE FRIO"
                          ></Input>
                          <Text className="colunadedados2" as="h3" variant="h3">
                            R$ 4,50
                          </Text>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            name="GroupThree One"
                            placeholder="PACOTE"
                          ></Input>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mb-[1px] w-[26%]"
                            name="zipcode"
                            placeholder="1500"
                          ></Input>
                        </Row>
                        <Row className="absolute items-center justify-between left-[0] rounded-radius4 top-[23%] w-[83%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            name="marcaCounter"
                            placeholder="MARCA 01"
                          ></Input>
                          <Text className="colunadedados2" as="h3" variant="h3">
                            000000
                          </Text>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            type="number"
                            name="mobileNo"
                            placeholder="0000000000"
                          ></Input>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mb-[1px] w-[26%]"
                            type="number"
                            name="GroupFour Two"
                            placeholder="00000000"
                          ></Input>
                        </Row>
                        <Row className="absolute items-center justify-between left-[0] rounded-radius4 top-[36%] w-[83%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            name="marcaCounter One"
                            placeholder="MARCA 01"
                          ></Input>
                          <Text className="colunadedados2" as="h3" variant="h3">
                            000000
                          </Text>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            type="number"
                            name="mobileNo One"
                            placeholder="0000000000"
                          ></Input>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mb-[1px] w-[26%]"
                            type="number"
                            name="GroupFour Three"
                            placeholder="00000000"
                          ></Input>
                        </Row>
                        <Row className="absolute bottom-[43%] items-center justify-between left-[0] rounded-radius4 w-[83%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            name="marcaCounter Two"
                            placeholder="MARCA 01"
                          ></Input>
                          <Text className="colunadedados2" as="h3" variant="h3">
                            000000
                          </Text>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            type="number"
                            name="mobileNo Two"
                            placeholder="0000000000"
                          ></Input>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mb-[1px] w-[26%]"
                            type="number"
                            name="GroupFour Four"
                            placeholder="00000000"
                          ></Input>
                        </Row>
                        <Row className="absolute bottom-[31%] items-center justify-between left-[0] rounded-radius4 w-[83%]">
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            name="marcaCounter Three"
                            placeholder="MARCA 01"
                          ></Input>
                          <Text className="colunadedados2" as="h3" variant="h3">
                            000000
                          </Text>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mt-[1px] w-[26%]"
                            type="number"
                            name="mobileNo Three"
                            placeholder="0000000000"
                          ></Input>
                          <Input
                            className="placeholder:text-gray_600 GroupThree"
                            wrapClassName="mb-[1px] w-[26%]"
                            type="number"
                            name="GroupFour Five"
                            placeholder="00000000"
                          ></Input>
                        </Row>
                      </Stack>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Tela4cadastraroualtePage;

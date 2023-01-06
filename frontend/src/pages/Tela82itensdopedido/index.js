import React from "react";

import { Column, Row, Img, Text, Line, Stack, Input, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Tela82itensdopedidoPage = () => {
  const navigate = useNavigate();

  function handleNavigate25() {
    navigate("/telaprincipal");
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
                onClick={handleNavigate25}
              >
                <Text className="menu" as="h2" variant="h2">
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
              <Stack className="bg-white_A700 3xl:h-[1134px] lg:h-[672px] xl:h-[840px] 2xl:h-[945px] lg:px-[34px] xl:px-[43px] 2xl:px-[49px] 3xl:px-[58px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_600 border-solid bottom-[1%] inset-x-[0] items-center justify-start mx-[auto] lg:p-[39px] xl:p-[49px] 2xl:p-[56px] 3xl:p-[67px] rounded-radius4 w-[91%]">
                  <Row className="items-center lg:mb-[201px] xl:mb-[251px] 2xl:mb-[283px] 3xl:mb-[339px] rounded-radius4 w-[91%]">
                    <Column className="items-center rounded-radius4 w-[48%]">
                      <Input
                        className="placeholder:text-white_A700 GroupEight1"
                        wrapClassName="w-[100%]"
                        name="GroupEight"
                        placeholder="PREVISÃO DE ENTREGA"
                        variant="FillIndigo700"
                      ></Input>
                      <Column className="bg-white_A700 border border-bluegray_400 border-solid justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius4 w-[100%]">
                        <Text
                          className="columndescription"
                          as="h3"
                          variant="h3"
                        >
                          <span className="text-gray_600 font-roboto lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Previsão de entrega:
                          </span>
                          <span className="text-gray_600 font-roboto font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            {" "}
                            00/00/2000
                            <br />
                          </span>
                          <span className="text-gray_600 font-roboto lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            Rua 000000000000000000000
                            <br />
                            CEP 000000-000
                            <br />
                            Fone: 00 0000000000
                          </span>
                        </Text>
                      </Column>
                    </Column>
                    <Column className="items-center lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] rounded-radius4 w-[48%]">
                      <Input
                        className="placeholder:text-white_A700 GroupEight1"
                        wrapClassName="w-[100%]"
                        name="GroupEight One"
                        placeholder="DADOS DO CLIENTE"
                        variant="FillIndigo700"
                      ></Input>
                      <Column className="bg-white_A700 border border-bluegray_400 border-solid justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius4 w-[100%]">
                        <Text
                          className="columndescription_one"
                          as="h3"
                          variant="h3"
                        >
                          QUALQUER NOME
                          <br />
                          Razão Social: 00000000000000000000000000
                          <br />
                          End. Rua zezinho 0000 000000000000000
                          <br />
                          CEP: 00 0000000000
                          <br />
                          Email: @hshshgsgsgsgsg.134.com
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[91%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-center w-[19%]">
                      <Img
                        src="images/img_cart_30X30.svg"
                        className="save"
                        alt="cart One"
                      />
                      <Text
                        className="ml-[2px] text-gray_600 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Itens do pedido
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] rounded-radius4 w-[100%]">
                      <Text className="novo1" as="h3" variant="h3">
                        DADOS DO PEDIDO
                      </Text>
                      <Line className="bg-indigo_700 h-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius25 w-[100%]" />
                    </Column>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[357px] 3xl:mt-[428px] lg:mt-[253px] w-[100%] xl:mt-[317px]"
                      name="price One"
                      placeholder="PRODUTOS DO PEDIDO"
                      variant="FillIndigo700"
                    ></Input>
                    <Column className="items-center justify-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius4 w-[90%]">
                      <List
                        className="gap-[0] min-h-[auto] lg:pt-[21px] xl:pt-[26px] 2xl:pt-[30px] 3xl:pt-[36px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="listzipcode1">
                          <Row className="bg-white_A700 border border-black_900 border-solid items-center justify-between p-[4px] rounded-radius4 w-[18%]">
                            <Text className="novo2" as="h3" variant="h3">
                              000000
                            </Text>
                            <div className="bg-bluegray_100 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] mr-[2px] rounded-radius50 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                          </Row>
                          <Text className="zipcode_One" as="h3" variant="h3">
                            000000
                          </Text>
                          <Text className="zipcode_Two" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Five" as="h3" variant="h3">
                            0000
                          </Text>
                          <Text className="novo3" as="h3" variant="h3">
                            000
                          </Text>
                          <Text className="novo_One" as="h3" variant="h3">
                            100.000,00
                          </Text>
                        </Row>
                        <Row className="listzipcode1">
                          <Text className="novo_One1" as="h3" variant="h3">
                            Produto
                          </Text>
                          <Text className="novo_One_One" as="h3" variant="h3">
                            Código
                          </Text>
                          <Text className="zipcode_Two" as="h3" variant="h3">
                            Marca
                          </Text>
                          <Text className="novo_Three" as="h3" variant="h3">
                            Und de Compra
                          </Text>
                          <Text className="GroupThirtySix" as="h3" variant="h3">
                            Quantidade
                          </Text>
                          <Text className="novo_Four" as="h3" variant="h3">
                            Preço un/R$
                          </Text>
                          <Text className="novo_Five" as="h3" variant="h3">
                            Desconto %
                          </Text>
                          <Text className="novo_Six" as="h3" variant="h3">
                            TOTAL
                          </Text>
                        </Row>
                        <Row className="listzipcode1">
                          <Text className="zipcode_One1" as="h3" variant="h3">
                            000000
                          </Text>
                          <Text className="zipcode_One" as="h3" variant="h3">
                            000000
                          </Text>
                          <Text className="zipcode_Two" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text
                            className="zipcode_Five_One"
                            as="h3"
                            variant="h3"
                          >
                            0000
                          </Text>
                          <Text className="novo_Two" as="h3" variant="h3">
                            000
                          </Text>
                          <Text className="novo_One" as="h3" variant="h3">
                            100.000,00
                          </Text>
                        </Row>
                        <Row className="items-center justify-between xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] mt-[2px] rounded-radius4 w-[100%]">
                          <Text className="zipcode_One1" as="h3" variant="h3">
                            000000
                          </Text>
                          <Text className="zipcode_One" as="h3" variant="h3">
                            000000
                          </Text>
                          <Text className="zipcode_Two" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Five" as="h3" variant="h3">
                            0000
                          </Text>
                          <Text className="novo_Five" as="h3" variant="h3">
                            000
                          </Text>
                          <Text className="novo_One" as="h3" variant="h3">
                            100.000,00
                          </Text>
                        </Row>
                        <Row className="items-center justify-between xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] mt-[2px] rounded-radius4 w-[100%]">
                          <Text className="zipcode_One1" as="h3" variant="h3">
                            000000
                          </Text>
                          <Text className="zipcode_One" as="h3" variant="h3">
                            000000
                          </Text>
                          <Text className="zipcode_Two" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Three" as="h3" variant="h3">
                            00000
                          </Text>
                          <Text className="zipcode_Five" as="h3" variant="h3">
                            0000
                          </Text>
                          <Text className="novo_Five" as="h3" variant="h3">
                            000
                          </Text>
                          <Text className="novo_One" as="h3" variant="h3">
                            100.000,00
                          </Text>
                        </Row>
                      </List>
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

export default Tela82itensdopedidoPage;

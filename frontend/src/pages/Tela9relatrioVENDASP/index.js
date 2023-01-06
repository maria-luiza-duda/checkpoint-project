import React from "react";

import { Column, Row, Img, Text, Line, List, Stack, Input } from "components";
import { useNavigate } from "react-router-dom";

const Tela9relatrioVENDASPPage = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/telaprincipal");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <header className="w-[99%]">
            <Row className="bg-indigo_700 items-center p-[2px] w-[100%]">
              <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] w-[98%]">
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
                    onClick={handleNavigate22}
                  >
                    Clientes
                  </Text>
                  <Text className="Produtos" as="h2" variant="h2">
                    Produtos
                  </Text>
                </Row>
                <Row className="items-center justify-center lg:ml-[226px] xl:ml-[283px] 2xl:ml-[319px] 3xl:ml-[383px] w-[13%]">
                  <Img
                    src="images/img_reply.svg"
                    className="reply"
                    alt="reply"
                  />
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
          </header>
          <Row className="items-center justify-evenly w-[100%]">
            <Column className="bg-gray_50 items-center lg:mb-[22px] xl:mb-[27px] 2xl:mb-[31px] 3xl:mb-[37px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[22%]">
              <List
                className="gap-[0] min-h-[auto] 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[94px] w-[69%]"
                orientation="vertical"
              >
                <Column className="items-center justify-start lg:mr-[14px] xl:mr-[18px] 2xl:mr-[21px] 3xl:mr-[25px] lg:my-[16px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[90%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnpedidos" as="h3" variant="h3">
                      PEDIDOS
                    </Text>
                    <Row className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[86%]">
                      <Img
                        src="images/img_bluetooth.svg"
                        className="bookmark"
                        alt="bluetooth"
                      />
                      <Text className="rowbluetooth" as="h3" variant="h3">
                        Gerar novos pedidos
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                      <Img
                        src="images/img_clock.svg"
                        className="bookmark"
                        alt="clock"
                      />
                      <Text className="rowclock" as="h3" variant="h3">
                        Pedido sem faturamento
                      </Text>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[78%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="bookmark"
                        alt="checkmark"
                      />
                      <Text className="rowclock" as="h3" variant="h3">
                        Pedidos faturados
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start lg:my-[16px] xl:my-[20px] 2xl:my-[23px] 3xl:my-[27px] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="columnpedidos" as="h3" variant="h3">
                      RELATÓRIOS
                    </Text>
                    <Row className="items-center ml-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[87%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="bookmark"
                        alt="checkmark One"
                      />
                      <Text className="rowclock" as="h3" variant="h3">
                        Cliente Ativos e Inativos
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[75%]">
                      <Img
                        src="images/img_map.svg"
                        className="bookmark"
                        alt="map"
                      />
                      <Text className="rowbluetooth" as="h3" variant="h3">
                        Vendas por produto
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="bookmark"
                        alt="arrowright"
                      />
                      <Text className="rowclock" as="h3" variant="h3">
                        Revisão de entrada de caixa{" "}
                      </Text>
                    </Row>
                    <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                      <Img
                        src="images/img_info.svg"
                        className="bookmark"
                        alt="info"
                      />
                      <Text className="rowbluetooth" as="h3" variant="h3">
                        Estoque
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </List>
              <Row className="items-start lg:mb-[236px] xl:mb-[295px] 2xl:mb-[332px] 3xl:mb-[398px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[41%]">
                <Img
                  src="images/img_question.svg"
                  className="question"
                  alt="question"
                />
                <Text className="Ajudaesuporte" as="h3" variant="h3">
                  Ajuda / Suporte
                </Text>
              </Row>
            </Column>
            <Column className="items-center lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[78%]">
              <Stack className="bg-white_A700 3xl:h-[1134px] lg:h-[672px] xl:h-[840px] 2xl:h-[945px] lg:px-[34px] xl:px-[43px] 2xl:px-[49px] 3xl:px-[58px] w-[100%]">
                <Column className="absolute bg-white_A700 border border-gray_600 border-solid bottom-[1%] inset-x-[0] justify-end mx-[auto] lg:p-[149px] xl:p-[186px] 2xl:p-[210px] 3xl:p-[252px] rounded-radius4 w-[91%]">
                  <div className="bg-bluegray_100 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] ml-[4px] lg:mt-[170px] xl:mt-[213px] 2xl:mt-[240px] 3xl:mt-[288px] rounded-radius50 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                </Column>
                <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[91%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-center w-[13%]">
                      <Img
                        src="images/img_sort.svg"
                        className="save"
                        alt="sort"
                      />
                      <Text
                        className="ml-[3px] text-gray_600 w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Relatório
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] rounded-radius4 w-[100%]">
                      <Text className="novo1" as="h3" variant="h3">
                        VENDAS POR PRODUTO
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
                        <Column className="items-center justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[34%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Text className="rownovo_one" as="h3" variant="h3">
                              Data Inicial
                            </Text>
                            <Text className="rownovo_one" as="h3" variant="h3">
                              Data Final
                            </Text>
                          </Row>
                          <Row className="items-center justify-between mt-[4px] w-[100%]">
                            <Text className="zipcode_One1" as="h3" variant="h3">
                              00/00/2000
                            </Text>
                            <Text className="zipcode_One1" as="h3" variant="h3">
                              00/00/2001
                            </Text>
                          </Row>
                          <Row className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                            <Text className="rownovo_five" as="h3" variant="h3">
                              EXPORTAR
                            </Text>
                            <Text className="rownovo_five" as="h3" variant="h3">
                              PESQUISAR
                            </Text>
                          </Row>
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

export default Tela9relatrioVENDASPPage;

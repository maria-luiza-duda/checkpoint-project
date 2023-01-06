import React from "react";

import {
  Stack,
  Row,
  Column,
  Img,
  Text,
  Line,
  Input,
  Button,
  List,
} from "components";
import { useNavigate } from "react-router-dom";

const Tela11relatrioCLIENTESPage = () => {
  const navigate = useNavigate();

  function handleNavigate21() {
    navigate("/telaprincipal");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-roboto 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] mx-[auto] w-[100%]">
        <Stack className="absolute 2xl:h-[1065px] 3xl:h-[1278px] lg:h-[757px] xl:h-[947px] w-[100%]">
          <Row className="absolute bottom-[0] items-start justify-evenly right-[0] w-[78%]">
            <Stack className="bg-white_A700 3xl:h-[1134px] lg:h-[672px] xl:h-[840px] 2xl:h-[945px] lg:px-[35px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] w-[99%]">
              <div className="absolute bg-white_A700 border border-gray_600 border-solid bottom-[1%] lg:h-[471px] xl:h-[589px] 2xl:h-[663px] 3xl:h-[795px] inset-x-[0] mx-[auto] rounded-radius4 w-[91%]"></div>
              <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[1%] w-[91%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-center ml-[2px] w-[12%]">
                    <Img
                      src="images/img_file.svg"
                      className="save"
                      alt="file"
                    />
                    <Text
                      className="text-gray_600 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Relatório
                    </Text>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] rounded-radius4 w-[100%]">
                    <Text className="novo1" as="h3" variant="h3">
                      CLIENTES ATIVOS E INATIVOS
                    </Text>
                    <Line className="bg-indigo_700 h-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius25 w-[100%]" />
                  </Column>
                  <Column className="items-center justify-end lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pt-[19px] xl:pt-[24px] 2xl:pt-[27px] 3xl:pt-[32px] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Input
                        className="placeholder:text-white_A700 dadosdoclient"
                        wrapClassName="w-[100%]"
                        name="novo"
                        placeholder="Filtrar por última compra:"
                        variant="FillIndigo700"
                      ></Input>
                      <Row className="items-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[89%]">
                        <Column className="items-center justify-start w-[38%]">
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
                        </Column>
                        <Button
                          className="font-medium lg:ml-[281px] xl:ml-[352px] 2xl:ml-[396px] 3xl:ml-[475px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[18%]"
                          size="sm"
                        >
                          EXPORTAR PARA EXCEL
                        </Button>
                      </Row>
                      <Text
                        className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rownovo_five"
                        as="h3"
                        variant="h3"
                      >
                        PESQUISAR
                      </Text>
                      <Column className="bg-white_A700 border border-gray_600 border-solid justify-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[75%]">
                        <Column className="justify-start lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[95%]">
                          <Text
                            className="font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] text-gray_600 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Nome do cliente
                          </Text>
                          <List
                            className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pt-[53px] xl:pt-[66px] 2xl:pt-[75px] 3xl:pt-[90px] w-[100%]"
                            orientation="vertical"
                          >
                            <Row className="items-start justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[100%]">
                              <Column className="justify-start w-[18%]">
                                <Text
                                  className="font-medium text-gray_600 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  PIPOCAS ESTRELAS
                                </Text>
                                <div className="bg-bluegray_100 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[59px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] mt-[1px] rounded-radius50 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                              </Column>
                              <Text
                                className="Cnpj2462658"
                                as="h3"
                                variant="h3"
                              >
                                Cnpj: 24.626.585/0001-18
                              </Text>
                              <Text
                                className="font-medium mt-[2px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                UF: PA
                              </Text>
                              <Text
                                className="Cnpj2462658"
                                as="h3"
                                variant="h3"
                              >
                                Data da última compra: 00/00/0000
                              </Text>
                            </Row>
                            <Row className="items-start justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[100%]">
                              <Text
                                className="Cnpj2462658"
                                as="h3"
                                variant="h3"
                              >
                                PIPOCAS ESTRELAS
                              </Text>
                              <Text
                                className="Cnpj2462658"
                                as="h3"
                                variant="h3"
                              >
                                Cnpj: 24.626.585/0001-18
                              </Text>
                              <Text
                                className="Cnpj2462658"
                                as="h3"
                                variant="h3"
                              >
                                UF: PA
                              </Text>
                              <Text
                                className="font-medium mb-[1px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Data da última compra: 00/00/0000
                              </Text>
                            </Row>
                            <Row className="items-start justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[100%]">
                              <Text
                                className="font-medium mt-[4px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                PIPOCAS ESTRELAS
                              </Text>
                              <Text
                                className="font-medium my-[1px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Cnpj: 24.626.585/0001-18
                              </Text>
                              <Text
                                className="Cnpj2462658"
                                as="h3"
                                variant="h3"
                              >
                                UF: PA
                              </Text>
                              <Text
                                className="font-medium mb-[3px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Data da última compra: 00/00/0000
                              </Text>
                            </Row>
                            <Row className="items-start justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[100%]">
                              <Text
                                className="Cnpj2462658"
                                as="h3"
                                variant="h3"
                              >
                                PIPOCAS ESTRELAS
                              </Text>
                              <Text
                                className="font-medium mb-[1px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Cnpj: 24.626.585/0001-18
                              </Text>
                              <Text
                                className="Ajudaesuporte"
                                as="h3"
                                variant="h3"
                              >
                                UF: PA
                              </Text>
                              <Text
                                className="font-medium my-[1px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Data da última compra: 00/00/0000
                              </Text>
                            </Row>
                            <Row className="items-start justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[100%]">
                              <Text
                                className="font-medium mt-[2px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                PIPOCAS ESTRELAS
                              </Text>
                              <Text
                                className="font-medium mb-[3px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Cnpj: 24.626.585/0001-18
                              </Text>
                              <Text
                                className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                UF: PA
                              </Text>
                              <Text
                                className="font-medium my-[2px] text-gray_600 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Data da última compra: 00/00/0000
                              </Text>
                            </Row>
                          </List>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Img
              src="images/img_bookmark_gray_600.png"
              className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[1%]"
              alt="bookmark"
            />
          </Row>
          <aside className="absolute inset-y-[0] left-[0] my-[auto] w-[22%]">
            <div className="">
              <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[100%]">
                <div className="absolute bg-gray_50 bottom-[0] 3xl:h-[1134px] lg:h-[672px] xl:h-[840px] 2xl:h-[945px] w-[100%]"></div>
                <Column className="absolute justify-start left-[4%] top-[11%] w-[64%]">
                  <Column className="items-center justify-start w-[92%]">
                    <Column className="justify-start w-[100%]">
                      <Text className="columnpedidos" as="h3" variant="h3">
                        PEDIDOS
                      </Text>
                      <Row className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[82%]">
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
                        <Text className="rowbluetooth" as="h3" variant="h3">
                          Pedidos sem faturamento
                        </Text>
                      </Row>
                      <Row className="items-center ml-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[75%]">
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
                  <Column className="items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[98%]">
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
                  <Row className="items-start justify-end ml-[auto] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[59%]">
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
              </Stack>
            </div>
          </aside>
        </Stack>
        <Row className="absolute bg-indigo_700 inset-x-[0] items-center p-[2px] top-[0] w-[100%]">
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
                onClick={handleNavigate21}
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
      </Stack>
    </>
  );
};

export default Tela11relatrioCLIENTESPage;

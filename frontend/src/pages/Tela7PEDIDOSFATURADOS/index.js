import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, Input } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Tela7PEDIDOSFATURADOSPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/telaprincipal");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Row className="bg-indigo_700 items-center p-[2px] w-[100%]">
            <Row className="items-end lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] w-[97%]">
              <Row className="items-start justify-evenly lg:mb-[16px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[10%]">
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
                className="common-pointer items-start justify-center lg:mb-[19px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] lg:ml-[44px] xl:ml-[56px] 2xl:ml-[63px] 3xl:ml-[75px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[11%]"
                onClick={handleNavigate12}
              >
                <Text className="mt-[3px] menu" as="h2" variant="h2">
                  Clientes
                </Text>
                <Text className="mb-[3px] Produtos" as="h2" variant="h2">
                  Produtos
                </Text>
              </Row>
              <Row className="items-center justify-center lg:mb-[13px] xl:mb-[16px] 2xl:mb-[19px] 3xl:mb-[22px] lg:ml-[226px] xl:ml-[283px] 2xl:ml-[319px] 3xl:ml-[383px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[13%]">
                <Img src="images/img_reply.svg" className="reply" alt="reply" />
                <Text className="Padariabompo" as="h2" variant="h2">
                  PADARIA BOM PÃO
                </Text>
              </Row>
              <Img
                src="images/img_notification.svg"
                className="lg:my-[12px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] notification"
                alt="notification"
              />
              <Text className="rowcart1" as="h2" variant="h2">
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
              <Column className="bg-white_A700 justify-center lg:pl-[35px] xl:pl-[44px] 2xl:pl-[50px] 3xl:pl-[60px] lg:py-[35px] xl:py-[44px] 2xl:py-[50px] 3xl:py-[60px] w-[100%]">
                <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[95%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start w-[12%]">
                      <Img
                        src="images/img_cart_26X26.svg"
                        className="lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:w-[18px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                        alt="cart One"
                      />
                      <Text className="cadastrarclien" as="h1" variant="h1">
                        Pedidos
                      </Text>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] rounded-radius4 w-[100%]">
                      <Text className="novo1" as="h3" variant="h3">
                        PEDIDOS FATURADOS
                      </Text>
                      <Line className="bg-indigo_700 h-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius25 w-[100%]" />
                    </Column>
                  </Column>
                </Column>
                <Stack className="lg:h-[471px] xl:h-[589px] 2xl:h-[663px] 3xl:h-[795px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:pr-[34px] xl:pr-[43px] 2xl:pr-[49px] 3xl:pr-[58px] rounded-radius4 w-[100%]">
                  <div className="absolute bg-white_A700 border border-gray_600 border-solid lg:h-[471px] xl:h-[589px] 2xl:h-[663px] 3xl:h-[795px] left-[0] rounded-radius4 w-[95%]"></div>
                  <Column className="absolute items-center justify-start left-[2%] top-[3%] w-[89%]">
                    <Row className="items-center justify-between w-[96%]">
                      <Button className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[20%]">
                        MÊS: JUNHO/2000
                      </Button>
                      <Text
                        className="bg-white_A700 border border-bluegray_400 border-solid font-medium mb-[1px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius4 text-gray_600 w-[497px]"
                        as="h3"
                        variant="h3"
                      >
                        informe o código do pedido ou a nota fiscal
                      </Text>
                      <Button
                        className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center text-indigo_700 w-[10%]"
                        variant="OutlineBluegray400"
                      >
                        Pesquisar
                      </Button>
                    </Row>
                    <Row className="bg-indigo_700 items-start 3xl:mt-[114px] lg:mt-[67px] xl:mt-[84px] 2xl:mt-[95px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius4 w-[99%]">
                      <Text
                        className="mb-[4px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        DATA DO PEDIDO
                      </Text>
                      <Text
                        className="lg:ml-[116px] xl:ml-[145px] 2xl:ml-[164px] 3xl:ml-[196px] mt-[1px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        EMPRESA
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[120px] xl:ml-[150px] 2xl:ml-[169px] 3xl:ml-[202px] mt-[1px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        CÓDIGO
                      </Text>
                      <Text
                        className="mb-[4px] lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] mt-[1px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        VALOR
                      </Text>
                      <Text
                        className="lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] 3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        NOTA FISCAL
                      </Text>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[97%]">
                      <Text className="columndate" as="h3" variant="h3">
                        16/08/2021
                      </Text>
                      <Input
                        className="placeholder:text-gray_600 GroupThree"
                        wrapClassName="w-[31%]"
                        name="zipcode"
                        placeholder="00000"
                      ></Input>
                      <Text className="rowzipcode" as="h3" variant="h3">
                        0000000
                      </Text>
                      <Row className="items-center lg:pr-[16px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] rounded-radius4 w-[34%]">
                        <Text className="rowgroupfive_one" as="h3" variant="h3">
                          0000000
                        </Text>
                        <Text
                          className="bg-white_A700 border border-bluegray_400 border-solid font-medium lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius4 text-gray_600 w-[169px]"
                          as="h3"
                          variant="h3"
                        >
                          0000000
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </Stack>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Tela7PEDIDOSFATURADOSPage;

import React from "react";

import { Column, Row, Img, Text, Line, Stack, Button, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const TelaprincipalPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/");
  }
  function handleNavigate10() {
    navigate("/tela2cadastrodocliente");
  }
  function handleNavigate11() {
    navigate("/login");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 border border-black_900 border-solid items-center justify-start w-[100%]">
          <Row className="bg-indigo_700 items-center p-[2px] w-[100%]">
            <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] w-[97%]">
              <Row
                className="common-pointer items-start justify-evenly w-[10%]"
                onClick={handleNavigate11}
              >
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
                  onClick={handleNavigate10}
                >
                  Clientes
                </Text>
                <Text
                  className="common-pointer Produtos"
                  as="h2"
                  variant="h2"
                  onClick={handleNavigate9}
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
            <Sidebar className="w-[22%]" />
            <Column className="items-center w-[78%]">
              <Column className="bg-white_A700 justify-center lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[100%]">
                <Row className="items-center ml-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[20%]">
                  <Img
                    src="images/img_bookmark.svg"
                    className="save"
                    alt="bookmark"
                  />
                  <Text
                    className="ml-[2px] text-gray_600 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Painel de Bordo
                  </Text>
                </Row>
                <Row className="items-end justify-between lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[100%]">
                  <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[37%]">
                    <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:pr-[26px] xl:pr-[32px] 2xl:pr-[37px] 3xl:pr-[44px] rounded-radius4 w-[61%]">
                      <div className="bg-bluegray_100 lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius4 w-[17%]"></div>
                      <Text
                        className="font-medium lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Mais de uma empresa
                      </Text>
                    </Row>
                    <Row className="bg-indigo_700 items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[30%]">
                      <Img
                        src="images/img_refresh.svg"
                        className="mb-[1px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] question"
                        alt="refresh"
                      />
                      <Text
                        className="font-medium text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Atualizar
                      </Text>
                    </Row>
                  </Row>
                  <Stack className="lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] w-[22%]">
                    <Button className="absolute bottom-[0] font-medium right-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[50%]">
                      Indicador
                    </Button>
                    <Column className="absolute justify-start left-[0] rounded-radius4 w-[95%]">
                      <Text
                        className="font-medium ml-[1px] text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        última atualização hoje as 11:00hs
                      </Text>
                      <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] rounded-radius4 w-[47%]">
                        <div className="bg-bluegray_100 lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius4 w-[25%]"></div>
                        <Text
                          className="font-medium lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] text-gray_600 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Hoje
                        </Text>
                      </Row>
                    </Column>
                  </Stack>
                </Row>
                <Column
                  className="bg-cover bg-repeat justify-start lg:mb-[186px] xl:mb-[233px] 2xl:mb-[262px] 3xl:mb-[314px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius7 w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_dashelementos.svg')",
                  }}
                >
                  <List
                    className="gap-[0] lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] min-h-[auto] mt-[4px] w-[93%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-between lg:my-[41px] xl:my-[51px] 2xl:my-[58px] 3xl:my-[69px] w-[100%]">
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                    </Row>
                    <Row className="items-center justify-between lg:my-[41px] xl:my-[51px] 2xl:my-[58px] 3xl:my-[69px] w-[100%]">
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                    </Row>
                    <Row className="items-center justify-between lg:my-[41px] xl:my-[51px] 2xl:my-[58px] 3xl:my-[69px] w-[100%]">
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                      <Text
                        className="leading-[normal] text-black_900 w-[14%]"
                        as="h5"
                        variant="h5"
                      >
                        FATURAMENTO TOTAL
                        <br />
                        R$ 1.000,00
                      </Text>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default TelaprincipalPage;

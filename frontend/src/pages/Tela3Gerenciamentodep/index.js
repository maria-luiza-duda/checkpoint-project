import React from "react";

import { Column, Row, Img, Text, Line, Button, Input } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Tela3GerenciamentodepPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/tela4cadastraroualte");
  }
  function handleNavigate1() {
    navigate("/tela2cadastrodocliente");
  }

  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
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
                onClick={handleNavigate1}
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
            <Sidebar className="w-[22%]" />
            <Column className="items-center w-[78%]">
              <Column className="bg-white_A700 items-center justify-center lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] w-[100%]">
                <Column className="justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
                  <Row className="items-center w-[32%]">
                    <Img
                      src="images/img_save.svg"
                      className="save"
                      alt="save"
                    />
                    <Text
                      className="ml-[2px] text-gray_600 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Gerenciamento de Produtos
                    </Text>
                  </Row>
                  <Column className="items-center justify-start lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] rounded-radius4 w-[100%]">
                    <Text
                      className="bg-indigo_700 font-medium lg:pl-[24px] xl:pl-[31px] 2xl:pl-[35px] 3xl:pl-[42px] lg:pr-[20px] xl:pr-[25px] 2xl:pr-[29px] 3xl:pr-[34px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius4 text-white_A700 w-[103px]"
                      as="h3"
                      variant="h3"
                    >
                      NOVO
                    </Text>
                    <Line className="bg-indigo_700 h-[5px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius25 w-[100%]" />
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-gray_600 border-solid items-center justify-start xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mb-[9px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] rounded-radius4 w-[100%]">
                  <Row className="items-end lg:mb-[132px] xl:mb-[166px] 2xl:mb-[187px] 3xl:mb-[224px] rounded-radius4 w-[90%]">
                    <Column
                      className="common-pointer items-center justify-start 3xl:mt-[103px] lg:mt-[61px] xl:mt-[76px] 2xl:mt-[86px] rounded-radius4 w-[7%]"
                      onClick={handleNavigate}
                    >
                      <Button className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]">
                        EDITAR
                      </Button>
                      <Button className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]">
                        EDITAR
                      </Button>
                      <Button className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]">
                        EDITAR
                      </Button>
                      <Button className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]">
                        EDITAR
                      </Button>
                      <Button className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]">
                        EDITAR
                      </Button>
                      <Button className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]">
                        EDITAR
                      </Button>
                      <Button className="font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]">
                        EDITAR
                      </Button>
                    </Column>
                    <Column className="items-center justify-start 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] w-[92%]">
                      <Row className="items-center justify-between rounded-radius4 w-[100%]">
                        <Text
                          className="bg-white_A700 border border-indigo_700 border-solid font-medium lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] rounded-radius4 text-gray_600 w-[109px]"
                          as="h3"
                          variant="h3"
                        >
                          ID do item
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="GroupThree"
                          placeholder="NOME DO ITEM"
                          size="md"
                          variant="OutlineIndigo700"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="price"
                          placeholder="DESCRIÇÃO"
                          size="md"
                          variant="OutlineIndigo700"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="GroupFive"
                          placeholder="CATEGORIA"
                          size="md"
                          variant="OutlineIndigo700"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius4 w-[100%]">
                        <Text className="colunadedados1" as="h3" variant="h3">
                          000000
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode One"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Two"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Three"
                          placeholder="000000"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]">
                        <Text className="colunadedados1" as="h3" variant="h3">
                          000000
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Five"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Six"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Seven"
                          placeholder="000000"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]">
                        <Text className="colunadedados1" as="h3" variant="h3">
                          000000
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Nine"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Ten"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Eleven"
                          placeholder="000000"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]">
                        <Text className="colunadedados1" as="h3" variant="h3">
                          000000
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Thirteen"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Fourteen"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Fifteen"
                          placeholder="000000"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]">
                        <Text className="colunadedados1" as="h3" variant="h3">
                          000000
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Seventeen"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Eighteen"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode Nineteen"
                          placeholder="000000"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]">
                        <Text className="colunadedados1" as="h3" variant="h3">
                          000000
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode TwentyOne"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode TwentyTwo"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode TwentyThree"
                          placeholder="000000"
                        ></Input>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius4 w-[100%]">
                        <Text className="colunadedados1" as="h3" variant="h3">
                          000000
                        </Text>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode TwentyFive"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode TwentySix"
                          placeholder="000000"
                        ></Input>
                        <Input
                          className="placeholder:text-gray_600 GroupThree"
                          wrapClassName="w-[27%]"
                          name="zipcode TwentySeven"
                          placeholder="000000"
                        ></Input>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Tela3GerenciamentodepPage;

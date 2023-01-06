import React from "react";

import {
  Stack,
  Column,
  Row,
  Button,
  Img,
  Text,
  Input,
  Line,
  Grid,
  List,
} from "components";
import Sidebar1 from "components/Sidebar/Sidebar1";
import { useNavigate } from "react-router-dom";

const Tela2CadastrodoclientePage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/");
  }

  return (
    <>
      <Stack className="bg-white_A700 font-roboto 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] mx-[auto] w-[100%]">
        <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[77%]">
          <Column className="bg-white_A700 items-center justify-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
            <Stack className="lg:h-[109px] xl:h-[137px] 2xl:h-[154px] 3xl:h-[184px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[99%]">
              <Row className="absolute items-center justify-between right-[1%] top-[28%] w-[29%]">
                <Button
                  className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[45%]"
                  size="sm"
                  variant="FillTeal400"
                >
                  CADASTRAR
                </Button>
                <Button
                  className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                  size="sm"
                  variant="FillPink900"
                >
                  CANCELAR
                </Button>
              </Row>
              <Column className="absolute justify-start w-[100%]">
                <Row className="items-center w-[22%]">
                  <Img
                    src="images/img_map_30X30.svg"
                    className="save"
                    alt="map"
                  />
                  <Text className="cadastrarclien" as="h1" variant="h1">
                    Cadastrar Cliente
                  </Text>
                </Row>
                <Input
                  className="placeholder:text-white_A700 dadosdoclient"
                  wrapClassName="2xl:mt-[75px] 3xl:mt-[90px] lg:mt-[53px] w-[100%] xl:mt-[66px]"
                  name="dadosdoclient"
                  placeholder="Dados do Cliente"
                  variant="FillIndigo700"
                ></Input>
                <Line className="bg-indigo_700 h-[5px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius25 w-[100%]" />
              </Column>
            </Stack>
            <Column className="bg-white_A700 border border-gray_600 border-solid items-center justify-start lg:mb-[21px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[29px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius4 w-[98%]">
              <Column className="items-center justify-start rounded-radius4 w-[93%]">
                <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 w-[100%]">
                  <Column className="justify-start rounded-radius4 w-[100%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Nome Fantasia
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      name="GroupFiftySeven"
                      placeholder="PADARIA BOM PÃO"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                  <Column className="justify-start rounded-radius4 w-[100%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Razão Social{" "}
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      name="GroupFiftySix"
                      placeholder="Grupo MELHOR PÃO"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                  <Column className="justify-start rounded-radius4 w-[100%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      CNPJ
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      name="GroupFiftyFive"
                      placeholder="86.813.466/0001-21"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                  <Column className="justify-start rounded-radius4 w-[100%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Empresa Matriz
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      name="GroupFiftyFour"
                      placeholder="PANIFICAÇÔES E AFINS"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                </Grid>
              </Column>
              <Column className="items-center justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] rounded-radius4 w-[93%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Column className="rounded-radius4 w-[48%]">
                      <Text
                        className="font-medium text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Logradouro
                      </Text>
                      <Input
                        className="placeholder:text-white_A700 dadosdoclient"
                        wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                        name="price"
                        placeholder="RUA SEM FIM DO BONFIM"
                        variant="FillIndigo700"
                      ></Input>
                    </Column>
                    <Column className="rounded-radius4 w-[8%]">
                      <Text
                        className="font-medium text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Número
                      </Text>
                      <Text
                        className="bg-indigo_700 font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[24px] xl:pr-[30px] 2xl:pr-[34px] 3xl:pr-[40px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius4 text-white_A700 w-[72px]"
                        as="h3"
                        variant="h3"
                      >
                        3697
                      </Text>
                    </Column>
                    <Column className="rounded-radius4 w-[39%]">
                      <Text
                        className="font-medium text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Complemento
                      </Text>
                      <Text
                        className="bg-indigo_700 font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius4 text-white_A700 w-[340px]"
                        as="h3"
                        variant="h3"
                      >
                        VOCÊ ESCOLHE
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Column className="rounded-radius4 w-[29%]">
                      <Text
                        className="font-medium text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Bairro
                      </Text>
                      <Input
                        className="placeholder:text-white_A700 dadosdoclient"
                        wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                        name="GroupFifty"
                        placeholder="TEJIPIÓ"
                        variant="FillIndigo700"
                      ></Input>
                    </Column>
                    <Column className="rounded-radius4 w-[29%]">
                      <Text
                        className="font-medium text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Cidade
                      </Text>
                      <Text className="GroupFortyNine" as="h3" variant="h3">
                        RECIFE
                      </Text>
                    </Column>
                    <Column className="rounded-radius4 w-[20%]">
                      <Text
                        className="font-medium text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        UF
                      </Text>
                      <Input
                        className="placeholder:text-white_A700 dadosdoclient"
                        wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                        name="price One"
                        placeholder="PERNAMBUCO"
                        variant="FillIndigo700"
                      ></Input>
                    </Column>
                    <Column className="rounded-radius4 w-[14%]">
                      <Text
                        className="font-medium text-gray_600 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        CEP
                      </Text>
                      <Text
                        className="bg-indigo_700 font-medium lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius4 text-white_A700 w-[123px]"
                        as="h3"
                        variant="h3"
                      >
                        50925-000
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <List
                className="gap-[0] lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] min-h-[auto] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[93%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[15px] xl:my-[19px] 2xl:my-[22px] 3xl:my-[26px] rounded-radius4 w-[100%]">
                  <Column className="rounded-radius4 w-[29%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Telefone 1
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      name="GroupFortyThree"
                      placeholder="0000000000000"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                  <Column className="rounded-radius4 w-[29%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Telefone 2
                    </Text>
                    <Text className="GroupFortyNine" as="h3" variant="h3">
                      0000000000000
                    </Text>
                  </Column>
                  <Column className="rounded-radius4 w-[37%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Whats’app
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      name="GroupFortyOne"
                      placeholder="00000000000000000"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:my-[15px] xl:my-[19px] 2xl:my-[22px] 3xl:my-[26px] rounded-radius4 w-[100%]">
                  <Column className="rounded-radius4 w-[29%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Email 1
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      name="email"
                      placeholder="www.tstst@isisis.com"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                  <Column className="rounded-radius4 w-[29%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Email 2
                    </Text>
                    <Text className="GroupFortyNine" as="h3" variant="h3">
                      www.@algumacoisa.....
                    </Text>
                  </Column>
                  <Column className="rounded-radius4 w-[37%]">
                    <Text
                      className="font-medium text-gray_600 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Site
                    </Text>
                    <Input
                      className="placeholder:text-white_A700 dadosdoclient"
                      wrapClassName="2xl:mt-[16px] 3xl:mt-[19px] lg:mt-[11px] w-[100%] xl:mt-[14px]"
                      name="weburl"
                      placeholder="www.isisisjsjs.com"
                      variant="FillIndigo700"
                    ></Input>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
        </Column>
        <Sidebar1 className="absolute bottom-[0] left-[0] w-[22%]" />
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
              <Text className="menu" as="h2" variant="h2">
                Clientes
              </Text>
              <Text
                className="common-pointer Produtos"
                as="h2"
                variant="h2"
                onClick={handleNavigate6}
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
      </Stack>
    </>
  );
};

export default Tela2CadastrodoclientePage;

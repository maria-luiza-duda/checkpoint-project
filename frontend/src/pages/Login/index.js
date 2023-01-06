import React from "react";

import { Column, Row, Img, Text, Line } from "components";

const LoginPage = () => {
  return (
    <>
      <Column className="font-roboto justify-start mx-[auto] lg:pb-[101px] xl:pb-[127px] 2xl:pb-[143px] 3xl:pb-[171px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-indigo_700 items-center 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[100%]">
              <Row className="items-center justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[94%]">
                <Row className="items-start justify-evenly w-[10%]">
                  <Img
                    src="images/img_cart.svg"
                    className="lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] mt-[2px] w-[29%]"
                    alt="cart"
                  />
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
                    <Line className="bg-white_A700 h-[2.5px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]" />
                  </Column>
                </Row>
                <Row className="items-center justify-between w-[43%]">
                  <Text
                    className="hover:font-medium mt-[1px] menu1"
                    as="h2"
                    variant="h2"
                  >
                    Quem somos
                  </Text>
                  <Text
                    className="hover:font-medium menu1"
                    as="h2"
                    variant="h2"
                  >
                    Vantagens
                  </Text>
                  <Text
                    className="hover:font-medium menu1"
                    as="h2"
                    variant="h2"
                  >
                    Depoimentos
                  </Text>
                  <Text
                    className="hover:font-medium menu1"
                    as="h2"
                    variant="h2"
                  >
                    Depoimentos
                  </Text>
                  <Text
                    className="hover:font-medium menu1"
                    as="h2"
                    variant="h2"
                  >
                    Inscreva-se
                  </Text>
                </Row>
              </Row>
            </Row>
          </header>
        </Column>
        <Column className="items-end 3xl:mt-[109px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[91px] lg:px-[376px] xl:px-[471px] 2xl:px-[530px] 3xl:px-[636px] w-[100%]">
          <Img
            src="images/img_menulogin.svg"
            className="lg:h-[364px] xl:h-[455px] 2xl:h-[512px] 3xl:h-[614px] w-[79%]"
            alt="Menulogin"
          />
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;

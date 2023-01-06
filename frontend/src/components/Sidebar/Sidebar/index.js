import React from "react";

import { Column, Text, Row, Img } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();

  function handleNavigate15() {
    navigate("/tela9relatriovendasp");
  }
  function handleNavigate16() {
    navigate("/tela10relatrioprevis");
  }
  function handleNavigate17() {
    navigate("/tela5gerarpedido");
  }
  function handleNavigate18() {
    navigate("/tela6pedidossemfaturamento");
  }
  function handleNavigate19() {
    navigate("/tela7pedidosfaturados");
  }
  function handleNavigate24() {
    navigate("/tela11relatrioclientes");
  }

  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-gray_50 justify-start xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[100%]">
            <Column className="items-center justify-start 3xl:mt-[112px] lg:mt-[66px] xl:mt-[83px] 2xl:mt-[94px] w-[62%]">
              <Column className="justify-start w-[100%]">
                <Text className="columnpedidos1" as="h3" variant="h3">
                  PEDIDOS
                </Text>
                <Row className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[86%]">
                  <Img
                    src="images/img_bluetooth.svg"
                    className="bookmark"
                    alt="bluetooth"
                  />
                  <Text
                    className="common-pointer rowbluetooth1"
                    as="h3"
                    variant="h3"
                    onClick={handleNavigate17}
                  >
                    Gerar novos pedidos
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="bookmark"
                    alt="clock"
                  />
                  <Text
                    className="common-pointer rowbluetooth1"
                    as="h3"
                    variant="h3"
                    onClick={handleNavigate18}
                  >
                    Pedido sem faturamento
                  </Text>
                </Row>
                <Row className="items-center ml-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[78%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="bookmark"
                    alt="checkmark"
                  />
                  <Text
                    className="common-pointer rowcheckmark"
                    as="h3"
                    variant="h3"
                    onClick={handleNavigate19}
                  >
                    Pedidos faturados
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[69%]">
              <Column className="justify-start w-[100%]">
                <Text className="columnpedidos1" as="h3" variant="h3">
                  RELATÓRIOS
                </Text>
                <Row className="items-center ml-[1px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[87%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="bookmark"
                    alt="checkmark One"
                  />
                  <Text
                    className="common-pointer rowcheckmark"
                    as="h3"
                    variant="h3"
                    onClick={handleNavigate24}
                  >
                    Cliente Ativos e Inativos
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[75%]">
                  <Img
                    src="images/img_map.svg"
                    className="bookmark"
                    alt="map"
                  />
                  <Text
                    className="common-pointer rowbluetooth1"
                    as="h3"
                    variant="h3"
                    onClick={handleNavigate15}
                  >
                    Vendas por produto
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                  <Img
                    src="images/img_arrowright.svg"
                    className="bookmark"
                    alt="arrowright"
                  />
                  <Text
                    className="common-pointer rowcheckmark"
                    as="h3"
                    variant="h3"
                    onClick={handleNavigate16}
                  >
                    Revisão de entrada de caixa{" "}
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[39%]">
                  <Img
                    src="images/img_info.svg"
                    className="bookmark"
                    alt="info"
                  />
                  <Text className="rowbluetooth1" as="h3" variant="h3">
                    Estoque
                  </Text>
                </Row>
              </Column>
            </Column>
            <Row className="items-start lg:mb-[236px] xl:mb-[295px] 2xl:mb-[332px] 3xl:mb-[398px] 3xl:ml-[102px] lg:ml-[60px] xl:ml-[75px] 2xl:ml-[85px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] w-[41%]">
              <Img
                src="images/img_question.svg"
                className="question"
                alt="question"
              />
              <Text className="Ajudaesuporte1" as="h3" variant="h3">
                Ajuda / Suporte
              </Text>
            </Row>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

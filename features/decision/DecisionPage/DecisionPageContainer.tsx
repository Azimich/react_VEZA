import React, { FC, useEffect, useState } from "react";

import Styles from "./DecisionPage.module.scss";
import { ISSRDecision } from "../Decision";
import { Container } from "components/common/container";

import { Separator } from "components/separator";
import { OwnObject } from "components/own_object";
import { Equipment } from "components/equipment";
import { equipmentData } from "components/equipment/mockData";
import { dataBreadDecision } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { DecisionPageItem } from "features/decision/DecisionPage/DecisionPageItem";

const DecisionPageContainer: FC<ISSRDecision> = ({
  data = { decision: {}, objects: {} },
}) => {
  const { decision, objects } = data;

  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadDecision);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Отрасли" }]);
  }, [dataBreadDecision]);

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />
      <DecisionPageItem {...decision?.response} />
      <Separator title={"Наши объекты"} />
      <OwnObject {...objects?.response} />
      <Separator title={"оборудование"} />
      <div className={Styles.equipment__block}>
        <Equipment props={equipmentData} />
      </div>
    </Container>
  );
};

export { DecisionPageContainer };

import React, { FC, useEffect, useState } from "react";

// import Styles from "./DecisionPage.module.scss";
import { ISSRDecision } from "../Decision";
import { Container } from "components/common/container";

import { Separator } from "components/separator";
import { OwnObject } from "components/own_object";
import { Equipment } from "components/equipment";
import { dataBreadDecision } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { DecisionPageItem } from "features/decision/DecisionPage/DecisionPageItem";
// import Styles from "components/own_object/OwnObject.module.scss";
// import {Editor} from "components/editor_pen";
// import {Modal} from "components/modal";
// import {EditObjectIndustry} from "features/decision/modal/EditObjectIndustry";

const DecisionPageContainer: FC<ISSRDecision> = ({
  data = { decision: {}, objects: {}, equipment: {} },
}) => {
  const { decision, objects, equipment } = data;
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadDecision);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: decision?.response?.title }]);
  }, [dataBreadDecision]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <DecisionPageItem {...decision?.response} />
      <Separator title={"Наши объекты"} />
      <OwnObject props={objects?.response} />
      <Separator title={"Оборудование"} />
      <Equipment props={equipment?.response} alias={decision.response.alias} />
    </Container>
  );
};

export { DecisionPageContainer };

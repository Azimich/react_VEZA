import { FC, useEffect, useState } from "react";

import Styles from "./DecisionPage.module.scss";
import { IDecisionData } from "../Decision";
import { Container } from "../../../components/common/container";
import { DecisionPageItem } from "./DecisionPageItem";
import { Separator } from "../../../components/separator";
import { OwnObject } from "../../../components/own_object";
import { Equipment } from "../../../components/equipment";
import { equipmentData } from "../../../components/equipment/mockData";
import { dataBreadDecision } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";

interface IDecision {
  data: IDecisionData[];
}

const DecisionPageContainer: FC<IDecision> = ({ data }) => {
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadDecision);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Отрасли" }]);
  }, [dataBreadDecision]);

  return (
    <Container className={"wrapper_clear no_padding"}>
      <BreadCrumbs data={breadCrumbs} />
      <DecisionPageItem data={data} />
      <div className={Styles.separator__title__container}>
        <Separator title={"Наши объекты"} />
      </div>
      <OwnObject />
      <div className={Styles.separator__title__container}>
        <Separator title={"оборудование"} />
      </div>
      <div className={Styles.equipment__block}>
        <Equipment props={equipmentData} />
      </div>
    </Container>
  );
};

export { DecisionPageContainer };

import { FC } from "react";

import { IDecisionData } from "../Decision";
import { Container } from "../../../components/common/container";
import { DecisionPageItem } from "./DecisionPageItem";
import { Separator } from "../../../components/separator";
import { OwnObject } from "../../../components/own_object";
import { Equipment } from "../../../components/equipment";
import { equipmentData } from "../../../components/equipment/mockData";

interface IDecision {
  data: IDecisionData[];
}

const DecisionPageContainer: FC<IDecision> = ({ data }) => {
  return (
    <Container className={"wrapper"}>
      <DecisionPageItem data={data} />
      <Separator title={"Наши объекты"} />
      <OwnObject />
      <Separator title={"оборудование"} />
      <Equipment props={equipmentData} />
    </Container>
  );
};

export { DecisionPageContainer };

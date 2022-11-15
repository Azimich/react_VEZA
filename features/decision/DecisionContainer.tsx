import { decisionData } from "./MockData";
import { FC } from "react";
import { IDecisionData } from "./Decision";
import { DecisionItem } from "./DecisionItem";
import Styles from "./Decision.module.scss";
import { Container } from "components/common/container";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataDecisionNews } from "components/breadcrumbs/mockData";

const DecisionContainer: FC<IDecisionData[]> = () => {
  return (
    <Container className="wrapper_clear no_padding">
      <BreadCrumbs data={dataDecisionNews} />

      <div className={Styles.decision__container}>
        {decisionData.map((e) => {
          return <DecisionItem {...e} key={e.id} />;
        })}
      </div>
    </Container>
  );
};

export { DecisionContainer };

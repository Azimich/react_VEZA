import { decisionData } from "./MockData";
import { FC } from "react";
import { IDecisionData } from "./Decision";
import { DecisionItem } from "./DecisionItem";
import Styles from "./Decision.module.scss";
import { Container } from "components/common/container";

const DecisionContainer: FC<IDecisionData[]> = () => {
  return (
    <Container className="wrapper">
      <div className={Styles.decision__container}>
        {decisionData.map((e) => {
          return <DecisionItem {...e} key={e.id} />;
        })}
      </div>
    </Container>
  );
};

export { DecisionContainer };

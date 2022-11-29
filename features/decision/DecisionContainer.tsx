import { decisionData } from "./MockData";
import { FC, useEffect } from "react";
import { IDecisionData } from "./Decision";
import { DecisionItem } from "./DecisionItem";
import Styles from "./Decision.module.scss";
import { Container } from "components/common/container";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadDecision } from "components/breadcrumbs/mockData";

const DecisionContainer: FC<IDecisionData[]> = () => {
  useEffect(() => {
    //        document.getElementById("_next")&&document.getElementById("_next").animate({ scrollTop: 0 })
    document.getElementById("main") &&
      document.getElementById("main").animate({ scrollTop: 0 });
    console.log(
      document.getElementsByClassName("wrapper") &&
        document.getElementsByClassName("wrapper"),
    );
  }, []);
  return (
    <Container className="wrapper_clear no_padding">
      <BreadCrumbs data={dataBreadDecision} />
      <div className={Styles.decision__container}>
        {decisionData.map((e) => {
          return <DecisionItem {...e} key={e.id} />;
        })}
      </div>
    </Container>
  );
};

export { DecisionContainer };

import { FC, useEffect } from "react";
import { DecisionItem } from "./DecisionItem";
import Styles from "./Decision.module.scss";
import { Container } from "components/common/container";
import { BreadCrumbs } from "components/breadcrumbs";
import { dataBreadDecision } from "components/breadcrumbs/mockData";
import { ISSRDecisionArray } from "features/decision/Decision";
import { ConnectError } from "components/connect_error";

const DecisionContainer: FC<ISSRDecisionArray> = ({ decision }) => {
  useEffect(() => {
    document.getElementById("main") &&
      document.getElementById("main").animate({ scrollTop: 0 });
  }, []);
  return (
    <Container className="wrapper">
      <BreadCrumbs data={dataBreadDecision} />
      <div className={`${Styles.decision__container} ${Styles.angry_grid}`}>
        {!decision?.hasError ? (
          decision?.response?.map((e) => {
            return <DecisionItem {...e} key={e.industryId} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </div>
    </Container>
  );
};

export { DecisionContainer };

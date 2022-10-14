import { decisionData } from "./MockData";
import { FC } from "react";
import { IDecisionData } from "./Decision";
import { DecisionItem } from "./DecisionItem";
import Styles from "./Decision.module.scss";

const DecisionContainer: FC<IDecisionData[]> = () => {
  return (
    <>
      <img src={"/images/industry_banner.jpg"} className={Styles.banner_img} />
      <div className={Styles.decision__container}>
        {decisionData.map((e) => {
          return <DecisionItem {...e} key={e.id} />;
        })}
      </div>
    </>
  );
};
export { DecisionContainer };

import React, { FC } from "react";
import { IDecisionData } from "./Decision";
import Styles from "./Decision.module.scss";
import { decisionPath } from "utils/bootstrap";
import { Link } from "components/link";

const DecisionItem: FC<IDecisionData> = (props) => {
  return (
    <div className={Styles.decision__container_item}>
      <Link url={decisionPath + props.alias}>
        <img src={props.imageUrl} alt={props.title} />
        <div className={Styles.decision__container_item_way_box}>
          <h3 className={Styles.decision__container_item_way_box_title}>
            {props.title}
          </h3>
          <p className={Styles.decision__container_item_way_box_description}>
            {props.shortDescription}
          </p>
        </div>
      </Link>
    </div>
  );
};

export { DecisionItem };

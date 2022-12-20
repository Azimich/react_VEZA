import { FC } from "react";
import { IDecisionData } from "./Decision";
import Styles from "./Decision.module.scss";
import { decisionPath } from "utils/bootstrap";
import { Link } from "components/link";

const DecisionItem: FC<IDecisionData> = ({
  title = "",
  shortDescription,
  alias,
  imageUrl,
}) => {
  return (
    <Link
      url={decisionPath + alias}
      classLink={Styles.decision__container_item}
    >
      <img src={imageUrl} alt={title} />
      <div className={Styles.decision__container_item_way_box}>
        <h3 className={Styles.decision__container_item_way_box_title}>
          {title}
        </h3>
        <p className={Styles.decision__container_item_way_box_description}>
          {shortDescription}
        </p>
      </div>
    </Link>
  );
};

export { DecisionItem };

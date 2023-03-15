import React, { FC } from "react";
import { IDecisionData } from "./Decision";
import Styles from "./Decision.module.scss";
import { decisionPath } from "utils/bootstrap";
import { Link } from "components/link";
import { Editor } from "components/editor_pen";
import { Modal, useModal } from "components/modal";
import { AdminModal } from "features/decision/AdminModal";

const DecisionItem: FC<IDecisionData> = (props) => {
  const { isShow, toggle } = useModal();

  const contentEditDescription = (
    <AdminModal
      shortDescription={props.shortDescription}
      toggle={toggle}
      alias={props.alias}
    />
  );

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
      <div className={Styles.edit_pen_box} onClick={toggle}>
        <Editor />
      </div>
      <Modal
        modalContent={contentEditDescription}
        isShow={isShow}
        hide={toggle}
        headerText={"Редактирование"}
        theme={"full_modal"}
        bgModal={"white"}
      />
    </div>
  );
};

export { DecisionItem };

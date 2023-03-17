import { FC } from "react";
import Styles from "./DecisionPage.module.scss";
import { IDecisionData } from "../Decision";
import { Modal, useModal } from "components/modal";
import { EditPageModal } from "features/decision/modal/EditPageModal";
import { Editor } from "components/editor_pen";

const DecisionPageItem: FC<IDecisionData> = ({
  description,
  title,
  imageUrl,
}) => {
  const { isShow, toggle } = useModal();

  const contentModal = (
    <EditPageModal
      description={description}
      title={title}
      imageUrl={imageUrl}
    />
  );

  return (
    <>
      <div className={Styles.Decision_container}>
        <div className={Styles.Decision_container_img}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={Styles.Decision_container_info}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <span className={Styles.button_editor} onClick={toggle}>
          <Editor />
        </span>
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={contentModal}
        headerText={"Редактирование"}
        bgModal={"white"}
        theme={"full_modal"}
      />
    </>
  );
};

export { DecisionPageItem };

import { FC } from "react";
import Styles from "./DecisionPage.module.scss";
import { IDecisionData } from "../Decision";
import { Modal, useModal } from "components/modal";
import { EditPageModal } from "features/decision/modal/EditPageModal";
import { Editor } from "components/editor_pen";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";

const DecisionPageItem: FC<IDecisionData> = ({
  description,
  title,
  imageUrl,
  shortDescription,
  seoTitle,
  seoMetaH1,
  seoDescription,
  seoKeyword,
}) => {
  const { isShow, toggle } = useModal();
  const auth = useAppSelector(getAuth);

  const contentModal = (
    <EditPageModal
      description={description}
      shortDescription={shortDescription}
      title={title}
      imageUrl={imageUrl}
      seoTitle={seoTitle}
      seoMetaH1={seoMetaH1}
      seoDescription={seoDescription}
      seoKeyword={seoKeyword}
      toggle={toggle}
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
        {auth.identify && auth.data.response && (
          <span className={Styles.button_editor} onClick={toggle}>
            <Editor />
          </span>
        )}
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

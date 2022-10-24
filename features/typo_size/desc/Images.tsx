import { Button } from "components/button";
import Styles from "./Description.module.scss";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "./descModal/ModalForm";

const content = <ModalForm />;

const Description_Images = () => {
  const { isShow, toggle } = useModal();

  return (
    <div className={Styles.Description_container}>
      <div className={Styles.Description_container_models}>
        <div className={Styles.Description_container_models_img}>
          <div className={Styles.card}>
            <div className={Styles.photo}>
              <img src="/images/fan.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Button children={"Документация"} onClick={toggle} />
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={content}
        theme={"full_modal"}
        headerText={"Тип файла"}
      />
    </div>
  );
};
export { Description_Images };

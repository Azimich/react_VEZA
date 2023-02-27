import Styles from "./Utp.module.scss";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "./ModalForm";
import { FC } from "react";
import { IEquipmentItem } from "features/equipment/equipmentPage/Equipment";

const content = <ModalForm />;
const UtpContainer: FC<IEquipmentItem> = ({ advantages, details }) => {
  const { isShow, toggle } = useModal();
  return (
    <div className={Styles.utp__container}>
      <div className={Styles.utp__container__top}>
        <div className={Styles.utp__container__top__list}>
          {advantages &&
            advantages.map((d) => {
              return <p>{d}</p>;
            })}
        </div>
        <div className={Styles.utp__container__top__buttons}>
          <div className={Styles.utp__container__top__calculation}>
            <p>Выполнить подбор необходимого оборудования</p>
            <Button children={"Расчёт"} link={"/develop"} />
          </div>
          <div className={Styles.utp__container__top__download}>
            <p>Скачать BIM-модель</p>
            <Button children={"Скачать"} onClick={toggle} />
          </div>
        </div>
      </div>
      <div className={Styles.utp__container__bottom}>
        <p className={Styles.utp__container__botto__text}>
          {details &&
            details[0].description.split("|").map((d) => {
              return <p>{d}</p>;
            })}
        </p>
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={content}
        theme={"modal"}
        headerText={"Тип файла"}
      ></Modal>
    </div>
  );
};

export { UtpContainer };

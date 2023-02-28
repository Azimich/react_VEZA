import Styles from "./Utp.module.scss";
import { Button } from "components/button";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "./ModalForm";
import { FC } from "react";
import { IEquipmentItem } from "features/equipment/equipmentPage/Equipment";
import { Separator } from "components/separator";

const UtpContainer: FC<IEquipmentItem> = ({ advantages, details, blocks }) => {
  const content = <ModalForm props={blocks} />;
  const { isShow, toggle } = useModal();
  const data = details[0].description;

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
          <div>
            <div className={Styles.utp__container__top__calculation}>
              <p>Выполнить подбор необходимого оборудования</p>
              <Button children={"Расчёт"} link={"/develop"} />
            </div>
            <div className={Styles.utp__container__top__download}>
              <p>Скачать BIM-модель</p>
              <Button children={"Документация"} onClick={toggle} />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.lh} dangerouslySetInnerHTML={{ __html: data }} />
      <Separator title={"Дополнительное оборудование"} />
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={content}
        theme={"full_modal"}
        bgModal={"white"}
      />
    </div>
  );
};

export { UtpContainer };

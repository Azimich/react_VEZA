import React, { FC } from "react";
import Styles from "./Equipment.module.scss";
import { EquipmentItem } from "./EquipmentItem";
import { IEquipment } from "features/decision/Decision";
import { Editor } from "components/editor_pen";
import { Modal, useModal } from "components/modal";
import { EditObjectIndustry } from "features/decision/modal/EditObjectIndustry";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";

interface IEquipmentProps {
  props: IEquipment[];
  alias: string;
}

const EquipmentContainer: FC<IEquipmentProps> = ({ props, alias }) => {
  const { isShow, toggle } = useModal();
  const auth = useAppSelector(getAuth);

  return (
    <div className={Styles.equipment_container}>
      {props.map((e, i) => {
        return <EquipmentItem {...e} key={i} aliasOtr={alias} />;
      })}
      {/*Модалка для редактирования наши объекты*/}
      {auth.identify && auth.data.response && (
        <span className={Styles.button_editor} onClick={toggle}>
          <Editor />
        </span>
      )}
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<EditObjectIndustry />}
        headerText={"Редактирование"}
        bgModal={"white"}
        theme={"full_modal"}
      />
    </div>
  );
};
export { EquipmentContainer };

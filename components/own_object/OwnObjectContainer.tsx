import Styles from "./OwnObject.module.scss";
import React, { FC } from "react";
import { IObjects } from "../../types/response";
import { OwnObjectItem } from "components/own_object/OwnObjectItem";
import { ConnectError } from "components/connect_error";
import { Modal, useModal } from "components/modal";
import { EditObjectIndustry } from "features/decision/modal/EditObjectIndustry";
import { Editor } from "components/editor_pen";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";

interface IObjectRes {
  props: IObjects[];
}
const OwnObjectContainer: FC<IObjectRes> = ({ props }) => {
  const { isShow, toggle } = useModal();
  const auth = useAppSelector(getAuth);

  return (
    <div className={Styles.position}>
      <ul className={Styles.container}>
        {props?.length > 0 ? (
          props?.map((e) => {
            return <OwnObjectItem {...e} key={e.slidePosition} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>
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

export { OwnObjectContainer };

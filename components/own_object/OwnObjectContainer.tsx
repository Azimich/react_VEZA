import Styles from "./OwnObject.module.scss";
import React, { FC } from "react";
import { IObjects } from "../../types/response";
import { OwnObjectItem } from "components/own_object/OwnObjectItem";
import { ConnectError } from "components/connect_error";
import { Button } from "components/button";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { AddObject } from "features/decision/modal/AddObject";
import { Modal, useModal } from "components/modal";

interface IObjectRes {
  props: IObjects[];
}
const OwnObjectContainer: FC<IObjectRes> = ({ props }) => {
  const auth = useAppSelector(getAuth);
  const { isShow, toggle } = useModal();

  const AddObjectModal = <AddObject />;

  return (
    <>
      <div className={Styles.add__obj__button}>
        {auth.identify && auth.data && (
          <Button children={"Добавить"} onClick={toggle} />
        )}
      </div>
      <ul className={Styles.container}>
        {props?.length > 0 ? (
          props?.map((e, i) => {
            return <OwnObjectItem {...e} key={i} />;
          })
        ) : (
          <ConnectError type={"text"} />
        )}
      </ul>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={AddObjectModal}
        bgModal={"white"}
        theme={"full_modal"}
        headerText={"Добавление"}
      />
    </>
  );
};

export { OwnObjectContainer };

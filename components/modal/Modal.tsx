import React, { FC } from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.scss";
import { IModalProps } from "./Modal.d";
import { CloseIcon } from "components/icons";

export const Modal: FC<IModalProps> = ({
  isShow,
  hide,
  modalContent,
  theme = "modal",
}) => {
  const modal = (
    <section className={Styles.modal} onClick={hide}>
      <div
        className={`${Styles.modal_dialog} ${Styles[`theme__${theme}`]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={Styles.modal_close} onClick={hide}>
          <CloseIcon />
        </div>
        <div className={Styles.modal_body}>
          <div className={Styles.modal_content}>{modalContent}</div>
        </div>
      </div>
    </section>
  );
  return isShow ? ReactDOM.createPortal(modal, document.body) : null;
};

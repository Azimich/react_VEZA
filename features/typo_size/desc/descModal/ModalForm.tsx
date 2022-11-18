import React from "react";
import { FC } from "react";
import { modalFormData, modalHrefData } from "./MockData";
import { CheckboxWithLabel } from "components/checkbox";
import Styles from "../descModal/ModalDesc.module.scss";
import { Button } from "components/button";
import { ArrowRightWhiteIcon } from "components/icons";
import { IModalFormData } from "./ModalFormI";

const ModalForm: FC<IModalFormData> = () => {
  return (
    <div className={Styles.documentation}>
      <h1 className={Styles.modal__title}>Тип файла</h1>
      <div className={Styles.documentation__items}>
        <div className={Styles.documentation__download}>
          <div className={Styles.download__items}>
            <ul className={Styles.download__items__block}>
              {modalFormData.map((e) => {
                return (
                  <li key={e.id}>
                    <CheckboxWithLabel
                      id={String(e.id)}
                      name={"tab_bim" + e.id}
                      title={e.title}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <Button children={"Скачать"} />
        </div>
        <div className={Styles.documentation__modeles}>
          <div className={Styles.documentation__modeles__item}>
            {modalHrefData.map((e) => {
              return (
                <a href={"#"} key={e.id}>
                  {e.title}
                  <ArrowRightWhiteIcon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalForm };

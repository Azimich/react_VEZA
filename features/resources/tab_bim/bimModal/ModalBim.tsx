import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";
import React from "react";
import { FC } from "react";
import { modalBiData } from "./MockData";
import IModalBimData from "./ModalBim.d";
import Styles from "./ModalBim.module.scss";

const ModalBim: FC<IModalBimData> = () => {
  return (
    <div className={Styles.bim__modal}>
      <h2 className={Styles.bim__modal__title}>Тип файла</h2>
      <div className={Styles.bim__modal__items}>
        <div className={Styles.bim__modal__download}>
          <div className={Styles.bim__modal__download__items}>
            <ul className={Styles.bim__modal__download__items__block}>
              {modalBiData.map((e) => {
                return (
                  <li key={e.id}>
                    <CheckboxWithLabel
                      id={e.id}
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
      </div>
    </div>
  );
};

export { ModalBim };

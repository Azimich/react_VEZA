import React from "react";
import { FC } from "react";
import { modalFormData } from "./MockData";
import { CheckboxWithLabel } from "components/checkbox";
import Styles from "./Utp.module.scss";
import { Button } from "components/button";

const ModalForm: FC = () => {
  return (
    <div className={Styles.download}>
      <ul className={Styles.download__items}>
        {modalFormData.map((e) => {
          return (
            <li key={e.id}>
              <CheckboxWithLabel
                id={e.id}
                name={"bim" + e.id}
                title={e.title}
              />
            </li>
          );
        })}
      </ul>
      <Button children={"Скачать"} />
    </div>
  );
};

export { ModalForm };

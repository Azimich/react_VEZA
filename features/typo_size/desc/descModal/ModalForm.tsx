import React from "react";
import { FC } from "react";
import { modalFormData, modalHrefData } from "./MockData";
import { CheckboxWithLabel } from "components/checkbox";
import Styles from "../descModal/ModalDesc.module.scss";
import { Button } from "components/button";
// import Link  from 'next/link';
import { ArrowRightWhiteIcon } from "components/icons";

const ModalForm: FC = () => {
  return (
    <div className={Styles.documentation}>
      <div className={Styles.documentation__download}>
        <div className={Styles.download__items}>
          <ul className={Styles.download__items__block}>
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
  );
};

export { ModalForm };

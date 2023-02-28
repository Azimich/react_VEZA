import React from "react";
import { FC } from "react";
import { CheckboxWithLabel } from "components/checkbox";
import Styles from "./Utp.module.scss";
import { Button } from "components/button";
import { IBlockItem } from "features/equipment/equipmentPage/Equipment";
interface IData {
  props: IBlockItem[];
}
const ModalForm: FC<IData> = ({ props }) => {
  console.log("props", props);
  return (
    <div className={Styles.download}>
      <div>
        <ul className={Styles.download__items}>
          {props.map((e, i) => {
            return (
              <li key={i}>
                {e.title}
                <ul>
                  {e.documents.map((data, i) => {
                    return (
                      <li>
                        <CheckboxWithLabel
                          id={String(i)}
                          name={"tab_bim_" + i}
                          title={data.title}
                        />
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div>123</div>
      <Button children={"Скачать"} />
    </div>
  );
};

export { ModalForm };

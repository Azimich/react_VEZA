import React from "react";
import { FC } from "react";
import { CheckboxWithLabel } from "components/checkbox";
import Styles from "./Utp.module.scss";
import { Button } from "components/button";
import { IBlockItem } from "features/equipment/equipmentPage/Equipment";
import { Link } from "components/link";
import { EyeIcon } from "components/icons";

interface IData {
  props: IBlockItem[];
}

const ModalForm: FC<IData> = ({ props }) => {
  return (
    <div className={Styles.download}>
      <h2 className={Styles.download__title}>Тип файла</h2>
      <div className={Styles.download__blocks}>
        <div className={Styles.download__items}>
          {props.map((e, i) => {
            return (
              <div className={Styles.titles} key={i}>
                <span className={Styles.first__title}>{e.title}</span>
                <ul>
                  {e.documents.map((data, i) => {
                    return (
                      <li key={i}>
                        <CheckboxWithLabel
                          id={String(i)}
                          name={"tab_bim_" + i}
                          title={data.title}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={Styles.download__pdf}>
          <div className={Styles.download__pdf__items}>
            {props.map((items) => {
              return (
                <>
                  {items.documents.map((doc, i) => {
                    const link = doc.url.substr(-3);
                    return (
                      <>
                        {link !== "zip" && link !== "qpd" && (
                          <Link
                            url={"/pdfviewer?document=" + doc.url}
                            key={i}
                            classLink={Styles.download__pdf__list}
                          >
                            <span>{doc.title}</span>
                            <EyeIcon />
                          </Link>
                        )}
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Button children={"Скачать"} />
    </div>
  );
};

export { ModalForm };

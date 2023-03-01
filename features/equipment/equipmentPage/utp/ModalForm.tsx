import React, { useState } from "react";
import { FC } from "react";
import { CheckboxWithLabel } from "components/checkbox";
import Styles from "./Utp.module.scss";
import {
  IBlockItem,
  IDocuments,
} from "features/equipment/equipmentPage/Equipment";
import { Link } from "components/link";
import { DownloadIcon, EyeIcon } from "components/icons";
import { checkEmptyObject, onButtonClick } from "utils/helpers";
import { Button } from "components/button";
import { SpinnerButton } from "components/spinners";

interface IData {
  props: IBlockItem[];
}

const ModalForm: FC<IData> = ({ props }) => {
  const [checked, setChecked] = useState<IDocuments[]>([]);

  const [error, setError] = useState(false);
  const [download, setDownload] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: IDocuments) => {
    const check = checked.filter((item) => item.title === e.title);
    if (check.length === 0) {
      setChecked([/*...checked,*/ e]);
    } /* else {
      setChecked(checked.filter((item) => item.title !== e.title));
    }*/
  };
  const handleOnCLick = () => {
    if (checkEmptyObject(checked === null ? [] : checked)) {
      setError(true);
    } else {
      setError(false);
      setDownload(false);
      setIsLoading(true);
      onButtonClick(
        checked[0]?.url,
        checked[0]?.title,
        checked[0]?.url.substr(-4),
      ).then(() => {
        setError(false);
        setDownload(true);
        setIsLoading(false);
      });
    }
  };
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
                          id={String(e.title + String(i))}
                          name={"tab_bim_" + i}
                          title={data.title}
                          onChangeData={() => handleOnChange(data)}
                          isSelected={
                            checked.filter((item) => item.title === data.title)
                              .length > 0
                          }
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
      <div
        onClick={handleOnCLick}
        className={
          download ? `${Styles.disabled_active}` : `${Styles.disabled}`
        }
      >
        <Button>
          Скачать
          {isLoading ? <SpinnerButton /> : <DownloadIcon />}
        </Button>
        {error && <span className={Styles.error__span}>Выберите файл</span>}
      </div>
      {/*<Button onClick={() => handleOnCLick()}>Скачать</Button>*/}
    </div>
  );
};

export { ModalForm };

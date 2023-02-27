import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { modalBiData } from "./MockData";
import Styles from "./ModalBim.module.scss";
import { useGetBimModal } from "service/list/getBimModal";
import {
  IBIMModalResponse,
  IModalBIMGroups,
  IModalBIMItem,
} from "features/resources/tab_bim/Bim";

const ModalBim: FC<IModalBIMGroups[]> = () => {
  const [bimLists, setBimLists] = useState<IModalBIMItem[]>();
  const { getBimModal } = useGetBimModal();

  const handleOnClickCheckbox = () => {
    console.log("Клик");
  };

  //Данные по БИМ МОДАЛКИ
  useEffect(() => {
    getBimModal().then((data: IBIMModalResponse) => {
      data &&
        !data.hasError &&
        setBimLists(data.response[0].modelGroups[0].modelDocuments);
    });
  }, []);

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
                      id={String(e.id)}
                      name={"tab_bim" + e.id}
                      title={e.title}
                      onClick={() => handleOnClickCheckbox()}
                      onChangeData={() => handleOnClickCheckbox()}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <Button children={"Скачать"} />
        </div>
      </div>
      <div>
        {bimLists?.map((items, i) => {
          console.log("items", items);
          return (
            <div key={i}>
              <li>{items.title}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ModalBim };

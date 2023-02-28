import { Button } from "components/button";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import Styles from "./ModalBim.module.scss";
import { useGetBimModal } from "service/list/getBimModal";
import {
  IBIMModalResponse,
  IModalBIMGroups,
  IModalBIMItem,
  IModelGroups,
} from "features/resources/tab_bim/Bim";
import { RadioBoxContainer } from "components/radiobox";

const ModalBim: FC<IModalBIMGroups> = () => {
  const [bimLists, setBimLists] = useState<IModalBIMItem[]>();
  const { getBimModal } = useGetBimModal();
  const [result, setResult] = useState<IModalBIMItem[]>();

  const handleOnClickRadio = (title: string) => {
    const data: IModelGroups = bimLists.filter(
      (item) => item.title === title,
    )[0];
    setResult(data.modelDocuments);
  };

  useEffect(() => {
    getBimModal().then((data: IBIMModalResponse) => {
      data && !data.hasError && setBimLists(data.response[0].modelGroups);
    });
  }, []);

  return (
    <div className={Styles.bim__modal}>
      <h2 className={Styles.bim__modal__title}>Тип файла</h2>
      <div className={Styles.bim__modal__items}>
        <div className={Styles.bim__modal__download}>
          <div className={Styles.bim__modal__download__items}>
            <ul className={Styles.bim__modal__download__items__block}>
              {bimLists?.map((e, i) => {
                return (
                  <li key={i}>
                    <RadioBoxContainer
                      onChangeData={() => handleOnClickRadio(e.title)}
                      id={String(e.bimModelDocumentId)}
                      name={"tab_bim" + e.bimModelDocumentId}
                      title={e.title}
                    />
                  </li>
                );
              })}
            </ul>
            <div className={Styles.radios_block}>
              {result?.map((items, i) => {
                return (
                  <div className={Styles.radios_result} key={i}>
                    <RadioBoxContainer
                      onChangeData={() => handleOnClickRadio(items.title)}
                      id={String(items.bimModelDocumentId)}
                      name={"tab_bim" + items.bimModelDocumentId}
                      title={items.title}
                    />
                  </div>
                );
              })}
              <Button children={"Скачать"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalBim };

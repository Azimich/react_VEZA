import { Button } from "components/button";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import Styles from "./ModalBim.module.scss";
import { useGetBimModal } from "service/list/getBimModal";
import {
  IModalBIMGroups,
  IModalBIMItem,
  IModelGroups,
} from "features/resources/tab_bim/Bim";
import { CheckboxWithLabel } from "components/checkbox";

const ModalBim: FC<IModalBIMGroups> = () => {
  const [bimLists, setBimLists] = useState<IModelGroups[]>();
  const { getBimModal } = useGetBimModal();
  const [selectedGroup, setSelectedGroup] = useState<IModelGroups>(null);
  const [selectedDownLoad, setSelectedDownload] = useState<IModelGroups>(null);

  useEffect(() => {
    getBimModal().then((data) => {
      setBimLists(data.response[0].modelGroups);
      setSelectedGroup(data.response[0].modelGroups[0]);
    });
  }, []);
  const handleOnClickRadio = (e: IModelGroups) => {
    setSelectedGroup(e);
    setSelectedDownload(null);
  };
  const handleOnClickDownload = (e: IModalBIMItem) => {
    setSelectedDownload(e);
  };
  return (
    <div className={Styles.bim__modal}>
      <div className={Styles.bim__modal__items}>
        <div className={Styles.bim__modal__download}>
          <div className={Styles.bim__modal__download__items}>
            <ul className={Styles.bim__modal__download__items__block}>
              {bimLists?.map((e, i) => {
                return (
                  <li key={i}>
                    <CheckboxWithLabel
                      onChangeData={() => handleOnClickRadio(e)}
                      isSelected={selectedGroup.title == e.title}
                      id={String(i)}
                      name={"download"}
                      title={e.title}
                    />
                  </li>
                );
              })}
            </ul>
            <div className={Styles.radios_block}>
              {selectedGroup?.modelDocuments.map((items, i) => {
                return (
                  <div className={Styles.radios_result} key={"_" + i}>
                    <CheckboxWithLabel
                      onChangeData={() => handleOnClickDownload(items)}
                      isSelected={selectedDownLoad?.title === items.title}
                      id={"_" + i}
                      name={"tab_bim_"}
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

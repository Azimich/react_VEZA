import Styles from "./Map.module.scss";
import { factoryData, WhoWeMapData } from "./mockData";
import React, { FC, useState } from "react";
import { MapItem } from "./MapItem";
import { FactoryItem } from "./FactoryItem";
import { Modal, useModal } from "../modal";
import { IFactoryItem } from "./Map";
import { ModalFormFactory } from "./ModalFormFactory";

const MapContainer: FC = () => {
  const { isShow, toggle } = useModal();
  const [contentForm, setContentForm] = useState<IFactoryItem>();

  const handleOnClick = (e: IFactoryItem, alias: string) => {
    e.alias = alias;
    setContentForm(e);
    toggle();
  };

  return (
    <div className={Styles.whowe_map_container}>
      <svg
        className={Styles.company__map_svg}
        width="100%"
        height="100%"
        id={"parent_map"}
        viewBox="0 0 1225 719"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {WhoWeMapData.map((e) => {
          return <MapItem {...e} key={"map" + e.id} />;
        })}
      </svg>
      {factoryData.map((e) => {
        return (
          <FactoryItem
            {...e}
            onClick={(e: IFactoryItem, alias: string) =>
              handleOnClick(e, alias)
            }
            key={"fac" + e.id}
          />
        );
      })}
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={<ModalFormFactory {...contentForm} />}
        theme={"modal"}
        headerText={"Тип файла"}
      ></Modal>
    </div>
  );
};
export { MapContainer };

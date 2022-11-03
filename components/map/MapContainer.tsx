import Styles from "./Map.module.scss";
import { WhoWeMapData } from "./mockData";
import React, { FC, useState } from "react";
import { MapItem } from "./MapItem";
import { FactoryItem } from "./FactoryItem";
import { Modal, useModal } from "../modal";
import { IObjectItem } from "./Map";
import { ModalFormFactory } from "./ModalFormFactory";
import { whoweData } from "../../features/about/mockData";

const MapContainer: FC = () => {
  const { isShow, toggle } = useModal();
  const [contentForm, setContentForm] = useState<IObjectItem>();
  const [currentClass, setCurrentClass] = useState<string>("");

  const handleOnClick = (e: IObjectItem, alias: string) => {
    e.alias = alias;
    setContentForm(e);
    toggle();
  };
  const handleMouseHover: React.MouseEventHandler<HTMLElement> = (e) => {
    setCurrentClass(e.currentTarget.dataset.class);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    setCurrentClass("none");
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
          return (
            <MapItem
              {...e}
              key={"map" + e.id}
              currentClass={currentClass}
              onMouseEnter={(
                e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
              ) => handleMouseHover(e)}
              onMouseLeave={(
                e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
              ) => handleMouseLeave(e)}
            />
          );
        })}
      </svg>
      {whoweData.map((e) => {
        return (
          <FactoryItem
            {...e}
            onClick={(e: IObjectItem, alias: string) => handleOnClick(e, alias)}
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

import Styles from "./Map.module.scss";
import { WhoWeMapData } from "./mockData";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { MapItem } from "./MapItem";
import { FactoryItem } from "./FactoryItem";
import { Modal, useModal } from "../modal";
import { IObject, IObjectItem } from "./Map";
import { ModalFormFactory } from "./ModalFormFactory";
import { whoweData } from "../../features/about/mockData";
import { useRouter } from "next/router";
import { referenceObject } from "../../features/about/tab_references/mockData";
import { ReferenceItem } from "./ReferenceItem";
import { SideBar } from "./SideBar";
import { tabsSocialData } from "features/contacts/mockData";
import { ITab } from "components/tabs/Tabs";

const MapContainer: FC = () => {
  const { isShow, toggle } = useModal();
  const [contentForm, setContentForm] = useState<IObjectItem>();
  const [currentClass, setCurrentClass] = useState<string>("");
  const [sideBarData] = useState(tabsSocialData);
  const [selectedCheckBox, setSelectedCheckBox] = useState<ITab[]>([]);
  const [selectedReferenceData, setSelectedReferenceData] = useState<IObject[]>(
    []
  );

  let FormOutPut: ReactNode[];
  const router = useRouter();
  switch (router.query.slug) {
    case "whowe":
      FormOutPut = whoweData.map((e) => {
        return (
          <FactoryItem
            {...e}
            onClick={(e: IObjectItem, alias: string) => handleOnClick(e, alias)}
            key={"fac" + e.id}
          />
        );
      });
      break;
    case "references":
      FormOutPut =
        selectedReferenceData.length > 0 &&
        selectedReferenceData.map((e) => {
          return (
            <ReferenceItem
              {...e}
              onClick={(e: IObjectItem, alias: string) =>
                handleOnClick(e, alias)
              }
              key={"fac" + e.id}
            />
          );
        });
      break;
  }

  useEffect(() => {
    setSelectedReferenceData(
      referenceObject.filter(
        (item) =>
          selectedCheckBox
            .map((e) => e.url)
            .flat()
            .indexOf(item.type_object) !== -1
      )
    );
  }, [selectedCheckBox]);

  const handleSideBarClick = (e: ITab) => {
    setSelectedCheckBox(
      selectedCheckBox.filter((item) => item.id === e.id).length > 0
        ? selectedCheckBox.filter((item) => item.id !== e.id)
        : [...selectedCheckBox, e]
    );
  };

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
    <div>
      <div className={Styles.map_container}>
        <SideBar
          onChange={(e: ITab) => handleSideBarClick(e)}
          tabsSocialData={sideBarData}
        />
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
        {FormOutPut}
        <Modal
          isShow={isShow}
          hide={toggle}
          modalContent={<ModalFormFactory {...contentForm} />}
          theme={"modal"}
          headerText={"Тип файла"}
        ></Modal>
      </div>
    </div>
  );
};
export { MapContainer };

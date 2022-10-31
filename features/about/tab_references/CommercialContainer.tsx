import { referenceData } from "./mockData";
import Styles from "./References.module.scss";
import { ReferencesItem } from "./ReferencesItem";
import React, { FC, useState } from "react";
import { Modal, useModal } from "../../../components/modal";
import { IReferencesImages } from "./References";
import { SliderContainer } from "../../../components/slider";
import { ISlideItem } from "../../../components/slider/Slider.d";

const CommercialContainer: FC = () => {
  const { isShow, toggle } = useModal();
  const [clickDataR, setClickDataR] = useState<ISlideItem[]>();
  const rData = referenceData.filter((e) => e.type_code === "commercial");
  const handleOnClick = (e: IReferencesImages) => {
    setClickDataR(e.items);
    toggle();
  };

  return (
    <div className={Styles.tab_container}>
      <ul>
        {rData.map((e) => {
          return (
            <ReferencesItem
              {...e}
              key={e.id}
              onClick={(e: IReferencesImages) => handleOnClick(e)}
            />
          );
        })}
      </ul>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={
          <SliderContainer
            items={clickDataR}
            dots={true}
            autoplay={false}
            theme={"homecategory"}
            themeButton={"industries"}
            size={"max"}
            effectSlide={"cards"}
            color={"link"}
          />
        }
        theme={"full_modal"}
        headerText={"Тип файла"}
      ></Modal>
    </div>
  );
};
export { CommercialContainer };

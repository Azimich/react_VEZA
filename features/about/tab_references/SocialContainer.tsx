import { Modal, useModal } from "../../../components/modal";
import React, { useState } from "react";
import { ISlideItem } from "../../../components/slider/Slider.d";
import { referenceData } from "./mockData";
import { IReferencesImages } from "./References";
import Styles from "./References.module.scss";
import { ReferencesItem } from "./ReferencesItem";
import { SliderContainer } from "../../../components/slider";

const SocialContainer = () => {
  const { isShow, toggle } = useModal();
  const [clickDataR, setClickDataR] = useState<ISlideItem[]>();
  const rData = referenceData.filter((e) => e.type_code === "social");

  const handleOnClickSocial = (e: IReferencesImages) => {
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
              onClick={(e: IReferencesImages) => handleOnClickSocial(e)}
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

export { SocialContainer };

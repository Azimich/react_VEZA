import React, { FC } from "react";
import { sliderFactoryData } from "../factorySlider/MockData";
import { SliderContainer } from "../../../components/slider";
import Styles from "./FactorySliderContainer.module.scss";
import { ISliderData } from "./FactorySlider";

const FactorySliderContainer: FC<ISliderData> = ({ onClick }) => {
  console.log("123", onClick);

  return (
    <div className={Styles.factory}>
      <SliderContainer
        items={sliderFactoryData.items}
        theme={"factorySlider"}
        autoplay={true}
        loop={true}
        slidesPerView={6}
        spaceBetween={8}
        navigations={true}
        OnClick={() => console.log("1324")}
      />
    </div>
  );
};

export { FactorySliderContainer };

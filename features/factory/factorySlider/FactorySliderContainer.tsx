import React, { FC, useState } from "react";
import { sliderFactoryData } from "../factorySlider/MockData";
import { SliderContainer } from "../../../components/slider";
import Styles from "./FactorySliderContainer.module.scss";
import { ISliderData } from "./FactorySlider";

const FactorySliderContainer: FC<ISliderData> = () => {
  const [activePage, setActivePage] = useState<string>("2005");
  const handleOnClick = (code: string) => {
    setActivePage(code);
  };

  console.log("ooo", activePage);
  return (
    <div className={Styles.factory}>
      <SliderContainer
        items={sliderFactoryData.items}
        theme={"factorySlider"}
        autoplay={false}
        loop={false}
        slidesPerView={6}
        spaceBetween={8}
        navigations={true}
        OnClick={(code) => handleOnClick(code)}
      />
      <div>{activePage}</div>
    </div>
  );
};

export { FactorySliderContainer };

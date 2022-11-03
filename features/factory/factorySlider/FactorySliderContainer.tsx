import React, { FC, useState } from "react";
import { sliderFactoryData } from "../factorySlider/MockData";
import { SliderContainer } from "../../../components/slider";
import Styles from "./FactorySliderContainer.module.scss";
import { ISliderData } from "./FactorySlider";
import { FactoryItem } from "../FactoryItem";
import { IFactoryData } from "../Factory";
import { FactoryData } from "../mockData";

const FactorySliderContainer: FC<ISliderData> = () => {
  const [activePage, setActivePage] = useState<string>("2000");
  const [currentFactory, setcurrentFactory] = useState<IFactoryData[]>(() =>
    FactoryData.filter((e) => e.code === "2000")
  );

  const handleOnClick = (code: string) => {
    setActivePage(code);
    setcurrentFactory(() => FactoryData.filter((e) => e.code === code));
  };

  console.log("ooo", currentFactory);
  return (
    <div className={Styles.factory}>
      <SliderContainer
        items={sliderFactoryData.items}
        theme={"factorySlider"}
        autoplay={false}
        loop={false}
        slidesPerView={5}
        spaceBetween={8}
        navigations={true}
        OnClick={(code: string) => handleOnClick(code)}
      />
      <div>{activePage}</div>
      {currentFactory.map((item) => {
        return <FactoryItem {...item} />;
      })}
    </div>
  );
};

export { FactorySliderContainer };

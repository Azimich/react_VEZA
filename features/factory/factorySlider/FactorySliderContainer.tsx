import React, { FC, useState } from "react";
import { sliderFactoryData } from "../factorySlider/MockData";
import { SliderContainer } from "../../../components/slider";
import Styles from "./FactorySliderContainer.module.scss";
import { ISliderData } from "./FactorySlider";
import { IComponents } from "../../../components/tabs/Tabs";
import { Commercial, Industrial, Social } from "../../about";

const FactorySliderContainer: FC<ISliderData> = () => {
  const [activePage, setActivePage] = useState<string>("2005");
  const handleOnClick = (code: string) => {
    setActivePage(code);
  };
  const components: IComponents = {
    tab_commercial: Commercial,
    tab_industrial: Industrial,
    tab_social: Social,
  };

  return (
    <div className={Styles.factory}>
      <SliderContainer
        items={sliderFactoryData.items}
        theme={"factorySlider"}
        slidesPerView={6}
        spaceBetween={8}
        navigations={true}
        OnClick={(code) => handleOnClick(code)}
      />
      <div></div>
    </div>
  );
};

export { FactorySliderContainer };

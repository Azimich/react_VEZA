import React from "react";
import { sliderFactoryData } from "../factorySlider/MockData";
import { SliderContainer } from "../../../components/slider";

const FactorySliderContainer = () => {
  return (
    <div className="factory">
      <SliderContainer
        items={sliderFactoryData.items}
        theme={"factorySlider"}
        autoplay={true}
        loop={true}
        slidesPerView={6}
        spaceBetween={8}
        navigations={true}
      />
    </div>
  );
};

export { FactorySliderContainer };

import React, { FC, useEffect, useState } from "react";
import { sliderFactoryData } from "../factorySlider/MockData";
import { SliderContainer } from "components/slider";
import { ISliderData } from "./FactorySlider";
import { FactoryItem } from "../FactoryItem";
import { IFactoryData } from "../Factory";
import { useAppSelector } from "store/hooks";
import { getFactory } from "features/factory/FactorySlice";

const FactorySliderContainer: FC<ISliderData> = () => {
  const factoryData = useAppSelector(getFactory);
  console.log("factoryData", factoryData);
  const [activePage, setActivePage] = useState<string>("2000");
  const [currentFactory, setCurrentFactory] = useState([]);

  const handleOnClick = (code: string) => {
    setActivePage(code);
  };

  useEffect(() => {
    const aaa = factoryData.filter((e: IFactoryData) => {
      return e.code === activePage && e;
    });
    setCurrentFactory(aaa);
  }, [activePage]);

  return (
    <>
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
      {currentFactory.map((item) => {
        return <FactoryItem {...item} key={item.code} />;
      })}
    </>
  );
};

export { FactorySliderContainer };

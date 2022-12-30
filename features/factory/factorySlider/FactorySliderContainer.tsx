import React, { FC, useEffect, useState } from "react";
import { sliderFactoryData } from "../factorySlider/MockData";
import { SliderContainer } from "components/slider";
import { ISliderData } from "./FactorySlider";
import { FactoryItem } from "../FactoryItem";
import { IFactoryData } from "../Factory";
import { useAppSelector } from "store/hooks";
import { getFactory } from "features/factory/FactorySlice";
import Styles from "../FactoryItem.module.scss";

const FactorySliderContainer: FC<ISliderData> = () => {
  const factoryData = useAppSelector(getFactory);
  console.log("factoryData", factoryData);
  const [activePage, setActivePage] = useState<string>("2000");
  const [currentFactory, setCurrentFactory] = useState([]);

  const handleOnClick = (code: string) => {
    setActivePage(code);
  };

  useEffect(() => {
    const res = factoryData.filter((e: IFactoryData) => {
      return e.code === activePage && e;
    });
    setCurrentFactory(res);
  }, [activePage]);

  return (
    <div className={Styles.factory__slider}>
      <SliderContainer
        items={sliderFactoryData.items}
        theme={"factorySlider"}
        autoplay={true}
        loop={true}
        slidesPerView={5}
        activePage={activePage}
        spaceBetween={8}
        centeredSlides={true}
        navigations={false}
        OnClick={(code: string) => handleOnClick(code)}
        breakpoints={{
          280: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          375: {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
      />
      {currentFactory.map((item) => {
        return <FactoryItem {...item} key={item.code} />;
      })}
    </div>
  );
};

export { FactorySliderContainer };

import React from "react";
import { Container } from "components/common/container";
import { sliderFactoryData } from "./MockData";
import { SliderContainer } from "../../components/slider";
import Styles from "./SliderContainer.module.scss";

const SliderTestContainer = () => {
  return (
    <Container className="wrapper">
      <div className={Styles.factory}>
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
    </Container>
  );
};

export { SliderTestContainer };

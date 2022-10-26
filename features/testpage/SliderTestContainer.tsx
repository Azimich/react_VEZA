import React from "react";
import { Container } from "components/common/container";
import { sliderFactoryData } from "./MockData";
import { SliderContainer } from "../../components/slider";
import Styles from "./SliderContainer.module.scss";

const SliderTestContainer = () => {
  return (
    <Container className="wrapper">
      <div className={Styles.zavod}>
        <SliderContainer
          items={sliderFactoryData.items}
          theme={"zavodSlider"}
          autoplay={true}
          loop={true}
          slidesPerView={6}
          spaceBetween={8}
          navigation={true}
        />
      </div>
    </Container>
  );
};

export { SliderTestContainer };

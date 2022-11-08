import { Container } from "components/common/container";
import { FactorySliderContainer } from "./factorySlider";
import { FC } from "react";

const FactoryContainer: FC = () => {
  return (
    <Container className="wrapper">
      <FactorySliderContainer />
    </Container>
  );
};

export { FactoryContainer };

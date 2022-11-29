import { FC } from "react";
import { Container } from "components/common/container";
import { FactorySliderContainer } from "./factorySlider";

const FactoryContainer: FC = () => {
  return (
    <Container className="wrapper">
      <FactorySliderContainer />
    </Container>
  );
};

export { FactoryContainer };

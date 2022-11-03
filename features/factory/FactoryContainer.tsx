import { Container } from "components/common/container";
import { FactoryItem } from "./FactoryItem";
import { FactorySliderContainer } from "./factorySlider";
import { FactoryData } from "./mockData";

const FactoryContainer = () => {
  const onClickFactory = () => {};

  return (
    <Container className="wrapper">
      <FactorySliderContainer onClick={() => onClickFactory()} />
      {FactoryData &&
        FactoryData.map((item) => {
          return <FactoryItem {...item} />;
        })}
    </Container>
  );
};

export { FactoryContainer };

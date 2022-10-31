import { Container } from "components/common/container";
import { FactoryItem } from "./FactoryItem";
import { FactorySliderContainer } from "./factorySlider";
import { FactoryData } from "./mockData";

const FactoryContainer = () => {
  return (
    <Container className={"wrapper"}>
      <FactorySliderContainer />
      <FactoryItem />
      {FactoryData &&
        FactoryData.map((item) => {
          return <FactoryItem {...item} />;
        })}
    </Container>
  );
};

export { FactoryContainer };

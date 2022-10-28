import { Container } from "components/common/container";
import { FactoryItem } from "./FactoryItem";

const FactoryContainer = () => {
  return (
    <Container className={"wrapper"}>
      <FactoryItem />
    </Container>
  );
};

export { FactoryContainer };

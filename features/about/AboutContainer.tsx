import { Container } from "../../components/common/container";
import { Job, References, WhoWe } from "./index";

const AboutContainer = () => {
  return (
    <Container className={"wrapper"}>
      About Container OK
      <WhoWe />
      <References />
      <Job />
    </Container>
  );
};
export { AboutContainer };

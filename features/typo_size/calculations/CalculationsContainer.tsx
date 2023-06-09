import Styles from "./Calculations.module.scss";
import { InDevelopmentContainer } from "components/inDevelopment/InDevelopmentContainer";
import { Container } from "components/common/container";

const CalculationsContainer = () => {
  return (
    <Container className="wrapper_clear">
      <div className={Styles.calculations_container}>
        <InDevelopmentContainer />
      </div>
    </Container>
  );
};

export { CalculationsContainer };

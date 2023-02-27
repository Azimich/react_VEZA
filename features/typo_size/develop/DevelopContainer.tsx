import Styles from "./Develop.module.scss";
import { InDevelopmentContainer } from "components/inDevelopment/InDevelopmentContainer";
import { Container } from "components/common/container";

const DevelopContainer = () => {
  return (
    <Container className="wrapper_clear">
      <div className={Styles.develop_container}>
        <InDevelopmentContainer />
      </div>
    </Container>
  );
};

export { DevelopContainer };

import Styles from "./Calculations.module.scss";
import { InDevelopmentContainer } from "components/inDevelopment/InDevelopmentContainer";

const CalculationsContainer = () => {
  return (
    <div className={Styles.calculations_container}>
      <InDevelopmentContainer />
    </div>
  );
};

export { CalculationsContainer };

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SelectData } from "./Select.data";
import Styles from "./Selector.module.scss";

const animatedComponents = makeAnimated();

const SelectorContainer = () => {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={SelectData}
      className={Styles.job_container}
    />
  );
};
export { SelectorContainer };

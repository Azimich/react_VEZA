import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SelectData } from "./Select.data";
import Styles from "./Selector.module.scss";
import { FC } from "react";
import { IStateOption } from "./Select";
const animatedComponents = makeAnimated();

const SelectorContainer: FC<IStateOption> = ({
  closeMenuOnSelect = true,
  isMulti = false,
  placeholder = "",
  onChange,
}) => {
  const handleOnChange = (e: IStateOption) => {
    return onChange(e);
  };

  return (
    <Select
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      isMulti={isMulti}
      options={SelectData}
      className={Styles.job_container}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

export { SelectorContainer };

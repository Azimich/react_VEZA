import Select from "react-select";
import makeAnimated from "react-select/animated";
import Styles from "./Select.module.scss";
import { FC } from "react";
import { IOptionSetting } from "./Select";

const animatedComponents = makeAnimated();

const SelectContainer: FC<IOptionSetting> = ({
  closeMenuOnSelect = true,
  optionsData = [],
  defaultValue,
  name = "select",
  isMulti = false,
  placeholder = "",
  onChange,
}) => {
  return (
    <Select
      name={name}
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      defaultValue={defaultValue}
      isSearchable
      isClearable
      isMulti={isMulti}
      options={optionsData}
      className={Styles.job_container}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export { SelectContainer };

import Select from "react-select";
import makeAnimated from "react-select/animated";
import Styles from "./Select.module.scss";
import { FC, ReactNode } from "react";
import { IOptionSetting } from "./Select";
import { SelectCommon } from "./layout/SelectCommon";

const animatedComponents = makeAnimated();

const SelectContainer: FC<IOptionSetting> = ({
  instanceId = "0",
  closeMenuOnSelect = true,
  optionsData = [],
  defaultValue,
  name = "select",
  isMulti = false,
  placeholder = "",
  type = "common",
  onChange,
}) => {
  let selectCurrent: ReactNode;
  console.log("543", optionsData);
  switch (type) {
    case "common":
      selectCurrent = (
        <SelectCommon
          instanceId={instanceId}
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
      break;

    default:
      selectCurrent = (
        <SelectCommon
          instanceId={instanceId}
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
      break;
  }

  return selectCurrent;
};

export { SelectContainer };

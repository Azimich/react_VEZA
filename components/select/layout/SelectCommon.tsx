import Select from "react-select";
import makeAnimated from "react-select/animated";
import Styles from "../Select.module.scss";
import { FC } from "react";
import { IOptionSetting } from "../Select";
import { ConnectError } from "components/connect_error";

const animatedComponents = makeAnimated();

const SelectCommon: FC<IOptionSetting> = ({
  instanceId = "0",
  closeMenuOnSelect = true,
  optionsData = [],
  defaultValue,
  name = "select",
  isMulti = false,
  placeholder = "",
  onChange,
  value,
}) => {
  return (
    <Select
      instanceId={instanceId}
      name={name}
      isClearable={false}
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      defaultValue={defaultValue}
      isSearchable
      isMulti={isMulti}
      options={optionsData}
      className={Styles.job_container}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? <ConnectError type={"text"} /> : "No results found"
      }
    />
  );
};

export { SelectCommon };

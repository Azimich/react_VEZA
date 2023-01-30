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
  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #e1e1e1",
        boxShadow: "none",
      },
      "&:focus": {
        border: "1px solid #e1e1e1",
        outline: "none",
        boxShadow: "none",
      },
    }),
    singleValue: (styles: any) => ({
      ...styles,
      "&:focused": {
        color: "blue",
      },
    }),
  };

  return (
    <Select
      styles={customStyles}
      instanceId={instanceId}
      name={name}
      isClearable={false}
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      defaultValue={defaultValue}
      isSearchable={true}
      isMulti={isMulti}
      classNamePrefix={"hies"}
      options={optionsData}
      className={Styles.job_container}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? <ConnectError type={"text"} /> : "Город не найден"
      }
    />
  );
};

export { SelectCommon };

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
      border: "1px solid #e1e1e1",
      "&:hover": {
        border: "1px solid #e1e1e1",
        boxShadow: "none",
        color: "red",
      },
      "&:focus": {
        border: "1 solid #e1e1e1",
        outline: "none",
        boxShadow: "none",
        opacity: "0.5",
      },
      // You can also use state.isFocused to conditionally style based on the focus state
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
      isSearchable
      isMulti={isMulti}
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

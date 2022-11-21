import Styles from "./Select.module.scss";
import { FC, ReactNode } from "react";
import { IOptionSetting } from "./Select";
import { SelectCommon } from "./layout/SelectCommon";
import { SelectCompanyInn } from "components/select/layout/SelectCompanyInn";

const SelectContainer: FC<IOptionSetting> = ({
  instanceId = "0",
  isMulti = false,
  placeholder = "",
  closeMenuOnSelect = true,
  name = "select",
  onChange,
  optionsData = [],
  defaultValue,
  type = "common",
}) => {
  const handleOnChangeInn = (e: any) => {
    console.log("export", e);
  };
  let selectCurrent: ReactNode;
  switch (type) {
    case "common":
      selectCurrent = (
        <SelectCommon
          instanceId={instanceId}
          name={name}
          closeMenuOnSelect={closeMenuOnSelect}
          defaultValue={defaultValue}
          isMulti={isMulti}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          optionsData={optionsData}
        />
      );
      break;
    case "company_inn":
      selectCurrent = (
        <SelectCompanyInn
          instanceId={instanceId}
          name={name}
          closeMenuOnSelect={closeMenuOnSelect}
          defaultValue={defaultValue}
          isMulti={isMulti}
          optionsData={optionsData}
          placeholder={placeholder}
          onChange={(e) => handleOnChangeInn(e)}
        />
      );
      break;
    default:
      selectCurrent = (
        <SelectCommon
          instanceId={instanceId}
          name={name}
          closeMenuOnSelect={closeMenuOnSelect}
          defaultValue={defaultValue}
          isMulti={isMulti}
          optionsData={optionsData}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      );
      break;
  }

  return <>{selectCurrent}</>;
};

export { SelectContainer };

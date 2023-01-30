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
  classNameProps = "",
  value,
}) => {
  let selectCurrent: ReactNode;
  switch (type) {
    case "common":
      selectCurrent = (
        <SelectCommon
          classNameProps={`${classNameProps}`}
          instanceId={instanceId}
          name={name}
          closeMenuOnSelect={closeMenuOnSelect}
          defaultValue={defaultValue}
          isMulti={isMulti}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          optionsData={optionsData}
          value={value}
        />
      );
      break;
    case "organizationINN":
      selectCurrent = (
        <SelectCompanyInn
          classNameProps={`${classNameProps}`}
          instanceId={instanceId}
          name={name}
          closeMenuOnSelect={closeMenuOnSelect}
          defaultValue={defaultValue}
          isMulti={isMulti}
          optionsData={optionsData}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={value}
        />
      );
      break;
    case "variantNews":
      selectCurrent = (
        <SelectCompanyInn
          classNameProps={`${classNameProps}`}
          instanceId={instanceId}
          name={name}
          closeMenuOnSelect={closeMenuOnSelect}
          defaultValue={defaultValue}
          isMulti={isMulti}
          optionsData={optionsData}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={value}
        />
      );
      break;
    default:
      selectCurrent = (
        <SelectCommon
          classNameProps={`${classNameProps}`}
          instanceId={instanceId}
          name={name}
          closeMenuOnSelect={closeMenuOnSelect}
          defaultValue={defaultValue}
          isMulti={isMulti}
          optionsData={optionsData}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={value}
        />
      );
      break;
  }

  return <>{selectCurrent}</>;
};

export { SelectContainer };

import Select from "react-select";
import makeAnimated from "react-select/animated";
import Styles from "../Select.module.scss";
import { FC } from "react";
import { IOptionItem, IOptionSetting } from "../Select";
import AsyncSelect from "react-select/async";
import { useGetDaData } from "service/getDaData";

const animatedComponents = makeAnimated();

const SelectCompanyInn: FC<IOptionSetting> = ({
  instanceId = "0",
  closeMenuOnSelect = true,
  optionsData = [],
  defaultValue,
  name = "select",
  isMulti = false,
  placeholder = "",
  onChange,
}) => {
  const { daData } = useGetDaData();

  const handleLoadOptions = (
    inputValue: string,
    callback: (options: IOptionItem[]) => void
  ) => {
    if (inputValue.length > 3) {
      daData().then((data) => {
        console.log("data", data);
      });
    }
  };

  return (
    <AsyncSelect
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
      loadOptions={handleLoadOptions}
    />
  );
};

export { SelectCompanyInn };

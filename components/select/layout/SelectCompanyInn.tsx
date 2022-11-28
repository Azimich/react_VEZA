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
    callback: (options: IOptionItem[]) => void,
  ) => {
    if (inputValue.length > 3) {
      daData(inputValue).then((data) => {
        callback(
          data.suggestions.map(
            (item: {
              data: { inn: string; address: { unrestricted_value: string } };
              value: string;
            }) => {
              return {
                value: item.data.inn,
                label:
                  item.data.inn +
                  " " +
                  item.value +
                  " " +
                  item.data.address.unrestricted_value,
                code: item.data.address.unrestricted_value,
              };
            },
          ),
        );
      });
    }
  };

  return (
    <AsyncSelect
      styles={
        {
          /*        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "grey" : "red",
        }),

        option: (styles) => {
          return {
            ...styles,
            backgroundColor: "red",
            color: "black",
          };
        },
*/
        }
      }
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
      noOptionsMessage={() => {
        return "Введите ИНН или название организации";
      }}
    />
  );
};

export { SelectCompanyInn };

import { SelectContainer } from "components/select/SelectContainer";
import React, { FC, useEffect } from "react";
import { dataContactsCitySelect } from "../mockData";
import Styles from "./SerchContainer.module.scss";
import { IOptionItem } from "../../../../components/select/Select";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  getOptionsOfficeSalesCity,
  getSelectedOfficeSalesCity,
  setOptionsOfficeSalesCity,
  setSelectedOfficeSalesCity,
} from "features/contacts/ContactsSlice";

const SearchContainer: FC = () => {
  const dispatch = useAppDispatch();

  const optionCity = useAppSelector(getOptionsOfficeSalesCity);
  const selectedCity = useAppSelector(getSelectedOfficeSalesCity);

  const handleOnClickSelect = (evt: IOptionItem) => {
    dispatch(setSelectedOfficeSalesCity({ selectedOfficeSalesCity: evt }));
  };

  useEffect(() => {
    dispatch(
      setSelectedOfficeSalesCity({
        selectedOfficeSalesCity: dataContactsCitySelect[0],
      }),
    );
    dispatch(
      setOptionsOfficeSalesCity({
        optionsOfficeSalesCity: dataContactsCitySelect,
      }),
    );
  }, [dataContactsCitySelect]);

  return (
    <div className={Styles.search}>
      <div className={Styles.search__select}>
        {optionCity.length > 0 && (
          <SelectContainer
            instanceId={"Select_search"}
            onChange={(evt: IOptionItem) => handleOnClickSelect(evt)}
            optionsData={optionCity}
            defaultValue={selectedCity}
          />
        )}
      </div>
    </div>
  );
};

export { SearchContainer };

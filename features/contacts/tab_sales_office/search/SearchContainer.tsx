import { SelectContainer } from "components/select/SelectContainer";
import React, { FC } from "react";
import Styles from "./SerchContainer.module.scss";
import { IOptionItem } from "components/select/Select";

import { ICities } from "features/about/tab_job/Job";
import { checkEmptyObject } from "utils/helpers";

interface ICitiesOption {
  response: ICities[];
  selectedCity: IOptionItem;
  handleOnClick?: (evt: IOptionItem) => void;
}

const SearchContainer: FC<ICitiesOption> = ({
  response,
  handleOnClick,
  selectedCity = {},
}) => {
  return (
    <div className={Styles.search}>
      <div className={Styles.search__select}>
        {response?.length > 0 && !checkEmptyObject(selectedCity) && (
          <SelectContainer
            instanceId={"Select_search"}
            onChange={(evt: IOptionItem) => handleOnClick(evt)}
            optionsData={response?.map((e) => {
              return {
                value: e.alias,
                label: e.city,
                districtFiasId: e.districtFiasId,
                address: e.city + ", " + e.address,
                latitude: e.latitude,
                longitude: e.longitude,
              };
            })}
            defaultValue={selectedCity}
          />
        )}
      </div>
    </div>
  );
};

export { SearchContainer };

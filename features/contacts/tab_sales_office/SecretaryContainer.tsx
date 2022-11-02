import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { getSelectedOfficeSalesCity } from "../ContactsSlice";
import Styles from "../Contacts.module.scss";
import { salesOfficeData } from "./mockData";
import { SalesOfficeItem } from "./SalesOfficeItem";

const SecretaryContainer = () => {
  const selectedCity = useAppSelector(getSelectedOfficeSalesCity);
  return (
    <div className={Styles.director}>
      <div className={Styles.director__items}>
        {salesOfficeData
          .filter((e) => e.code === selectedCity.value)
          .map((data) => {
            return data.items
              .filter((dir) => dir.type_code === "secretary")
              .map((itemData) => {
                return <SalesOfficeItem key={itemData.id} {...itemData} />;
              });
          })}
      </div>
    </div>
  );
};

export { SecretaryContainer };

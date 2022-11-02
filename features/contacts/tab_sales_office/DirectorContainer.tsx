import React from "react";
import Styles from "../Contacts.module.scss";
import { useAppSelector } from "../../../store/hooks";
import { getSelectedOfficeSalesCity } from "../ContactsSlice";
import { SalesOfficeItem } from "./SalesOfficeItem";
import { salesOfficeData } from "./mockData";

const DirectorContainer = () => {
  const selectedCity = useAppSelector(getSelectedOfficeSalesCity);
  return (
    <div className={Styles.director}>
      <div className={Styles.director__items}>
        {salesOfficeData
          .filter((e) => e.code === selectedCity.value)
          .map((data) => {
            return data.items
              .filter((dir) => dir.type_code === "director")
              .map((itemData) => {
                return <SalesOfficeItem key={itemData.id} {...itemData} />;
              });
          })}
      </div>
    </div>
  );
};

export { DirectorContainer };

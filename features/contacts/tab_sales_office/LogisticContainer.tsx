import React from "react";
import Styles from "../Contacts.module.scss";
import { useAppSelector } from "store/hooks";
import { getManagers } from "../ContactsSlice";
import { SalesOfficeItem } from "./SalesOfficeItem";

const LogisticContainer = () => {
  const managers = useAppSelector(getManagers);
  return (
    <div className={Styles.director}>
      <div className={Styles.director__items}>
        {managers.response
          .filter((e) => e.type === 0)
          .map((data) => {
            return <SalesOfficeItem key={data.title} {...data} />;
          })}
      </div>
    </div>
  );
};

export { LogisticContainer };

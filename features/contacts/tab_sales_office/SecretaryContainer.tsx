import React from "react";
import Styles from "../Contacts.module.scss";
import { useAppSelector } from "store/hooks";
import { getManagers } from "../ContactsSlice";
import { SalesOfficeItem } from "./SalesOfficeItem";

const SecretaryContainer = () => {
  const managers = useAppSelector(getManagers);
  console.log("112", managers);
  return (
    <div className={Styles.director}>
      <div className={Styles.director__items}>
        {managers.response
          .filter((e) => e.type === 1)
          .map((data) => {
            return <SalesOfficeItem key={data.title} {...data} />;
          })}
      </div>
    </div>
  );
};

export { SecretaryContainer };

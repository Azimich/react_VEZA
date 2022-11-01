import React from "react";
import { FC } from "react";
import { ISallesOffice } from "./SalesOffice";
import Styles from "./SalesOffice.module.scss";

const SalesOfficeItem: FC<ISallesOffice> = () => {
  return <div className={Styles.sales}></div>;
};

export { SalesOfficeItem };

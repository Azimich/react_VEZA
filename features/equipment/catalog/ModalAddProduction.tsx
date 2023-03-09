import React, { FC } from "react";
import Styles from "./ModalAddProduction.module.scss";

const ModalAddProduction: FC = () => {
  return (
    <div className={Styles.add_prod}>
      <div className={Styles.add_prod_banner}>banner</div>
      <div className={Styles.add_prod_info}>
        <div className={Styles.add_prod_info_left}></div>
        <div className={Styles.add_prod_info_right}></div>
      </div>
    </div>
  );
};

export { ModalAddProduction };

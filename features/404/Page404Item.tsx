import React from "react";
import { NotFoundIcon } from "components/icons";
import Styles from "./Page404Item.module.scss";

const Page404Item = () => {
  return (
    <div className={Styles.container__404}>
      <NotFoundIcon />
    </div>
  );
};

export default Page404Item;

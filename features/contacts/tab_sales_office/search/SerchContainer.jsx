import { Button } from "components/button";
import { SelectorContainer } from "components/selector/SelectorContainer";
import React from "react";
import Styles from "./SerchContainer.module.scss";

const SerchContainer = () => {
  return (
    <div className={Styles.search}>
      <div className={Styles.search__select}>
        <SelectorContainer />
      </div>
      <Button type={"button"} children={"Поиск"} />
    </div>
  );
};

export { SerchContainer };

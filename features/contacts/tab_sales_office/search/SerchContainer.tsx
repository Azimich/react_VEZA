import { Button } from "components/button";
import { SelectorContainer } from "components/selector/SelectorContainer";
import React from "react";
import Styles from "./SerchContainer.module.scss";
import { IStateOption } from "../../../../components/selector/Select";

const SerchContainer = () => {
  const [selectData, setSelectData] = React.useState<IStateOption>();
  console.log("54", selectData);

  const handleOnClickSearch = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("54", selectData);
  };

  const handleOnClickSelect = (evt: IStateOption) => {
    setSelectData(evt);
  };

  return (
    <div className={Styles.search}>
      <div className={Styles.search__select}>
        <SelectorContainer
          onChange={(evt: IStateOption) => handleOnClickSelect(evt)}
        />
      </div>
      <Button
        type={"button"}
        children={"Поиск"}
        onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleOnClickSearch(evt)
        }
      />
    </div>
  );
};

export { SerchContainer };

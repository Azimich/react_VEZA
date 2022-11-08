import { FC } from "react";

import { IFactoryData } from "./Factory";
import Styles from "./FactoryItem.module.scss";
import { FactoryItemDesc } from "features/factory/FactoryItemDesc";

const FactoryItem: FC<IFactoryData> = ({ itemsData }) => {
  const items = itemsData.length > 0 && itemsData[0]?.items;
  return (
    <>
      <div className={Styles.factory__items}>
        <div className={Styles.factory__items__top}>
          <h1>{itemsData.length > 0 && itemsData[0]?.firstTitle}</h1>
          <p>{itemsData.length > 0 && itemsData[0]?.descriptionTop}</p>
        </div>
        {items.map((e, i) => {
          return <FactoryItemDesc {...e} key={i} />;
        })}
      </div>
    </>
  );
};

export { FactoryItem };

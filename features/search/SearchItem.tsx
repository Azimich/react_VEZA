import { ISearchItem } from "features/search/Search";
import React, { FC } from "react";
import Styles from "./Search.module.scss";
import { Link } from "components/link";

const SearchItem: FC<ISearchItem> = ({ searchResult }) => {
  console.log("2131", searchResult);
  return (
    <div className={Styles.search__items__info}>
      <h1>{searchResult}</h1>
      <div className={Styles.more}>
        <Link url={"#"}>Подробнее ...</Link>
      </div>
    </div>
  );
};
export { SearchItem };

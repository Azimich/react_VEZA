import { ISearchData } from "features/search/Search";
import React, { FC } from "react";
import Styles from "./Search.module.scss";
import { Link } from "components/link";

const SearchItem: FC<ISearchData> = ({ title, desc, id }) => {
  return (
    <div className={Styles.search__items__info}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div className={Styles.more}>
        <Link url={"#"}>Подробнее ...</Link>
      </div>
    </div>
  );
};
export { SearchItem };

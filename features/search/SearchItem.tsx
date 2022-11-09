import { ISearchData } from "features/search/Search";
import { FC } from "react";
import Styles from "./Search.module.scss";

const SearchItem: FC<ISearchData> = ({ title, desc, id }) => {
  return (
    <div className={Styles.search__box_item}>
      <div className={Styles.search__box_item_title}>{title}</div>
      <div className={Styles.search__box_item_desc}>{desc}</div>
    </div>
  );
};
export { SearchItem };

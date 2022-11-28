import React from "react";
import { FC } from "react";
import Styles from "./SearchModal.module.scss";
import { Button } from "components/button";
import { Input } from "components/input/InputContainer";
import { SearchInputIcon } from "components/icons/includes/SearchInputIcon";
import { CloseIcon } from "components/icons";
import { SearchItem } from "features/search/SearchItem";
import { searchData } from "components/common/header/search/mockData";
import { ISearchData } from "features/search/Search";

const SearchModal: FC<{ onClick: () => void }> = ({ onClick }) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<ISearchData[]>([]);

  const handleOnChangeSearch = (event: any) => {
    event.target.value
      ? setFilteredData(
          searchData.filter((e) =>
            e.title.toLowerCase().includes(event.target.value.toLowerCase()),
          ),
        )
      : setFilteredData([]);
    setInputValue(event.target.value);
  };

  return (
    <div className={Styles.search}>
      <div className={Styles.search__content}>
        <img
          className={Styles.search__logo}
          src="/images/logo.svg"
          alt="Logo"
        />
        <div className={Styles.search__items}>
          <div className={Styles.search__items__input}>
            <Input
              value={inputValue}
              type={"text"}
              onChange={(event) => handleOnChangeSearch(event)}
              name={"search_catalog"}
              id={"search_catalog_id"}
              placeholder={"Поиск"}
              className={Styles.input_field}
            />
            <SearchInputIcon />
            {inputValue && (
              <span onClick={() => setInputValue("")} className={Styles.clear}>
                <CloseIcon />
              </span>
            )}
          </div>
        </div>
        {inputValue.length !== 0 && filteredData.length > 0
          ? filteredData.map((e) => {
              return <SearchItem {...e} key={e.id} />;
            })
          : inputValue.length !== 0 && <h2>Ничего не найдено</h2>}
        {filteredData.length > 5 && (
          <Button children={"Показать ещё"} onClick={() => onClick()} />
        )}
      </div>
    </div>
  );
};

export { SearchModal };

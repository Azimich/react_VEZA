import React from "react";
import { FC } from "react";
import Styles from "./SearchModal.module.scss";
import { Button } from "components/button";
import { Input } from "components/input/InputContainer";
import { SearchInputIcon } from "components/icons/includes/SearchInputIcon";
import { CloseIcon } from "components/icons";
import { SearchItem } from "features/search/SearchItem";
import { ISearchResponse } from "features/search/Search";
import { useSearch } from "service/list/search";

const SearchModal: FC<{ onClick: (inputValue: string) => void }> = ({
  onClick,
}) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<ISearchResponse>();
  const { search } = useSearch();

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    event.target.value.length > 3 &&
      search(event.target.value).then((data) => {
        setFilteredData(data);
      });
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
        {inputValue.length !== 0 && filteredData?.response.length > 0
          ? filteredData.response.map((e) => {
              return <SearchItem {...e} key={e.resultAlias} />;
            })
          : inputValue.length !== 0 && <h2>Ничего не найдено</h2>}
        {filteredData?.response.length > 5 && (
          <Button
            children={"Показать ещё"}
            onClick={() => onClick(inputValue)}
          />
        )}
      </div>
    </div>
  );
};

export { SearchModal };

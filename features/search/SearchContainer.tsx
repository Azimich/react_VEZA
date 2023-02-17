import React, { FC } from "react";
import { ISearch, ISearchResponse } from "features/search/Search";
import { Container } from "components/common/container";
import { SearchItem } from "features/search/SearchItem";
import Styles from "components/common/header/search/SearchModal.module.scss";
import { Input } from "components/input/InputContainer";
import { useSearch } from "service/list/search";

const SearchContainer: FC<ISearch> = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<ISearchResponse>();
  const { search } = useSearch();
  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    event.target.value.length > 3 &&
      search(event.target.value, -1).then((data) => {
        setFilteredData(data);
      });
  };

  return (
    <Container className={"wrapper"}>
      <div className={Styles.search__items__input}>
        <Input
          value={inputValue}
          id={"search_catalog_id"}
          type={"text"}
          onChange={(event) => handleOnChangeSearch(event)}
          name={"search_catalog"}
          placeholder={"Поиск"}
          className={Styles.input_field}
        />
      </div>
      {inputValue.length !== 0 && filteredData?.response.length > 0
        ? filteredData?.response.map((e) => {
            return <SearchItem {...e} key={e.resultAlias} />;
          })
        : inputValue.length !== 0 && <h2>Ничего не найдено</h2>}
    </Container>
  );
};

export { SearchContainer };

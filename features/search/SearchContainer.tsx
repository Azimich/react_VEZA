import React, { FC, useEffect } from "react";
import { ISearch, ISearchData } from "features/search/Search";
import { Container } from "components/common/container";
import { SearchItem } from "features/search/SearchItem";
import { Pagination } from "components/pagination/Pagination";
import Styles from "components/common/header/search/SearchModal.module.scss";
import { Input } from "components/input/InputContainer";
import { searchData } from "components/common/header/search/mockData";
import { useRouter } from "next/router";

const SearchContainer: FC<ISearch> = ({ q }) => {
  const router = useRouter();
  const [inputValue, setInputValue] = React.useState<string>(
    router.query.q as string
  );
  const [filteredData, setFilteredData] = React.useState<ISearchData[]>([]);
  useEffect(() => {
    inputValue
      ? setFilteredData(
          searchData.filter((e) =>
            e.title.toLowerCase().includes(inputValue.toLowerCase())
          )
        )
      : setFilteredData([]);
  }, [inputValue]);
  const handleOnChangeSearch = (event: any) => {
    setInputValue(event.target.value);
  };
  return (
    <Container className={"wrapper"}>
      <div className={Styles.search__items__input}>
        <Input
          value={inputValue}
          type={"text"}
          onChange={(event) => handleOnChangeSearch(event)}
          name={"search_catalog"}
          placeholder={"Поиск"}
          className={Styles.input_field}
        />
      </div>
      {inputValue.length !== 0 && filteredData.length > 0
        ? filteredData.map((e) => {
            return <SearchItem {...e} key={e.id} />;
          })
        : inputValue.length !== 0 && <h2>Ничего не найдено</h2>}
      <Pagination currentPage={1} totalPageCount={100} pageSize={10} />
    </Container>
  );
};

export { SearchContainer };

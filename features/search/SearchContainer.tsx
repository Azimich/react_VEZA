import React, { FC } from "react";
import { ISearch } from "features/search/Search";
import { Container } from "components/common/container";

import Styles from "components/common/header/search/SearchModal.module.scss";
import { Input } from "components/input/InputContainer";
import { useRouter } from "next/router";

const SearchContainer: FC<ISearch> = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = React.useState<string>(
    router.query.q as string,
  );
  /*const [filteredData] = React.useState<[]>([]);*/
  /*  useEffect(() => {
        inputValue
          ? setFilteredData(
              searchData.filter((e) =>
                e.title.toLowerCase().includes(inputValue.toLowerCase()),
              ),
            )
          : setFilteredData([]);
      }, [inputValue]);*/
  const handleOnChangeSearch = (event: any) => {
    setInputValue(event.target.value);
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
      {/*            {inputValue.length !== 0 && filteredData.length > 0
                ? filteredData.map((e) => {
                    return <SearchItem {...e} key={e.id}/>;
                })
                : inputValue.length !== 0 && <h2>Ничего не найдено</h2>}
            <Pagination currentPage={1} totalPageCount={100} pageSize={10}/>*/}
    </Container>
  );
};

export { SearchContainer };

import { FC } from "react";
import { ISearch } from "features/search/Search";
import { Container } from "components/common/container";
import { mockSearch } from "features/search/mockData";
import { SearchItem } from "features/search/SearchItem";
import { Pagination } from "components/pagination/Pagination";

const SearchContainer: FC<ISearch> = ({ q }) => {
  return (
    <Container className={"wrapper"}>
      {mockSearch.map((e, i) => {
        return <SearchItem {...e} key={i} />;
      })}
      <Pagination currentPage={1} totalPageCount={100} pageSize={10} />
    </Container>
  );
};

export { SearchContainer };

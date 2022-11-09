import { FC } from "react";
import { ISearch } from "features/search/Search";
import { Container } from "../../components/common/container";
import { mockSearch } from "features/search/mockData";
import { SearchItem } from "features/search/SearchItem";

const SearchContainer: FC<ISearch> = ({ q }) => {
  return (
    <Container className={"wrapper"}>
      {mockSearch.map((e, i) => {
        return <SearchItem {...e} key={i} />;
      })}
    </Container>
  );
};

export { SearchContainer };

import { Container } from "../../components/common/container";
import { INewDataItem, INewsData } from "./News";
import { FC, useState } from "react";
import { NewsWithItem } from "./NewsWithItem";
import Styles from "./News.module.scss";
import { NewsWithOutItem } from "./NewsWithOutItem";
import { Pagination } from "../../components/pagination/Pagination";

const NewsContainer: FC<INewsData> = ({ newsData, newsItem }) => {
  const [newsWithDesc] = useState<INewDataItem[]>(newsData.slice(0, 4));
  const [newsWithOutDesc] = useState<INewDataItem[]>(newsData.slice(4));
  console.log("newsItem", newsItem);
  return (
    <>
      <Container className={"wrapper"}>
        {newsWithDesc.map((e) => {
          return <NewsWithItem {...e} key={e.id} />;
        })}
        <ul className={Styles.new_with_out_container}>
          {newsWithOutDesc.map((e) => {
            return <NewsWithOutItem {...e} key={e.id} />;
          })}
        </ul>
        <Pagination currentPage={1} totalPageCount={5} pageSize={3} />
      </Container>
    </>
  );
};

export { NewsContainer };

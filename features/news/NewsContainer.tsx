import { Container } from "components/common/container";
import { ISSRNews } from "./News";
import { FC } from "react";
import { Pagination } from "components/pagination/Pagination";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { BreadCrumbs } from "components/breadcrumbs";
import { NewsWithItem } from "features/news/NewsWithItem";

const NewsContainer: FC<ISSRNews> = ({ newsData }) => {
  console.log("111", newsData);
  return (
    <>
      <Container className={"wrapper_clear"}>
        <BreadCrumbs data={dataBreadNews} />
        {newsData.response &&
          newsData.response.map((e) => {
            return <NewsWithItem {...e} key={e.newsId} />;
          })}
        {!newsData.hasError && (
          <Pagination
            onPageChange={() => {
              newsData.page.pageNumber;
            }}
            currentPage={newsData.page?.pageNumber}
            totalPageCount={newsData.page?.totalPages}
            pageSize={newsData.page?.pageSize}
          />
        )}
      </Container>
    </>
  );
};

export { NewsContainer };

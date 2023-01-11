import { Container } from "components/common/container";
import { INewsDataItem, ISSRHome } from "./News";
import { FC, useEffect, useState } from "react";
import { Pagination } from "components/pagination/Pagination";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { BreadCrumbs } from "components/breadcrumbs";
import { NewsWithItem } from "features/news/NewsWithItem";
import { useRouter } from "next/router";
import { newsPath } from "utils/bootstrap";
import { useGetNews } from "service/list/getNews";
import { IPage } from "../../types/response";
import { ConnectError } from "components/connect_error";

const NewsContainer: FC<ISSRHome> = ({ newsData }) => {
  const router = useRouter();
  const { getNewsData } = useGetNews();
  const [newsDataState, setNewsDataState] = useState<INewsDataItem[]>(
    newsData.response,
  );
  const [newsPageState, setNewsPageState] = useState<IPage>(newsData.page);

  useEffect(() => {
    getNewsData(Number(router.query.page) || 1, 6).then((data) => {
      setNewsPageState(data?.page);
      setNewsDataState(data?.response);
    });
  }, [router.query.page]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={dataBreadNews} />
      {!newsData.hasError ? (
        newsDataState.map((e) => {
          return <NewsWithItem {...e} key={e.newsId} />;
        })
      ) : (
        <ConnectError type={"text"} />
      )}
      {!newsData.hasError && (
        <Pagination
          onPageChange={(page) => {
            router.push(newsPath + "?page=" + page).then();
          }}
          currentPage={newsPageState?.pageNumber}
          totalPageCount={newsPageState?.totalPages}
          pageSize={newsPageState?.pageSize}
        />
      )}
    </Container>
  );
};

export { NewsContainer };

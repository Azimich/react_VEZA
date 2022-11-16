import { Container } from "components/common/container";
import { INewsData } from "./News";
import { FC, useEffect } from "react";
import { Pagination } from "components/pagination/Pagination";
import { useGetListNews } from "service/getListNews";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { BreadCrumbs } from "components/breadcrumbs";

const NewsContainer: FC<{ props: INewsData }> = () => {
  const listNewsFunc = useGetListNews();
  useEffect(() => {
    const { listNewsData, loading, error } = listNewsFunc;
    listNewsData().then((e) => {
      console.log("FRONT API", e, loading, error);
    });
  }, []);

  return (
    <>
      <Container className={"wrapper_clear"}>
        <BreadCrumbs data={dataBreadNews} />

        {/* {newsWithDesc.map((e) => {
          return <NewsWithItem {...e} key={e.newsItem} />;
        })}
        <ul className={Styles.new_with_out_container}>
          {newsWithOutDesc.map((e) => {
            return <NewsWithOutItem {...e} key={e.id} />;
          })}
        </ul>*/}
        <Pagination currentPage={1} totalPageCount={5} pageSize={3} />
      </Container>
    </>
  );
};

export { NewsContainer };

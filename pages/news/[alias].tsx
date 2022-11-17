import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { NewsData } from "features/news/mockData";
import { NewsPage } from "features/news";
import { GetStaticPaths } from "next";
import { INewsData } from "features/news/News";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { newsList } from "service/list/servers/newsList";
import { newsPath } from "utils/bootstrap";

export const getStaticPaths: GetStaticPaths = async () => {
  const pathNews = await newsList();
  return {
    paths: pathNews.Response.map((e: { Alias: string }) => ({
      params: { alias: newsPath + e.Alias },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    const { params } = context;

    const mockData = NewsData.filter((item) => {
      return item.alias === params.alias && item;
    });

    return {
      props: {
        newsData: mockData,
      },
      revalidate: 10,
    };
  }
);

const newsSSR = (props: INewsData) => <NewsPage {...props} />;

export default newsSSR;

import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { NewsPage } from "features/news";
import { GetStaticPaths } from "next";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { newsList } from "service/list/servers/newsList";
import { newsItem } from "service/item/server/newsItem";
import { ISSRNews } from "features/news/News";

export const getStaticPaths: GetStaticPaths = async () => {
  const pathNews = await newsList();
  return {
    paths:
      pathNews.Response?.length > 0
        ? pathNews.Response?.map((e: { Alias: string }) => ({
            params: { alias: e.Alias },
          }))
        : [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    const { params } = context;
    return {
      props: {
        newsData: await newsItem(params.alias as string),
      },
      revalidate: 10,
    };
  },
);

const newsSSR = (props: ISSRNews) => <NewsPage {...props} />;

export default newsSSR;

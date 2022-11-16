import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { NewsData } from "features/news/mockData";
import { NewsPage } from "features/news";
import { GetStaticPaths } from "next";
import { INewsData } from "features/news/News";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
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

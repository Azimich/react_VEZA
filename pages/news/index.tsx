import { GetStaticProps } from "next";
import { wrapper } from "store/store";

import { News } from "features/news";
import { NewsData } from "features/news/mockData";
import { INewDataItem, INewsData } from "features/news/News";
import { newsList } from "service/list/servers/newsList";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

interface INewsPropsServer {
  props: {
    newsItem: INewsData[];
    newsData: INewDataItem[];
  };
}

export type { INewsPropsServer };

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    const newsData = NewsData.slice(0, 7);
    return {
      props: {
        newsItem: await newsList(),
        newsData: newsData,
      },
      revalidate: 10,
    };
  }
);

const newsSSR = (props: INewsData) => {
  return <News props={props} />;
};

export default newsSSR;

import { GetStaticProps } from "next";
import { wrapper } from "store/store";

import { News } from "features/news";
import { ISSRHomeNews } from "features/news/News";
import { newsList } from "service/list/servers/newsList";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    return {
      props: {
        newsData: await newsList(1, 4),
      },
      revalidate: 10,
    };
  },
);

const newsSSR = (props: ISSRHomeNews) => {
  return <News {...props} />;
};

export default newsSSR;

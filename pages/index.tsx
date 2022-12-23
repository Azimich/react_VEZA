import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { HomeContainer } from "features/home/HomeContainer";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { ISSRHomeNews } from "features/news/News";
import { newsList } from "service/list/servers/newsList";
import { IndexBanner } from "service/list/servers/indexBanner";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {
        newsData: await newsList(1, 4),
        indexBanner: await IndexBanner(),
      },
      revalidate: 10,
    };
  },
);

const Home = (props: ISSRHomeNews) => <HomeContainer {...props} />;

export default Home;

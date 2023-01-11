import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { HomeContainer } from "features/home/HomeContainer";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { ISSRHome } from "features/news/News";
import { newsList } from "service/list/servers/newsList";
import { IndexBanner } from "service/list/servers/indexBanner";
import { indexCategories } from "service/list/servers/indexCategories";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {
        newsData: await newsList(1, 4),
        indexBanner: await IndexBanner(),
        indexCategories: await indexCategories(),
      },
      revalidate: 10,
    };
  },
);

const Home = (props: ISSRHome) => <HomeContainer {...props} />;

export default Home;

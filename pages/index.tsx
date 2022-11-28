import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { HomeContainer } from "features/home/HomeContainer";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { newsListHome } from "service/list/servers/newsList";
import { IHomeData } from "features/news/News";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {
        home: {
          newsItem: await newsListHome(),
        },
      },
      revalidate: 10,
    };
  },
);

const Home = (props: IHomeData) => <HomeContainer {...props} />;

export default Home;

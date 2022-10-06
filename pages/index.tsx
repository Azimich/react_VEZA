import { GetStaticProps } from "next";
import { wrapper } from "../store/store";
import { HomeContainer } from "../features/home/HomeContainer";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {
      },
      revalidate: 10
    };
  }
);

const Home = (props: any) => <HomeContainer {...props} />;

export default Home;

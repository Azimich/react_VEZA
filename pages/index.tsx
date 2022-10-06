import { GetStaticProps } from "next";
import { wrapper } from "../store/store";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {
      },
      revalidate: 10
    };
  }
);

const HomeContainer = () => {
  return (<div>111</div>);
};

const Home = () => <HomeContainer />;

export default Home;

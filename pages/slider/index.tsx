import { SliderTest } from "features/slider";
import { GetStaticProps } from "next";
import { wrapper } from "../../store/store";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const HomeSSR = () => <SliderTest />;

export default HomeSSR;

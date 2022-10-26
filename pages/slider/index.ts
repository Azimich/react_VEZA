import { GetStaticProps } from "next";
import { wrapper } from "../../store/store";
import { SliderTestContainer } from "features/slider/SliderTestContainer";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

// const HomeSSR = (props: any) => <SliderTestContainer/>;

// export default HomeSSR;

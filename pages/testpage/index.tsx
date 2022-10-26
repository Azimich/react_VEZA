import { SliderTest } from "features/testpage";
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

const testpageSSR = () => <SliderTest />;

export default testpageSSR;

import { GetStaticProps } from "next";
import { wrapper } from "../../store/store";

import { NewsContainer } from "features/news";
import { GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {
        data: "",
      },
      revalidate: 10,
    };
  }
);

const newsSSR = (props: any) => <NewsContainer {...props} />;

export default newsSSR;

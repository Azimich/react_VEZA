import { SingContainer } from "features/auth";
import { GetStaticProps } from "next";
import { wrapper } from "store/store";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const SingContainerPage = (props: any) => <SingContainer {...props} />;

export default SingContainerPage;

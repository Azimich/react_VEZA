import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { Success } from "features/auth";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const SuccessPage = (props: any) => <Success {...props} />;

export default SuccessPage;

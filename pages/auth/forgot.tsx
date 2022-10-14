import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { Forgot } from "features/auth";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const ForgotPage = (props: any) => <Forgot {...props} />;

export default ForgotPage;

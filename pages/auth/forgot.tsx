import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { SingForgotContainer } from "features/auth/SingForgotContain";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const ForgotPage = (props: any) => <SingForgotContainer {...props} />;

export default ForgotPage;

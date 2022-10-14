import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { Error } from "features/auth";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const ErrorPage = (props: any) => <Error {...props} />;

export default ErrorPage;

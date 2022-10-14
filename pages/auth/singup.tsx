import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { SingUp } from "../../features/auth/index";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const SingUpPage = (props: any) => <SingUp {...props} />;

export default SingUpPage;

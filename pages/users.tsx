import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { Users } from "features/users/users";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const Decision = () => <Users />;

export default Decision;

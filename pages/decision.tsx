import { GetStaticProps } from "next";
import { wrapper } from "../store/store";
import { DecisionContainer } from "../features/decision";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const Decision = (props: any) => <DecisionContainer {...props} />;

export default Decision;

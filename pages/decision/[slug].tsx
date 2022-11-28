import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { decisionData } from "features/decision/MockData";
import { IDecisionData } from "features/decision/Decision";
import { DecisionPage } from "features/decision/DecisionPage";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticPaths: GetStaticPaths = async () => {
  const slug = [];
  for (const k in decisionData) {
    slug.push({ params: { slug: decisionData[k].url } });
  }
  return {
    paths: slug,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));

    const { params } = context;
    return {
      props: {
        data: decisionData.filter((e) => e.url === "/decision/" + params.slug),
      },
      revalidate: 10,
    };
  },
);

const DecisionPageServer = (props: { data: IDecisionData[] }) => (
  <DecisionPage {...props} />
);

export default DecisionPageServer;

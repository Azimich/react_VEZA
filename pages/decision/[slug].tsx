import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { DecisionPage } from "features/decision/DecisionPage";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { decisionItem } from "service/item/server/decisionItem";
import { IDecisionResponseObject } from "features/decision/Decision";

export const getStaticPaths: GetStaticPaths = async () => {
  /*    const slug = [];
        for (const k in decisionData) {
            slug.push({params: {slug: decisionData[k].url}});
        }*/
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));

    const { params } = context;
    return {
      props: {
        data: await decisionItem(params.slug as string),
      },
      revalidate: 10,
    };
  },
);

const DecisionPageServer = (props: { data: IDecisionResponseObject }) => (
  <DecisionPage {...props} />
);

export default DecisionPageServer;

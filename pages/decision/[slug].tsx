import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { DecisionPage } from "features/decision/DecisionPage";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { decisionItem } from "service/item/server/decisionItem";
import { IDecisionObjectResponse } from "features/decision/Decision";
import { decisionList } from "service/list/servers/decisionList";
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await decisionList().then((data) => data.response);
  const res = data.map((d: { alias: string }) => {
    return { params: { slug: d.alias } };
  });

  return {
    paths: res,
    fallback: "blocking",
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

const DecisionPageServer = (props: { data: IDecisionObjectResponse }) => (
  <DecisionPage {...props} />
);

export default DecisionPageServer;

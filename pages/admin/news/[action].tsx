import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { decisionItem } from "service/item/server/decisionItem";
/*
import { decisionList } from "service/list/servers/decisionList";
*/
import { AddNews } from "features/news/action/Add";

export const getStaticPaths: GetStaticPaths = async () => {
  /*  const data = await decisionList().then((data) => data.response);
  const res = data.map((d: { alias: string }) => {
    return { params: { slug: d.alias } };
  });*/

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    const { params } = context;
    const result = await decisionItem(params.slug as string);

    if (result.decision?.customErrorCode === 404) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: result,
      },
      revalidate: 10,
    };
  },
);

const ActionPage = () => {
  return <AddNews />;
};

export default ActionPage;

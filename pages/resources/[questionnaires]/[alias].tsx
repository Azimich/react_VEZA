import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service";
import { Questionnaires } from "features/resources/tab_questionnaires";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    const { params } = context;

    return {
      props: { alias: params.alias },
      revalidate: 10,
    };
  },
);

const QuestionnairesSSR = () => <Questionnaires />;

export default QuestionnairesSSR;

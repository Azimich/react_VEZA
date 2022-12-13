import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service";
import { Questionnaires } from "features/resources/tab_questionnaires";
import { questionnairesData } from "features/resources/mockData";
import { IQuestionnaires } from "features/resources/tab_bim/Bim";

export interface IQuestionSSR {
  item: IQuestionnaires[];
}

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
      props: {
        item: questionnairesData.filter(
          (items) => items.alias === params.alias,
        )[0],
      },
      revalidate: 10,
    };
  },
);

const QuestionnairesSSR = (props: IQuestionSSR) => (
  <Questionnaires {...props} />
);

export default QuestionnairesSSR;

import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service";
import { IQuestionnaires } from "features/resources/tab_bim/Bim";
import { QuestionnairesPage } from "features/resources/tab_questionnaires/QuestionnairesPage";
import React from "react";

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
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const QuestionnairesSSR = () => <QuestionnairesPage />;

export default QuestionnairesSSR;

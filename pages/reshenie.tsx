import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { DecisionContainer } from "features/decision";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { decisionList } from "service/list/servers/decisionList";
import { IDecisionResponseArray } from "features/decision/Decision";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {
        decision: await decisionList(),
      },
      revalidate: 10,
    };
  },
);

const Reshenie = (props: { decision: IDecisionResponseArray }) => (
  <DecisionContainer {...props} />
);

export default Reshenie;

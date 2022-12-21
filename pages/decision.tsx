import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { DecisionContainer } from "features/decision";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { salesList } from "service/list/servers/salesList";
import { IDecisionResponseArray } from "features/decision/Decision";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    console.log("await salesList()", await salesList());
    return {
      props: {
        decision: await salesList(),
      },
      revalidate: 10,
    };
  },
);

const Decision = (props: { decision: IDecisionResponseArray }) => (
  <DecisionContainer {...props} />
);

export default Decision;

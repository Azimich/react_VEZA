import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { EquipmentPageContainer } from "features/equipment/equipmentPage/EquipmentPageContainer";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: { ...(await menuListServer()) } }));
    console.log("context", context);
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const productServer = () => {
  return <EquipmentPageContainer />;
};
export default productServer;

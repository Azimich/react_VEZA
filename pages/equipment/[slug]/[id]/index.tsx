import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { CatalogData } from "features/equipment/mockData";
import { equipmentPath } from "utils";
import { ICatalogData } from "features/equipment/Equipment";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { EquipmentPage } from "features/equipment/equipmentPage";

export const getStaticPaths: GetStaticPaths = async () => {
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
      props: CatalogData.filter(
        (e) => e.alias === equipmentPath + params.slug + "/" + params.id
      ),
      revalidate: 10,
    };
  }
);

const equipment = (props: ICatalogData[]) => {
  return <EquipmentPage data={props} />;
};

export default equipment;

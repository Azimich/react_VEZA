import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { EquipmentContainer } from "features/equipment";
/*import { CatalogData } from "features/equipment/mockData";*/
import { ICategoriesResponseArray } from "features/equipment/Equipment";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { menuCategory } from "service/list/servers/menuCategory";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: { data: await menuCategory() },
      revalidate: 10,
    };
  },
);

const equipmentServer = (props: { data: ICategoriesResponseArray }) => (
  <EquipmentContainer categories={props.data} />
);

export default equipmentServer;

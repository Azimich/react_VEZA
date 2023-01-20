import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { EquipmentContainer } from "features/equipment";
import {
  ICategoriesItem,
  ICategoriesResponseArray,
} from "features/equipment/Equipment";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { menuCategory } from "service/list/servers/menuCategory";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    const result: ICategoriesResponseArray = await menuCategory();
    return {
      props: { data: result.response, categories: result },
      revalidate: 10,
    };
  },
);

const equipmentServer = (props: {
  data: ICategoriesItem[];
  categories: ICategoriesResponseArray;
}) => <EquipmentContainer data={props.data} categories={props.categories} />;

export default equipmentServer;

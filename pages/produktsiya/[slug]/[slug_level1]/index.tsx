import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { EquipmentContainer } from "features/equipment";
import { GetStaticPaths } from "next";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { menuCategory } from "service/list/servers/menuCategory";
import {
  ICategoriesItem,
  ICategoriesResponseArray,
} from "features/equipment/Equipment";
import { getData } from "utils/helpers";

export const getStaticPaths: GetStaticPaths = async () => {
  /*    const slug = CatalogData.map((e) => {
          return {params: {slug: e.alias}};
      });*/
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const { params } = context;
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    const result: ICategoriesResponseArray = await menuCategory();

    return {
      props: {
        data: getData(result.response, params.slug_level1 as string)[0]
          .subCategories,
        products: getData(result.response, params.slug_level1 as string)[0]
          .equipment,
        categories: result,
        alias: params.slug_level1,
      },
      revalidate: 10,
    };
  },
);

const equipment = (props: {
  data: ICategoriesItem[];
  categories: ICategoriesResponseArray;
  alias: string;
  products?: [];
}) => (
  <EquipmentContainer
    data={props.data}
    categories={props.categories}
    alias={props.alias}
    products={props.products}
  />
);

export default equipment;

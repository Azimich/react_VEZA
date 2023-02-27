import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { GetStaticPaths } from "next";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";
import { EquipmentPageContainer } from "features/equipment/equipmentPage/EquipmentPageContainer";
import {
  ICategoriesItem,
  ICategoriesResponseArray,
} from "features/equipment/Equipment";
import { menuCategory } from "service/list/servers/menuCategory";
import { getData } from "utils/helpers";
import { productItem } from "service/item/server/productItem";
import { IEquipmentResponse } from "features/equipment/equipmentPage/Equipment";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const { params } = context;
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    const result: ICategoriesResponseArray = await menuCategory();
    const product_data = await productItem(params.product as string);
    return {
      props: {
        data: getData(result.response, params.slug_level2 as string)[0]
          .subCategories,
        categories: result,
        alias: params.slug_level2,
        alias_active: params.product,
        product: product_data,
      },
      revalidate: 10,
    };
  },
);

const productServer = (props: {
  data: ICategoriesItem[];
  categories: ICategoriesResponseArray;
  alias: string;
  alias_active?: string;
  product: IEquipmentResponse;
}) => {
  return (
    <EquipmentPageContainer
      data={props.data}
      categories={props.categories}
      alias={props.alias}
      product={props.product}
    />
  );
};
export default productServer;

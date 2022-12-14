import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { CatalogData, CatalogEquipmentData } from "features/equipment/mockData";
import { EquipmentContainer } from "features/equipment";
import { GetStaticPaths } from "next";
import { getData } from "utils/helpers";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticPaths: GetStaticPaths = async () => {
  const slug = CatalogData.map((e) => {
    return { params: { slug: e.alias } };
  });
  return {
    paths: slug,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));

    const { params } = context;
    return {
      props: {
        data: CatalogData.filter(
          (e) =>
            e.cat_id ===
            getData(CatalogEquipmentData, "/equipment/" + params.slug).shift()
              ?.id,
        ),
      },
      revalidate: 10,
    };
  },
);

const equipment = (props: any) => <EquipmentContainer {...props} />;

export default equipment;

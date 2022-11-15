import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "store/store";
import React from "react";
import { FactoryContainer } from "features/factory/FactoryContainer";
import { FactoryData } from "features/factory/mockData";
import { IFactoryData } from "features/factory/Factory";
import { fetchDataFactory } from "features/factory/FactorySlice";
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchDataFactory({ factoryState: FactoryData }));
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const FactorySSR = () => <FactoryContainer />;

export default FactorySSR;

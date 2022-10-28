import { GetStaticPaths, GetStaticProps } from "next";
import { wrapper } from "../../store/store";
import React from "react";
import { FactoryContainer } from "../../features/factory/FactoryContainer";
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const FactorySSR = () => <FactoryContainer />;

export default FactorySSR;

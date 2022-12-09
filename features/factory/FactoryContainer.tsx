import React, { FC, useEffect, useState } from "react";
import { Container } from "components/common/container";
import { FactorySliderContainer } from "./factorySlider";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadAbout } from "components/breadcrumbs/mockData";

const FactoryContainer: FC = () => {
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadAbout);

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "История заводов" }]);
  }, [dataBreadAbout]);

  return (
    <Container className="wrapper">
      <BreadCrumbs data={breadCrumbs} />
      <FactorySliderContainer />
    </Container>
  );
};

export { FactoryContainer };

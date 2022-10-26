import React, { useState } from "react";
import { Tabs } from "components/tabs";
import { tabsAuthData } from "components/tabs/mockdata";
import { SliderItem } from "./SliderItem";
import { IComponents } from "components/tabs/Tabs";
import { Container } from "components/common/container";

const SliderTestContainer = () => {
  const [activeTab, setActiveTabs] = useState(1);
  const handleOnClick = (id: number) => {
    setActiveTabs(id);
  };

  const components: IComponents = {
    tab_2: SliderItem,
  };

  return (
    <Container className="wrapper">
      <Tabs
        props={tabsAuthData}
        onClick={(id) => handleOnClick(id)}
        activeTab={activeTab}
        size={"small300"}
      >
        {React.createElement(components[`tab_${activeTab}`])}
      </Tabs>
      <SliderItem />
    </Container>
  );
};

export { SliderTestContainer };

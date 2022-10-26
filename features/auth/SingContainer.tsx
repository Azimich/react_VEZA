import React, { useState } from "react";
import { Tabs } from "components/tabs";
import { tabsAuthData } from "components/tabs/mockdata";
import { SingInForm } from "./SingInForm";
import { SingUpForm } from "./SingUpForm";
import { IComponents, ITab } from "components/tabs/Tabs";
import { Container } from "components/common/container";

const SingContainer = () => {
  const [activeTab, setActiveTabs] = useState(1);
  const handleOnClick = (e: ITab) => {
    setActiveTabs(e.id);
  };

  const components: IComponents = {
    tab_1: SingInForm,
    tab_2: SingUpForm,
  };

  return (
    <Container className="wrapper">
      <Tabs
        props={tabsAuthData}
        onClick={(id: ITab) => handleOnClick(id)}
        activeTab={activeTab}
        size={"small300"}
      >
        {React.createElement(components[`tab_${activeTab}`])}
      </Tabs>
    </Container>
  );
};

export { SingContainer };

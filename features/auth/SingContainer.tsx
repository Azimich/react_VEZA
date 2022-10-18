import React, { useState } from "react";
import { Tabs } from "components/tabs";
import { tabsAuthData } from "components/tabs/mockdata";
import { SingInForm } from "./SingInForm";
import { SingUpForm } from "./SingUpForm";
import { IComponents } from "components/tabs/Tabs";

const SingContainer = () => {
  const [activeTab, setActiveTabs] = useState(1);
  const handleOnClick = (id: number) => {
    setActiveTabs(id);
  };

  const components: IComponents = {
    tab_1: SingInForm,
    tab_2: SingUpForm,
  };

  return (
    <Tabs
      props={tabsAuthData}
      onClick={(id) => handleOnClick(id)}
      activeTab={activeTab}
    >
      {React.createElement(components[`tab_${activeTab}`])}
    </Tabs>
  );
};

export { SingContainer };

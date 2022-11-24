import React, { useEffect, useState } from "react";
import { Tabs } from "components/tabs";
import { tabsAuthData } from "features/contacts/mockData";
import { SingInForm } from "./SingInForm";
import { SingUpForm } from "./SingUpForm";
import { IComponents, ITab } from "components/tabs/Tabs";
import { Container } from "components/common/container";
import Styles from "./SignContainer.module.scss";

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
      <div className={Styles.forms__container}>
        <Tabs
          props={tabsAuthData}
          onClick={(id: ITab) => handleOnClick(id)}
          activeTab={activeTab}
          size={"small300"}
        >
          {React.createElement(components[`tab_${activeTab}`])}
        </Tabs>
      </div>
    </Container>
  );
};

export { SingContainer };

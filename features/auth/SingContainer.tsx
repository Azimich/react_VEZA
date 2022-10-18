import React from "react";
import { Tabs } from "components/tabs";
import { tabsAuthData } from "components/tabs/mockdata";

const SingContainer = () => {
  return (
    <>
      <Tabs props={tabsAuthData} />
    </>
  );
};

export { SingContainer };

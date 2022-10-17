import React from "react";
import { Tabs } from "components/tabs";
import { tabsAuthData } from "components/tabs/mockdata";
import { SingInForm } from "./SingInForm";

const SingContainer = () => {
  console.log(tabsAuthData);

  return (
    <>
      <Tabs {...tabsAuthData} />
      <SingInForm />
    </>
  );
};

export { SingContainer };

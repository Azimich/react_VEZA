import React from "react";
import { Tabs } from "components/tabs";
import { tabsAuthData } from "components/tabs/mockdata";
import { SingInForm } from "./SingInForm";
import { SingUpForm } from "./SingUpForm";

const SingContainer = () => {
  console.log(tabsAuthData);

  return (
    <>
      <Tabs {...tabsAuthData} />
      <SingInForm />
      <SingUpForm />
    </>
  );
};

export { SingContainer };

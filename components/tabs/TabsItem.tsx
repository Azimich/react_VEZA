import React from "react";
import { FC } from "react";
import { ITabs } from "../tabs/Tabs.d";

const TabsItem: FC<ITabs> = ({ id, title }) => {
  console.log(title);

  return <div data-index={id}>{title}</div>;
};

export { TabsItem };

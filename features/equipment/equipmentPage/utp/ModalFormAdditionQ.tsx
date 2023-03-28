import React from "react";
import { FC } from "react";
import { Tree } from "components/tree_select_product";

interface IData {
  alias: string;
  toggle?: () => void;
}

export interface IAddition {
  id: number;
  alias: string;
  title: string;
  checked?: boolean;
  selected?: boolean;
  product?: boolean;
  items?: IAddition[];
}

const ModalFormAdditionQ: FC<IData> = ({ toggle, alias }) => {
  return <Tree alias={alias} toggle={toggle} />;
};
export { ModalFormAdditionQ };

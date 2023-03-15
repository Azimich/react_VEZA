import React, { FC } from "react";
import Styles from "./Tree.module.scss";
import { IAddition } from "features/equipment/equipmentPage/utp/ModalFormAdditionQ";

interface ITreeMenuProps {
  data: IAddition[];
  listOpenNodes?: number[];
  listChecked?: IAddition[];
  actionClick?: (e: IAddition) => void;
  children?: boolean;
  lvl?: number;
}

const NodeContainer: FC<ITreeMenuProps> = ({
  data,
  listOpenNodes = [],
  listChecked,
  actionClick = () => {},
  children = false,
  lvl = 0,
}) => {
  console.log("listChecked", listChecked);
  return (
    <ul
      className={`${children ? Styles.level_children : ""} ${
        Styles.block_container
      } `}
    >
      {data.length > 0 &&
        data.map((e, i) => {
          return (
            <li
              key={i}
              className={`${e.product ? Styles.product : ""} ${
                listChecked.includes(e) ? Styles.active : ""
              }`}
            >
              <div className={Styles.block_li_data}>
                {listOpenNodes.includes(e.id) ? (
                  <span onClick={() => actionClick(e)}>
                    {!e.product ? "-" : ""} {e.title}
                  </span>
                ) : (
                  <span onClick={() => actionClick(e)}>
                    {!e.product ? "+" : ""} {e.title}
                  </span>
                )}
              </div>
              {e.items && e.items.length > 0 && listOpenNodes.includes(e.id) ? (
                <NodeContainer
                  data={e.items}
                  listOpenNodes={listOpenNodes}
                  listChecked={listChecked}
                  actionClick={(e) => actionClick(e)}
                  children={true}
                  lvl={lvl + 1}
                />
              ) : null}
            </li>
          );
        })}
    </ul>
  );
};

export { NodeContainer };

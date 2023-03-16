import React, { FC } from "react";
import Styles from "./Tree.module.scss";
import { IAddition } from "features/equipment/equipmentPage/utp/ModalFormAdditionQ";

interface ITreeMenuProps {
  data: IAddition[];
  listOpenNodes?: number[];
  listChecked?: IAddition[];
  actionClick?: (e: React.MouseEvent<HTMLSpanElement>, d: IAddition) => void;
  actionDoubleClick?: () => void;
  children?: boolean;
  lvl?: number;
}

const NodeContainer: FC<ITreeMenuProps> = ({
  data,
  listOpenNodes = [],
  listChecked,
  actionClick = () => {},
  actionDoubleClick = () => {},
  children = false,
  lvl = 0,
}) => {
  return (
    <ul
      className={`${children ? Styles.level_children : ""} ${
        Styles.block_container
      } `}
    >
      {data?.length > 0 &&
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
                  <span
                    onClick={(event) => actionClick(event, e)}
                    onDoubleClick={() => actionDoubleClick()}
                  >
                    {!e.product ? "-" : ""} {e.title}
                  </span>
                ) : (
                  <span
                    onClick={(event) => actionClick(event, e)}
                    onDoubleClick={() => actionDoubleClick()}
                  >
                    {!e.product ? "+" : ""} {e.title}
                  </span>
                )}
              </div>
              {e.items && e.items.length > 0 && listOpenNodes.includes(e.id) ? (
                <NodeContainer
                  data={e.items}
                  listOpenNodes={listOpenNodes}
                  listChecked={listChecked}
                  actionClick={(e, d) => actionClick(e, d)}
                  actionDoubleClick={() => actionDoubleClick()}
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

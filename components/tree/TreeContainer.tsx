import React, { FC } from "react";
import Styles from "./Tree.module.scss";
import { ICategory } from "features/equipment/equipmentPage/utp/ModalFormCategory";

interface ITreeMenuProps {
  data: ICategory[];
  field?: string;
  items?: string;
  listOpenNodes?: number[];
  listChecked?: ICategory;
  actionClick?: (
    e: React.MouseEvent<HTMLSpanElement>,
    d: { [p: string]: any },
  ) => void;
  children?: boolean;
  lvl?: number;
}

const TreeContainer: FC<ITreeMenuProps> = ({
  data,
  field = "product",
  items = "items",
  listOpenNodes = [],
  listChecked = {},
  actionClick = () => {},
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
        data.map((e: { [index: string]: any }, i: React.Key) => {
          return (
            <li
              key={i}
              className={`${listChecked.id == e.id ? Styles.active : ""}`}
            >
              <div className={Styles.block_li_data}>
                {listOpenNodes.includes(e["id"]) ? (
                  <span onClick={(event) => actionClick(event, e)}>
                    {!e[field] ? "-" : ""} {e["title"]}
                  </span>
                ) : (
                  <span
                    onClick={(event) => actionClick(event, e)}
                    className={`${
                      e[items]?.length > 0 ? "" : Styles.hover_row
                    } `}
                  >
                    {!e[field] ? (e[items]?.length > 0 ? "+" : "") : ""}{" "}
                    {e["title"]}
                  </span>
                )}
              </div>
              {e[items] &&
              e[items].length > 0 &&
              listOpenNodes.includes(e["id"]) ? (
                <TreeContainer
                  data={e[items]}
                  listOpenNodes={listOpenNodes}
                  listChecked={listChecked as ICategory}
                  actionClick={(e, d) => actionClick(e, d)}
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

export { TreeContainer };

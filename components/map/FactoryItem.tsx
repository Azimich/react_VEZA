import Styles from "./Map.module.scss";
import { FactoryIcon } from "../icons";
import React, { FC, useEffect, useState } from "react";
import { IObject } from "./Map";

const FactoryItem: FC<IObject> = (props) => {
  const { alias, onClick, connection, factory } = props;
  const [relative_coord, setRelative_coord] = useState<{
    relative_top: number;
    relative_left: number;
  }>({
    relative_top: 0,
    relative_left: 0,
  });

  useEffect(() => {
    const Parent_Coord = document
      .getElementById("parent_map")
      .getBoundingClientRect();
    const Child_Coord = document
      .getElementById(connection)
      .getBoundingClientRect();
    setRelative_coord({
      relative_top: Child_Coord.top - Parent_Coord.top,
      relative_left: Child_Coord.left - Parent_Coord.left,
    });
  }, []);
  return (
    <>
      {factory.map((e) => {
        return (
          <div
            className={Styles.marker}
            key={e.name}
            style={{
              top: relative_coord.relative_top + e.ypx,
              left: relative_coord.relative_left + e.xpx,
            }}
            onClick={() => onClick(e, alias)}
          >
            <FactoryIcon />
          </div>
        );
      })}
    </>
  );
};
export { FactoryItem };
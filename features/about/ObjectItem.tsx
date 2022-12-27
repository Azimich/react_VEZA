import Styles from "components/map/Map.module.scss";
import React, { FC, useEffect, useState } from "react";
import { IObject } from "components/map/Map";

const ObjectItem: FC<IObject> = (props) => {
  const { onClick, connect, object, icon } = props;
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
      .getElementById(connect)
      .getBoundingClientRect();
    setRelative_coord({
      relative_top: Child_Coord.top - Parent_Coord.top,
      relative_left: Child_Coord.left - Parent_Coord.left,
    });
  }, []);

  return (
    <div
      className={Styles.marker}
      key={object?.name}
      style={{
        top: relative_coord.relative_top + (object?.ypx || 0),
        left: relative_coord.relative_left + (object?.xpx || 0),
      }}
      onClick={() => onClick(props)}
    >
      {icon}
    </div>
  );
};

export { ObjectItem };

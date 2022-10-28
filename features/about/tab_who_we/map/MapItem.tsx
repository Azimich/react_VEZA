import React, { FC } from "react";
import { IMapData } from "./Map";
import Styles from "./Map.module.scss";

const MapItem: FC<IMapData> = (props) => {
  return (
    <a
      className={Styles[props.country]}
      data-region={props.alias}
      id={props.alias}
      dangerouslySetInnerHTML={{ __html: props.piece_svg }}
      title={props.alt}
      onClick={() => console.log(props)}
    ></a>
  );
};
export { MapItem };

import React, { FC } from "react";
import { IMapData } from "./Map";
import Styles from "./Map.module.scss";

const MapItem: FC<IMapData> = (props) => {
  const handleMouseOn = (e: any) => {};
  return (
    <a
      className={`${Styles[props.country]} ${Styles[props.className]}`}
      data-region={props.alias}
      id={props.alias}
      onMouseEnter={(e) => handleMouseOn(props.className)}
      dangerouslySetInnerHTML={{ __html: props.piece_svg }}
      title={props.alt}
      onClick={() => console.log(props)}
    ></a>
  );
};
export { MapItem };

import React, { FC } from "react";
import { IMapData } from "./Map";
import Styles from "./Map.module.scss";

const MapItem: FC<IMapData> = (props) => {
  return (
    <a
      className={`${Styles[props.country]} ${
        props.currentClass && props.currentClass === props.className
          ? Styles.active
          : ""
      }`}
      data-region={props.alias}
      data-class={props.className}
      id={props.alias}
      onMouseLeave={(e) => props.onMouseLeave(e)}
      onMouseEnter={(e) => props.onMouseEnter(e)}
      dangerouslySetInnerHTML={{ __html: props.piece_svg }}
      title={props.alt}
      onClick={() => console.log(props)}
    ></a>
  );
};
export { MapItem };

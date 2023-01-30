import React, { FC } from "react";
import { IMapData } from "./Map";
import Styles from "./Map.module.scss";
import Link from "next/link";

const MapItem: FC<IMapData> = (props) => {
  return (
    <Link href={"/contacts/sale_office?alias=" + props.alias}>
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
      ></a>
    </Link>
  );
};
export { MapItem };

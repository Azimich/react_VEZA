import { WhoWeMapData } from "features/about/tab_who_we/map/mockData";
import React, { useEffect, useRef } from "react";
import { FC } from "react";
import Styles from "./StylesIcon.module.scss";
import { Factory } from "../../../features/factory";
interface IWhoWeMap {
  onClick?: () => void;
}

const WhoWeMapIcon: FC<IWhoWeMap> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={Styles.company__map_svg}
      width="1100"
      height="540"
      viewBox="0 0 1100 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {WhoWeMapData.map((e, i) => {
        return (
          <a
            key={i}
            data-region={e.alias}
            id={e.alias}
            dangerouslySetInnerHTML={{ __html: e.piece_svg }}
            title={e.alt}
            onClick={() => console.log("jhjj")}
          ></a>
        );
      })}
    </svg>
  );
};

export { WhoWeMapIcon };

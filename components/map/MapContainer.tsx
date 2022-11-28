import Styles from "./Map.module.scss";
import { MapData } from "./mockData";
import React, { FC, useState } from "react";
import { MapItem } from "./MapItem";
import { IMapProps } from "./Map";

const MapContainer: FC<IMapProps> = ({ sideBar, formOutPut }) => {
  const [currentClass, setCurrentClass] = useState<string>("");

  const handleMouseHover: React.MouseEventHandler<HTMLElement> = (e) => {
    setCurrentClass(e.currentTarget.dataset.class);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = () => {
    setCurrentClass("none");
  };
  return (
    <div>
      <div className={Styles.map_container}>
        {sideBar}
        <svg
          className={Styles.company__map_svg}
          width="100%"
          height="100%"
          id={"parent_map"}
          viewBox="0 0 1225 719"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {MapData.map((e) => {
            return (
              <MapItem
                {...e}
                key={"map" + e.id}
                currentClass={currentClass}
                onMouseEnter={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                ) => handleMouseHover(e)}
                onMouseLeave={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                ) => handleMouseLeave(e)}
              />
            );
          })}
        </svg>
        {formOutPut}
      </div>
    </div>
  );
};
export { MapContainer };

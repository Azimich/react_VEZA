import Styles from "./Map.module.scss";
import React, { FC, useState } from "react";
import { MapItem } from "./MapItem";
import { IMapProps } from "./Map";
import { MapDataNew } from "components/map/mockData_new";

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
          width="1300"
          height="868"
          viewBox="0 0 1300 868"
          id={"parent_map"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={Styles.company__map_svg}
        >
          {MapDataNew.map((e) => {
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

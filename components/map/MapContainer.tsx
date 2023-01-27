import Styles from "./Map.module.scss";
import React, { FC, useEffect, useState } from "react";
import { MapItem } from "./MapItem";
import { IMapProps, IMapState } from "./Map";
import { useAppSelector } from "store/hooks";
import { getMap } from "components/map/MapSlice";
/*import {useGetMap} from "service/list/getMap";*/

const MapContainer: FC<IMapProps> = ({ sideBar, formOutPut }) => {
  const [currentClass, setCurrentClass] = useState<string>("");
  const responseData = useAppSelector(getMap);
  const [mapData, setMapData] = useState<IMapState>();
  useEffect(() => {
    responseData.response.length > 0 && setMapData(responseData);
  }, [responseData]);

  const handleMouseHover: React.MouseEventHandler<HTMLElement> = (e) => {
    setCurrentClass(e.currentTarget.dataset.class);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = () => {
    setCurrentClass("none");
  };

  return (
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
        {mapData &&
          !mapData.hasError &&
          mapData.response.map((e, i) => {
            return (
              <MapItem
                {...e}
                key={"map_" + i}
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
      {mapData && !mapData.hasError && formOutPut}
    </div>
  );
};
export { MapContainer };

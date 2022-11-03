import React from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import Styles from "../SalesOffice.module.scss";

const YandexMap = () => {
  const [mapData, _setMapData] = React.useState({
    center: [55.750104, 37.787309],
    zoom: 12,
  });

  const [coordinates, _setCoordinates] = React.useState<[number, number][]>([
    [55.750104, 37.787309],
  ]);

  return (
    <YMaps>
      <div className={Styles.yandex__map}>
        <Map width={"100%"} height={"100%"} defaultState={mapData}>
          {coordinates.map((coordinate, index) => (
            <Placemark key={`${index}-${coordinate}`} geometry={coordinate} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};

export { YandexMap };
import React, { useState } from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import Styles from "../SalesOffice.module.scss";

const YandexMap = () => {
  const [mapData] = useState({
    center: [55.750104, 37.787309],
    zoom: 10,
    controls: ["zoomControl"],
    behaviors: [
      "drag",
      "dblClickZoom",
      "rightMouseButtonMagnifier",
      "multiTouch",
    ],
  });

  const [coordinates] = React.useState<[number, number][]>([
    [55.750104, 37.787309],
  ]);

  return (
    <YMaps>
      <div className={Styles.yandex__map}>
        <Map
          width={"100%"}
          height={"100%"}
          defaultState={mapData}
          scrollZoom={false}
          modules={["control.ZoomControl"]}
        >
          {coordinates.map((coordinate, index) => (
            <Placemark key={`${index}-${coordinate}`} geometry={coordinate} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};

export { YandexMap };

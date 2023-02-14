import React, { FC, useEffect, useState } from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import Styles from "../SalesOffice.module.scss";
import { IOptionItem } from "components/select/Select";

const YandexMap: FC<IOptionItem> = ({ latitude, longitude }) => {
  const [mapData, setMapData] = useState({
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

  const [coordinates, setCoordinates] = React.useState<[number, number][]>([
    [55.750104, 37.787309],
  ]);

  useEffect(() => {
    setMapData({
      center: [Number(latitude), Number(longitude)],
      zoom: 12,
      controls: ["zoomControl"],
      behaviors: [
        "drag",
        "dblClickZoom",
        "rightMouseButtonMagnifier",
        "multiTouch",
      ],
    });
  }, [latitude]);

  useEffect(() => {
    setCoordinates([[Number(latitude), Number(longitude)]]);
  }, [latitude]);
  return (
    <YMaps>
      <div className={Styles.yandex__map}>
        <Map
          width={"100%"}
          height={"100%"}
          defaultState={mapData}
          scrollZoom={false}
          modules={["control.ZoomControl"]}
          state={mapData}
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

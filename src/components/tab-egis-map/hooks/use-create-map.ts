import React from "react";

import * as L from "leaflet";

import { INITIAL_MAP_PARAMS, MAP_LAYERS_NAME, WMS_URL } from "../constants";

interface IUseCreateMapProps {
  mapIndeficator: string;
}

export const useCreateMap = (
  props: IUseCreateMapProps
): { theMap: L.Map | null } => {
  const { mapIndeficator } = props;
  const [theMap, setTheMap] = React.useState<L.Map | null>(null);

  React.useEffect(() => {
    if (!theMap) {
      // NOTE: Создание объекта карты с указанным центром
      const myMap = L.map(mapIndeficator, {
        // crs: L.CRS.EPSG3857,
        crs: L.CRS.EPSG900913,
        // NOTE:
        //  Сорокин Александр: Так же прошу взять на заметку следующее
        // что бы кэшированные тайлы правильно отображались, без смещенного наложения.
        // При подключении/использовании подложки ЕГИС требуется в запросах тайлов подложки
        // передавать значение системы координат EPSG:900913.
        preferCanvas: true,
        renderer: L.canvas(),
        zoomControl: false,
      });

      setTheMap(myMap);

      // NOTE: Инициализация начальных координат и зума
      myMap.setView(INITIAL_MAP_PARAMS.center, INITIAL_MAP_PARAMS.zoom);

      // NOTE: Местоположение кнопок зума
      const zoomContainer = L.control.zoom({
        position: "topright",
        // NOTE:
        // в дополнении к этому ещё заданы css классы
        // .leaflet-top .leaflet-control-zoom  см. egis-custom-popup.css файл
      });
      zoomContainer.addTo(myMap);

      // NOTE:  Добавить легенду и слой с картой России
      const wmsParamsRussia = {
        tiled: true,
        transparent: true,
        layers: MAP_LAYERS_NAME,
        format: "image/png8",
        attribution: '<a href="/">МТС LocationPro</a>',
      };
      L.tileLayer.wms(WMS_URL, wmsParamsRussia).addTo(myMap);

      // NOTE:
      // Popup - клик по карте
      // const popup555 = L.popup();
      // function onMapClick(e: any) {
      //   popup555
      //     .setLatLng(e.latlng)
      //     .setContent(
      //       "<b>Вы кликнули по карте.</b><br> Координаты клика = " +
      //         e.latlng.toString()
      //     )
      //     .openOn(myMap);
      // }
      // myMap.on("click", onMapClick);

      // const wfsParams = {
      //   service: "WFS",
      //   version: "1.1.1",
      //   request: "GetFeature",
      //   typeName: "v_prolocation_stations",
      //   outputFormat: "json",
      //   maxFeatures: "500",
      // };
    }
  }, [mapIndeficator, theMap]);

  return { theMap };
};

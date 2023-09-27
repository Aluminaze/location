import React from "react";

import { IDictionaryDTO } from "interfaces";
import * as L from "leaflet";

import { INITIAL_MAP_PARAMS } from "../constants";
import { ILayerStationForFly } from "../interfaces";

interface IUseFlyToStationProps {
  theMap: L.Map | null;
  selectedStation: IDictionaryDTO | null;
  layerStationsForFly: ILayerStationForFly[];
}

export const useFlyToStation = (props: IUseFlyToStationProps) => {
  const { theMap, selectedStation, layerStationsForFly } = props;

  React.useEffect(() => {
    if (theMap) {
      if (selectedStation) {
        const selectedStationLayer: ILayerStationForFly | undefined =
          layerStationsForFly.find(
            (stationLayerData: ILayerStationForFly) =>
              stationLayerData.id === selectedStation.id
          );

        if (selectedStationLayer) {
          theMap.setView(
            selectedStationLayer.latlng,
            INITIAL_MAP_PARAMS.zoomStation
          );

          setTimeout(() => {
            selectedStationLayer.layer.openPopup();
          }, 300);
        }
      }
    }
  }, [theMap, selectedStation, layerStationsForFly]);
};

import React from "react";

import * as geojson from "geojson";
import { usePlannedBaseStations } from "hooks/use-planned-base-stations";
import { IPlannedBaseStationEchoDTO } from "interfaces";
import * as L from "leaflet";

import { CardPlannedStation } from "../components/card-planned-station";
import {
  CIRCLE_PARAM_PLANNED_STATION_RINEX,
  CIRCLE_PARAM_PLANNED_STATION_RTK,
  STATION_ICON_SIZE,
} from "../constants";
import plannedStationIconImage from "../icons/planned-station-icon.png";

const plannedStationIcon = L.icon({
  iconUrl: plannedStationIconImage,
  iconSize: [STATION_ICON_SIZE, STATION_ICON_SIZE],
  iconAnchor: [STATION_ICON_SIZE / 2 - 0.2, STATION_ICON_SIZE / 2 - 0.2],
});

export const useLayerPlannedStations = () => {
  const { data: stations, isLoading: isLoadingStations } =
    usePlannedBaseStations();
  const [layerWithStations, setLayerWithStations] = React.useState<any | null>(
    null
  );
  const [layerGroupRTK, setLayerGroupRTK] = React.useState<L.LayerGroup | null>(
    null
  );
  const [layerGroupRINEX, setLayerGroupRINEX] =
    React.useState<L.LayerGroup | null>(null);

  React.useEffect(() => {
    if (!isLoadingStations && stations?.length) {
      const stationsData: IPlannedBaseStationEchoDTO[] = stations ?? [];
      const _circleRTK: L.Circle[] = [];
      const _circleRINEX: L.Circle[] = [];

      const plannedStationsAsGeoJSON: geojson.FeatureCollection<
        any,
        IPlannedBaseStationEchoDTO
      > = {
        type: "FeatureCollection",
        features:
          stationsData?.map((station: IPlannedBaseStationEchoDTO) => ({
            type: "Feature",
            id: `v_prolocation_stations.fid-${station.id}-}`,
            geometry: {
              type: "Point",
              // NOTE: [Долгота,Широта]
              coordinates: [
                station.coordinateLongitude,
                station.coordinateLatitude,
              ],
            },
            geometry_name: "geometry",
            properties: station,
          })) ?? [],
      };

      const layerWithPlannedStations = new L.GeoJSON(plannedStationsAsGeoJSON, {
        onEachFeature: (
          feature: geojson.Feature<
            geojson.GeometryObject,
            IPlannedBaseStationEchoDTO
          >,
          layer: any
        ) => {
          const latlng: L.LatLng = layer._latlng;
          const popup = CardPlannedStation(feature.properties);

          // NOTE: Установить растровую иконку для базовых станций
          layer
            .bindPopup(popup, { minWidth: 324 })
            .on("click", function (event: any) {
              event.target.openPopup();
            })
            .setIcon(plannedStationIcon);

          _circleRTK.push(L.circle(latlng, CIRCLE_PARAM_PLANNED_STATION_RTK));
          _circleRINEX.push(
            L.circle(latlng, CIRCLE_PARAM_PLANNED_STATION_RINEX)
          );
        },
      });

      setLayerWithStations(layerWithPlannedStations);
      setLayerGroupRTK(L.layerGroup(_circleRTK));
      setLayerGroupRINEX(L.layerGroup(_circleRINEX));
    }
  }, [stations, isLoadingStations]);

  return {
    layerPlannedStations: layerWithStations,
    layerGroupRTKPlannedStations: layerGroupRTK,
    layerGroupRINEXPlannedStations: layerGroupRINEX,
    plannedStationData: stations,
  };
};

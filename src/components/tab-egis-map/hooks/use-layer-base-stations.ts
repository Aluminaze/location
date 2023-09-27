import React from "react";

import * as geojson from "geojson";
import { useAccessStatusDownloadRinex } from "hooks/use-access-status-download-rinex";
import { useBaseStations } from "hooks/use-base-stations";
import { useProfileData } from "hooks/use-profile-data";
import { IBaseStationEchoDTO, IDictionaryDTO } from "interfaces";
import * as L from "leaflet";

import { CardBaseStation } from "../components/card-base-station";
import {
  CIRCLE_PARAM_STATION_RINEX,
  CIRCLE_PARAM_STATION_RTK,
  STATION_ICON_SIZE,
} from "../constants";
import stationIconImage from "../icons/station-icon.png";
import { ILayerStationForFly } from "../interfaces";
import { getStationInfoName } from "../utils/get-station-info-name";

const stationIcon = L.icon({
  iconUrl: stationIconImage,
  iconSize: [STATION_ICON_SIZE, STATION_ICON_SIZE],
  iconAnchor: [STATION_ICON_SIZE / 2 - 0.2, STATION_ICON_SIZE / 2 - 0.2],
});

interface IUseLayerBaseStationsReturn {
  layerStations: any | null;
  layerGroupRTK: L.LayerGroup | null;
  layerGroupRINEX: L.LayerGroup | null;
  layerStationsForFly: ILayerStationForFly[];
  stationsAsDictionary: IDictionaryDTO[];
  stations: IBaseStationEchoDTO[];
  isCanUseBaseStations: boolean;
}

export const useLayerBaseStations = (): IUseLayerBaseStationsReturn => {
  const {
    isAuthorized,
    isCustomerAdminRole,
    isCustomerBaseRole,
    isLoadingAuthData,
  } = useProfileData();

  const isCanUseBaseStations: boolean =
    !isLoadingAuthData &&
    isAuthorized &&
    (isCustomerAdminRole || isCustomerBaseRole);

  const isShowRinexDownloadButton: boolean =
    isCustomerBaseRole || isCustomerAdminRole;

  const { data: baseStations, isLoading: isLoadingBaseStations } =
    useBaseStations({
      enabled: isCanUseBaseStations,
    });

  const {
    data: accessStatusDownloadRinex,
    isLoading: isLoadingAccessStatusDownloadRinex,
  } = useAccessStatusDownloadRinex();

  const [stationsAsDictionary, setStationAsDictionary] = React.useState<
    IDictionaryDTO[]
  >([]);

  const [stationsGeoJSON, setStationsGeoJSON] =
    React.useState<geojson.FeatureCollection<any, IBaseStationEchoDTO> | null>(
      null
    );

  const [layerStations, setLayerStations] = React.useState<any | null>(null);
  const [layerGroupRTK, setLayerGroupRTK] = React.useState<L.LayerGroup | null>(
    null
  );
  const [layerGroupRINEX, setLayerGroupRINEX] =
    React.useState<L.LayerGroup | null>(null);
  const [layerStationsForFly, setLayerStationsForFly] = React.useState<
    ILayerStationForFly[]
  >([]);

  // NOTE: Формирование данных BaseStations
  React.useEffect(() => {
    if (!isLoadingAuthData && isCanUseBaseStations && !isLoadingBaseStations) {
      const stationsData: IBaseStationEchoDTO[] = baseStations ?? [];

      setStationsGeoJSON({
        type: "FeatureCollection",
        features:
          stationsData?.map((station: IBaseStationEchoDTO) => ({
            type: "Feature",
            id: `v_prolocation_stations.fid-${station.id}-${station.name}`,
            geometry: {
              type: "Point",
              // NOTE: [Долгота,Широта]
              coordinates: [
                station?.coordinateLongitude,
                station?.coordinateLatitude,
              ],
            },
            geometry_name: "geometry",
            properties: station,
          })) ?? [],
      });

      if (stationsData?.length) {
        const _stationsAsDictionary = stationsData
          .map((stationData: IBaseStationEchoDTO) => {
            const stationInfo: string = getStationInfoName({
              area: stationData?.address?.area,
              city: stationData?.address?.city,
              mountPoint: stationData?.mountPoint,
            });
            const stationId: number = stationData?.id ?? 0;
            const stationName: string = stationData?.name ?? "";
            const stationAddress: string =
              stationData?.address?.formatted_address ?? "";

            return {
              id: stationId,
              name: stationInfo,
              code: stationName,
              description: stationAddress,
            };
          })
          .sort((stationA: IDictionaryDTO, stationB: IDictionaryDTO) => {
            if (stationA.name < stationB.name) {
              return -1;
            } else if (stationA.name > stationB.name) {
              return 1;
            } else {
              return 0;
            }
          });

        setStationAsDictionary(_stationsAsDictionary);
      }
    }
  }, [
    baseStations,
    isAuthorized,
    isCanUseBaseStations,
    isLoadingAuthData,
    isLoadingBaseStations,
  ]);

  // NOTE: Добавление станций на карту
  React.useEffect(() => {
    if (stationsGeoJSON && !isLoadingAccessStatusDownloadRinex) {
      const rtkCirles: L.Circle[] = [];
      const rinexCirles: L.Circle[] = [];
      const _stationsWithLayers: ILayerStationForFly[] = [];

      const _layerWithStations = new L.GeoJSON(stationsGeoJSON, {
        onEachFeature: (
          feature: geojson.Feature<geojson.GeometryObject, IBaseStationEchoDTO>,
          layer: any
        ) => {
          const latlng: L.LatLng = layer._latlng;

          const popup = CardBaseStation({
            properties: feature.properties,
            isShowDownloadButton: isShowRinexDownloadButton,
            isCanDownloadRinex: accessStatusDownloadRinex?.allowed ?? false,
          });

          layer
            .bindPopup(popup, { minWidth: 324 })
            .on("click", (event: any) => {
              event.target.openPopup();
            })
            .setIcon(stationIcon);

          // NOTE: Событие при закрывании карточки станции
          layer.getPopup().on("remove", () => {});

          // NOTE: RTK круги
          rtkCirles.push(L.circle(latlng, CIRCLE_PARAM_STATION_RTK));

          // NOTE: RINEX круги
          rinexCirles.push(L.circle(latlng, CIRCLE_PARAM_STATION_RINEX));
          _stationsWithLayers.push({
            id: feature.properties.id,
            latlng: latlng,
            layer: layer,
          });
        },
      });

      setLayerStations(_layerWithStations);
      setLayerGroupRTK(L.layerGroup(rtkCirles));
      setLayerGroupRINEX(L.layerGroup(rinexCirles));

      setLayerStationsForFly(_stationsWithLayers);
    }
  }, [
    stationsGeoJSON,
    isShowRinexDownloadButton,
    isAuthorized,
    accessStatusDownloadRinex?.allowed,
    isLoadingAccessStatusDownloadRinex,
  ]);

  return {
    layerStations,
    layerGroupRTK,
    layerGroupRINEX,
    layerStationsForFly,
    stationsAsDictionary,
    stations: baseStations ?? [],
    isCanUseBaseStations,
  };
};

import React from "react";

import * as geojson from "geojson";
import { useBaseCommonStations } from "hooks/use-base-common-stations";
import { useProfileData } from "hooks/use-profile-data";
import { IBaseStationEchoCommonDTO, IDictionaryDTO } from "interfaces";
import * as L from "leaflet";

import { CardBaseCommonStation } from "../components/card-base-common-station";
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

interface IUseLayerBaseСommonStationsReturn {
  layerStations: any | null;
  layerGroupRTK: L.LayerGroup | null;
  layerGroupRINEX: L.LayerGroup | null;
  layerStationsForFly: ILayerStationForFly[];
  stationsAsDictionary: IDictionaryDTO[];
  stations: IBaseStationEchoCommonDTO[];
  isCanUseBaseCommonStations: boolean;
}

export const useLayerBaseCommonStations =
  (): IUseLayerBaseСommonStationsReturn => {
    const { isAuthorized, isLoadingAuthData, isPotentialRole } =
      useProfileData();

    const isCanUseBaseCommonStations: boolean =
      !isLoadingAuthData &&
      (!isAuthorized || (isAuthorized && isPotentialRole));

    const { data: baseCommonStations, isLoading: isLoadingBaseCommonStations } =
      useBaseCommonStations({
        enabled: isCanUseBaseCommonStations,
      });

    const [stationsAsDictionary, setStationAsDictionary] = React.useState<
      IDictionaryDTO[]
    >([]);

    const [stationsGeoJSON, setStationsGeoJSON] =
      React.useState<geojson.FeatureCollection<
        any,
        IBaseStationEchoCommonDTO
      > | null>(null);
    const [layerStations, setLayerStations] = React.useState<any | null>(null);
    const [layerGroupRTK, setLayerGroupRTK] =
      React.useState<L.LayerGroup | null>(null);
    const [layerGroupRINEX, setLayerGroupRINEX] =
      React.useState<L.LayerGroup | null>(null);
    const [layerStationsForFly, setLayerStationsForFly] = React.useState<
      ILayerStationForFly[]
    >([]);

    // NOTE: Формирование данных BaseStations
    React.useEffect(() => {
      if (
        !isLoadingAuthData &&
        isCanUseBaseCommonStations &&
        !isLoadingBaseCommonStations
      ) {
        const stationsData: IBaseStationEchoCommonDTO[] =
          baseCommonStations ?? [];

        setStationsGeoJSON({
          type: "FeatureCollection",
          features:
            stationsData?.map((station: IBaseStationEchoCommonDTO) => ({
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
            .map((stationData: IBaseStationEchoCommonDTO) => {
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
      isLoadingAuthData,
      isAuthorized,
      isCanUseBaseCommonStations,
      isLoadingBaseCommonStations,
      baseCommonStations,
    ]);

    // NOTE: Добавление станций на карту
    React.useEffect(() => {
      if (stationsGeoJSON) {
        const rtkCirles: L.Circle[] = [];
        const rinexCirles: L.Circle[] = [];
        const _stationsWithLayers: ILayerStationForFly[] = [];

        const _layerWithStations = new L.GeoJSON(stationsGeoJSON, {
          onEachFeature: (
            feature: geojson.Feature<
              geojson.GeometryObject,
              IBaseStationEchoCommonDTO
            >,
            layer: any
          ) => {
            const latlng: L.LatLng = layer._latlng;

            const popup = CardBaseCommonStation({
              properties: feature.properties,
            });

            layer
              .bindPopup(popup, { minWidth: 324 })
              .on("click", function (event: any) {
                event.target.openPopup();
              })
              .setIcon(stationIcon);

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
    }, [stationsGeoJSON, isAuthorized]);

    return {
      layerStations,
      layerGroupRTK,
      layerGroupRINEX,
      layerStationsForFly,
      stationsAsDictionary,
      stations: baseCommonStations ?? [],
      isCanUseBaseCommonStations,
    };
  };

import React from "react";

import * as L from "leaflet";
import HeatmapOverlay from "leaflet-heatmap";

interface IHeatmapData {
  lat: number;
  lng: number;
  count: number;
}

interface IUseVRSCoverageProps {
  theMap: L.Map | null;
  stationData: any[];
  isShowCoverage: boolean;
}

const EARTH_RADIUS = 6372795; // метр
const VRS_DISTANCE_BETWEEN_STATIONS = 100000; // метр

const NUMBER_OF_ADDITIONAL_POINTS_FOR_STATION = 10;
const NUMBER_OF_ADDITIONAL_POINTS_BETWEEN_STATIONS = 6;
const DISTANCE_FROM_STATION_FOR_ADDITIONAL_POINTS = 12000; // метр
const INTENSITY_HEAT_MAP_STATION_POINT = 50;
const INTENSITY_HEAT_MAP_STATION_ADDITIONAL_POINTS = 50;
const RADIUS_OF_POINT_FOR_HEAT_MAP = 30; // км

const configHeatMap = {
  radius: RADIUS_OF_POINT_FOR_HEAT_MAP / 100,
  maxOpacity: 0.5,
  scaleRadius: true,
  useLocalExtrema: true,
  gradient: {
    ".5": "#a63aa4",
    ".8": "#A86EA7",
    ".95": "#A86EA7",
  },
  latField: "lat",
  lngField: "lng",
  valueField: "count",
};

const calculateDistance = (coord1: number[], coord2: number[]): number => {
  let result = 0;

  const [_lat1, _long1] = coord1;
  const [_lat2, _long2] = coord2;

  const lat1 = (_lat1 * Math.PI) / 180;
  const long1 = (_long1 * Math.PI) / 180;

  const lat2 = (_lat2 * Math.PI) / 180;
  const long2 = (_long2 * Math.PI) / 180;

  const lat1cos = Math.cos(lat1);
  const lat2cos = Math.cos(lat2);
  const lat1sin = Math.sin(lat1);
  const lat2sin = Math.sin(lat2);
  const delta = long2 - long1;
  const delta_cos = Math.cos(delta);
  const delta_sin = Math.sin(delta);

  const y = Math.sqrt(
    Math.pow(lat2cos * delta_sin, 2) +
      Math.pow(lat1cos * lat2sin - lat1sin * lat2cos * delta_cos, 2)
  );

  const x = lat1sin * lat2sin + lat1cos * lat2cos * delta_cos;

  const d = Math.atan2(y, x);

  result = d * EARTH_RADIUS;

  return Math.round(result);
};

export const useVRSCoverage = (props: IUseVRSCoverageProps) => {
  const { theMap, stationData, isShowCoverage } = props;
  const heatMapLayerRef = React.useRef<any | null>(null);
  const [heatMapData, setHeatMapData] = React.useState<IHeatmapData[]>([]);

  React.useEffect(() => {
    if (theMap && heatMapLayerRef.current) {
      const mapConfig = {
        min: 0,
        max: 100,
        data: heatMapData,
      };

      if (isShowCoverage) {
        heatMapLayerRef.current.setData(mapConfig);
      } else {
        heatMapLayerRef.current.setData({ ...mapConfig, data: [] });
      }

      heatMapLayerRef.current.addTo(theMap);
    }
  }, [heatMapData, isShowCoverage, theMap]);

  React.useEffect(() => {
    if (theMap && stationData?.length) {
      const heatMapElements: IHeatmapData[] = [];
      const latLngStations: Set<string> = new Set([]);
      const additionalSegments: Set<string> = new Set([]);
      const allStationsInVRS: { [key: string]: string[] } = {};

      // NOTE: Формирование станций которые входят в диапозон работы VRS
      stationData.forEach((station) => {
        const lat1: number = station.coordinateLatitude;
        const lng1: number = station.coordinateLongitude;
        const latLngStation1: number[] = [lat1, lng1];
        const latLngStation1String: string = latLngStation1.join("|");

        // Получение координат всех станций которые подключаются к станции latLngStation1
        const latLngStationsWithVRS: string[] = [];

        for (let i = 0; i <= stationData.length - 1; i++) {
          const lat2: number = stationData[i].coordinateLatitude;
          const lng2: number = stationData[i].coordinateLongitude;
          const latLngStation2: number[] = [lat2, lng2];
          const latLngStation2String: string = latLngStation2.join("|");

          if (!(lat1 === lat2 && lng1 === lng2)) {
            const distance: number = calculateDistance(
              latLngStation1,
              latLngStation2
            );

            if (distance <= VRS_DISTANCE_BETWEEN_STATIONS) {
              latLngStationsWithVRS.push(latLngStation2String);
            }
          }
        }

        allStationsInVRS[latLngStation1String] = latLngStationsWithVRS;
      });

      const allStationVRSArray: Array<[string, string[]]> =
        Object.entries(allStationsInVRS);

      const allStationVRSFilteredArray: [string, string[]][] =
        allStationVRSArray.filter(
          ([latLng, latLngArray]) => latLngArray?.length >= 2
        );

      const stationsInVRSArray: Array<[string, string[]]> =
        allStationVRSArray.filter(
          ([latLngString, latLngArray]) => latLngArray?.length === 1
        );

      const allStationVRSModifiedDataArray: [string, string[]][] =
        allStationVRSFilteredArray
          .map((data: [string, string[]]) => {
            const [latLngString, latLngArray] = data;
            let filteredLatLngArray: [string, string[]] = data;

            stationsInVRSArray.forEach(
              ([latLngStationKey, latLngStationsArray]) => {
                const latLngStationKeyString: string = latLngStationsArray[0];

                if (latLngStationKeyString === latLngString) {
                  filteredLatLngArray[1] = latLngArray.filter(
                    (latLng: string) => latLng !== latLngStationKey
                  );
                }
              }
            );

            return filteredLatLngArray;
          })
          .filter(([latLng, latLngArray]) => latLngArray?.length >= 2);

      const latLngStationsInVRS: string[] = allStationVRSModifiedDataArray.map(
        ([latLngStation]) => latLngStation
      );

      // NOTE: Алгоритм нахождения отрезков между станций которые могут работать в VRS сети
      latLngStationsInVRS.forEach((latLngStationString: string) => {
        const latLngStation1String = latLngStationString;
        const [lat1String, lng1String] = latLngStationString.split("|");
        const lat1: number = Number(lat1String);
        const lng1: number = Number(lng1String);
        const latLngStation1 = [lat1, lng1];

        for (let i = 0; i <= latLngStationsInVRS.length - 1; i++) {
          const latLngStation2String = latLngStationsInVRS[i];
          const [lat2String, lng2String] = latLngStation2String.split("|");
          const lat2 = Number(lat2String);
          const lng2 = Number(lng2String);
          const latLngStation2 = [lat2, lng2];

          if (!(lat1 === lat2 && lng1 === lng2)) {
            const distance = calculateDistance(latLngStation1, latLngStation2);

            if (distance <= VRS_DISTANCE_BETWEEN_STATIONS) {
              latLngStations.add(latLngStation1String);
              latLngStations.add(latLngStation2String);

              const segment = `${latLngStation1String}&${latLngStation2String}`;
              const segmentRevers = `${latLngStation2String}&${latLngStation1String}`;

              if (
                !additionalSegments.has(segment) &&
                !additionalSegments.has(segmentRevers)
              ) {
                additionalSegments.add(segment);
              }
            }
          }
        }
      });

      // NOTE: Построение дополнительных точек между станциями для улучшения отображения покртия VRS
      [...additionalSegments].forEach((segment) => {
        const [latLngStation1String, latLngStation2String] = segment.split("&");
        const [lat1String, lng1String] = latLngStation1String.split("|");
        const [lat2String, lng2String] = latLngStation2String.split("|");

        const lat1: number = Number(lat1String);
        const lng1: number = Number(lng1String);
        const lat2: number = Number(lat2String);
        const lng2: number = Number(lng2String);

        const dx = (lat2 - lat1) / NUMBER_OF_ADDITIONAL_POINTS_BETWEEN_STATIONS;
        const dy = (lng2 - lng1) / NUMBER_OF_ADDITIONAL_POINTS_BETWEEN_STATIONS;

        for (
          let i = 0;
          i <= NUMBER_OF_ADDITIONAL_POINTS_BETWEEN_STATIONS;
          i++
        ) {
          const _lat = lat1 + i * dx;
          const _long = lng1 + i * dy;

          heatMapElements.push({
            lat: _lat,
            lng: _long,
            count: 100,
          });
        }
      });

      // NOTE: Формирование дополнительных точек вокруг станций для тепловой карты
      latLngStations.forEach((latLngStation: string) => {
        const [latString, lngString] = latLngStation.split("|");
        const lat = Number(latString);
        const lng = Number(lngString);

        for (let i = 0; i <= NUMBER_OF_ADDITIONAL_POINTS_FOR_STATION; i++) {
          const angle =
            (Math.PI * 2 * i) / NUMBER_OF_ADDITIONAL_POINTS_FOR_STATION;
          const dx =
            DISTANCE_FROM_STATION_FOR_ADDITIONAL_POINTS * Math.cos(angle);
          const dy =
            DISTANCE_FROM_STATION_FOR_ADDITIONAL_POINTS * Math.sin(angle);

          const x0: number = lat;
          const y0: number = lng;

          const x = x0 + (180 / Math.PI) * (dy / EARTH_RADIUS);
          const y =
            y0 +
            ((180 / Math.PI) * (dx / EARTH_RADIUS)) /
              Math.cos((x0 * Math.PI) / 180);

          heatMapElements.push({
            lat: x,
            lng: y,
            count: INTENSITY_HEAT_MAP_STATION_ADDITIONAL_POINTS,
          });
        }

        heatMapElements.push({
          lat: lat,
          lng: lng,
          count: INTENSITY_HEAT_MAP_STATION_POINT,
        });
      });

      setHeatMapData(heatMapElements);

      const heatMapLayer = new HeatmapOverlay(configHeatMap);
      heatMapLayerRef.current = heatMapLayer;
    }
  }, [theMap, stationData]);
};

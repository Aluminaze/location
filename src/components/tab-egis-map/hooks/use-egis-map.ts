import { CUSTOM_EGIS_EVENT_NAME } from "constants/keys";
import { PATH_RINEX_INFO } from "constants/routes";

import React from "react";

import { useHistory } from "react-router";

import { IDictionaryDTO } from "interfaces";
import * as L from "leaflet";

import { MenuOptionType, OperatorCoverage, WMS_URL } from "../constants";

import { ILayerStationForFly } from "./../interfaces";
import { useCreateMap } from "./use-create-map";
import { useFlyToStation } from "./use-fly-to-station";
import { useLayerBaseCommonStations } from "./use-layer-base-common-stations";
import { useLayerBaseStations } from "./use-layer-base-stations";
import { useLayerPlannedStations } from "./use-layer-planned-stations";
import { useVRSCoverage } from "./use-vrs-coverage";

// NOTE:
// Параметры сервиса WFS - для получения списка станций (GeoJSON)
// const WFS_URL = `https://api-demo.egis.mts.ru/geoserver/wfs?authKey=${AUTH_KEY}`;

export interface IUseEgisMapProps {
  mapIndeficator: string;
  poiType: MenuOptionType;
  coverageOperator: MenuOptionType;
  selectedStation: IDictionaryDTO | null;
  isShowPlannedStations: boolean;
}

export const useEgisMap = (props: IUseEgisMapProps) => {
  const {
    mapIndeficator,
    poiType,
    coverageOperator,
    selectedStation,
    isShowPlannedStations,
  } = props;
  const history = useHistory();

  const [layerStationsForFly, setLayerStationsForFly] = React.useState<
    ILayerStationForFly[]
  >([]);

  // NOTE: Создание карты
  const { theMap } = useCreateMap({ mapIndeficator });

  const baseStationsData = useLayerBaseStations();
  const isCanUseBaseStations: boolean = baseStationsData.isCanUseBaseStations;

  const baseCommonStationsData = useLayerBaseCommonStations();
  const isCanUseBaseCommonStations: boolean =
    baseCommonStationsData.isCanUseBaseCommonStations;

  const {
    layerPlannedStations,
    layerGroupRINEXPlannedStations,
    layerGroupRTKPlannedStations,
  } = useLayerPlannedStations();

  useFlyToStation({
    theMap,
    layerStationsForFly,
    selectedStation,
  });

  useVRSCoverage({
    theMap,
    stationData: isCanUseBaseStations
      ? baseStationsData.stations
      : baseCommonStationsData.stations,
    isShowCoverage: poiType === MenuOptionType.VRS,
  });

  // NOTE: Реализация редиректа по клику на кнопку
  React.useEffect(() => {
    function eventFire(e: any) {
      history.push(`${PATH_RINEX_INFO}/${e?.detail}`);
    }

    const elem = document.getElementById(mapIndeficator);
    elem?.addEventListener(CUSTOM_EGIS_EVENT_NAME, eventFire);

    return () => {
      elem?.removeEventListener(CUSTOM_EGIS_EVENT_NAME, eventFire);
    };
  }, [history, mapIndeficator]);

  // NOTE: Добавление станций на карту
  React.useEffect(() => {
    if (theMap) {
      if (isCanUseBaseStations && baseStationsData.layerStations) {
        baseStationsData.layerStations.addTo(theMap);
      }
      if (isCanUseBaseCommonStations && baseCommonStationsData.layerStations) {
        baseCommonStationsData.layerStations.addTo(theMap);
      }
    }
  }, [
    baseCommonStationsData.layerStations,
    baseStationsData.layerStations,
    isCanUseBaseCommonStations,
    isCanUseBaseStations,
    theMap,
  ]);

  // NOTE: Добавление планируемых станций на карту
  React.useEffect(() => {
    if (theMap && layerPlannedStations) {
      if (isShowPlannedStations) {
        layerPlannedStations.addTo(theMap);
        if (poiType === MenuOptionType.RTK) {
          layerGroupRINEXPlannedStations?.remove();
          layerGroupRTKPlannedStations?.addTo(theMap);
        }
        if (poiType === MenuOptionType.RINEX) {
          layerGroupRTKPlannedStations?.remove();
          layerGroupRINEXPlannedStations?.addTo(theMap);
        }
      } else {
        layerPlannedStations.remove();
        layerGroupRTKPlannedStations?.remove();
        layerGroupRINEXPlannedStations?.remove();
      }
    }
  }, [
    isShowPlannedStations,
    layerGroupRINEXPlannedStations,
    layerGroupRTKPlannedStations,
    layerPlannedStations,
    poiType,
    theMap,
  ]);

  // NOTE: Отображение RTK или RINEX на карте
  React.useEffect(() => {
    let layerGroupRTKStations: L.LayerGroup | null = null;
    let layerGroupRINEXStations: L.LayerGroup | null = null;

    if (theMap) {
      if (isCanUseBaseStations) {
        layerGroupRTKStations = baseStationsData.layerGroupRTK;
        layerGroupRINEXStations = baseStationsData.layerGroupRINEX;
      } else if (isCanUseBaseCommonStations) {
        layerGroupRTKStations = baseCommonStationsData.layerGroupRTK;
        layerGroupRINEXStations = baseCommonStationsData.layerGroupRINEX;
      }

      if (layerGroupRTKStations && layerGroupRINEXStations) {
        switch (poiType) {
          case MenuOptionType.RTK:
            layerGroupRTKStations && layerGroupRTKStations.addTo(theMap); // NOTE: добавить RTK
            break;
          case MenuOptionType.RINEX:
            layerGroupRINEXStations && layerGroupRINEXStations.addTo(theMap); // NOTE: добавить RINEX
            break;
          default:
        }

        return () => {
          layerGroupRTKStations && layerGroupRTKStations.removeFrom(theMap); // NOTE: убрать RTK
          layerGroupRINEXStations && layerGroupRINEXStations.removeFrom(theMap); // NOTE: убрать RINEX
        };
      }
    }
  }, [
    baseCommonStationsData.layerGroupRINEX,
    baseCommonStationsData.layerGroupRTK,
    baseStationsData.layerGroupRINEX,
    baseStationsData.layerGroupRTK,
    isCanUseBaseCommonStations,
    isCanUseBaseStations,
    poiType,
    theMap,
  ]);

  // NOTE: Обработка данных для хука useFlyToStation
  React.useEffect(() => {
    let _layerStationsForFly: ILayerStationForFly[] = [];

    if (isCanUseBaseStations) {
      _layerStationsForFly = baseStationsData.layerStationsForFly;
    } else if (isCanUseBaseCommonStations) {
      _layerStationsForFly = baseCommonStationsData.layerStationsForFly;
    }

    setLayerStationsForFly(_layerStationsForFly);

    return () => {
      setLayerStationsForFly([]);
    };
  }, [
    baseCommonStationsData.layerStationsForFly,
    baseStationsData.layerStationsForFly,
    isCanUseBaseCommonStations,
    isCanUseBaseStations,
  ]);

  // NOTE: Отображение сотовых покрытий на карте
  React.useEffect(() => {
    let layerCoverage: any;

    switch (coverageOperator) {
      case MenuOptionType.MTS:
        layerCoverage = L.tileLayer.wms(WMS_URL, OperatorCoverage.mts_3g);
        layerCoverage.addTo(theMap);
        break;
      case MenuOptionType.BEELINE:
        layerCoverage = L.tileLayer.wms(WMS_URL, OperatorCoverage.beeline_3g);
        layerCoverage.addTo(theMap);
        break;
      case MenuOptionType.MEGAFON:
        layerCoverage = L.tileLayer.wms(WMS_URL, OperatorCoverage.megafon_3g);
        layerCoverage.addTo(theMap);
        break;
      case MenuOptionType.TELE2:
        layerCoverage = L.tileLayer.wms(WMS_URL, OperatorCoverage.tele2_3g);
        layerCoverage.addTo(theMap);
        break;
      default:
    }

    return () => {
      layerCoverage && layerCoverage.removeFrom(theMap);
    };
  }, [coverageOperator, theMap]);
};

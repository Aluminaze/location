import { EGIS_SERVICE_URL, IS_DEVELOPMENT_MODE } from "constants/server";

export const INITIAL_MAP_PARAMS = {
  // NOTE: Начальные координаты центра карты
  center: {
    lat: 53.15,
    lng: 45.48,
  },
  // NOTE: Начальный зум карты
  zoom: 5,
  // NOTE: Зум при переходе на станцию
  zoomStation: 8,
};

// RINEX STATION PARAMS
export const CIRCLE_PARAM_STATION_RINEX = {
  color: "rgb(38, 205, 88)",
  stroke: true,
  weight: 1,
  fillColor: "rgb(38, 205, 88)",
  fillOpacity: 0.3,
  radius: 100000,
};
export const CIRCLE_PARAM_PLANNED_STATION_RINEX = {
  color: "#969FA8",
  stroke: true,
  weight: 0.5,
  fillColor: "rgba(150, 159, 168, 1)",
  fillOpacity: 0.3,
  radius: 100000,
};

// RTK STATION PARAMS
export const CIRCLE_PARAM_STATION_RTK = {
  color: "#6384E0",
  stroke: true,
  weight: 0.5,
  fillColor: "rgb(99, 132, 224)",
  fillOpacity: 0.3,
  radius: 35000,
};
export const CIRCLE_PARAM_PLANNED_STATION_RTK = {
  color: "#969FA8",
  stroke: true,
  weight: 0.5,
  fillColor: "rgba(150, 159, 168, 1)",
  fillOpacity: 0.3,
  radius: 35000,
};

export enum MenuOptionType {
  RTK = "RTK",
  RINEX = "RINEX",
  VRS = "VRS-сеть",
  PLANNED_STATIONS = "Планируемые референсные станции",
  MTS = "МТС",
  BEELINE = "Билайн",
  MEGAFON = "Мегафон",
  TELE2 = "Теле2",
  NONE = "Покрытие сотовых сетей",
}

export const STATION_ICON_SIZE = 31;
export const MAP_LAYERS_NAME = "substrate:map";
export const EGIS_AUTH_KEY = process.env.REACT_APP_EGIS_AUTH_KEY ?? "";
// Параметры сервиса WMS
export const WMS_URL = IS_DEVELOPMENT_MODE
  ? `https://api.egis.mts.ru/geoserver/wms?authKey=${EGIS_AUTH_KEY}`
  : `${EGIS_SERVICE_URL}/map`;

// NOTE: Сотовые покрытия
// Слои покрытия доступны по ключу,
// Название слоев:
// workspace-egis:asset_coverage_2g
// workspace-egis:asset_coverage_3g
// workspace-egis:asset_coverage_4g
// workspace-geoplatform:coverage_beeline_2g
// workspace-geoplatform:coverage_beeline_3g
// workspace-geoplatform:coverage_beeline_4g
// workspace-geoplatform:coverage_megafon_2g
// workspace-geoplatform:coverage_megafon_3g
// workspace-geoplatform:coverage_megafon_4g
// workspace-geoplatform:coverage_tele2_2g
// workspace-geoplatform:coverage_tele2_3g
// workspace-geoplatform:coverage_tele2_4g
export const OperatorCoverage = {
  mts_3g: {
    tiled: true,
    transparent: true,
    layers: "egis:asset_coverage_3g",
    format: "image/png8",
  },
  beeline_3g: {
    tiled: true,
    transparent: true,
    layers: "egis:coverage_beeline_3g",
    format: "image/png8",
  },
  megafon_3g: {
    tiled: true,
    transparent: true,
    layers: "egis:coverage_megafon_3g",
    format: "image/png8",
  },
  tele2_3g: {
    tiled: true,
    transparent: true,
    layers: "egis:coverage_tele2_3g",
    format: "image/png8",
  },
};

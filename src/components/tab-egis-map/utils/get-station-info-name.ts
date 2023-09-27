interface IGetStationInfoNameProps {
  area: string | undefined;
  city: string | undefined;
  mountPoint: string | undefined;
}

export const getStationInfoName = ({
  area,
  city,
  mountPoint,
}: IGetStationInfoNameProps): string => {
  let stationInfoName = area ?? "";

  if (stationInfoName) {
    if (city) {
      stationInfoName = stationInfoName + `, ${city}`;
    }
    if (mountPoint) {
      stationInfoName = stationInfoName + `, ${mountPoint}`;
    }
  }

  return stationInfoName;
};

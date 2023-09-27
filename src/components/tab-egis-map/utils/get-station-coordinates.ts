const getConcatCoordinate = (inputCoordinate: number | undefined): string => {
  let coordinate: string = "";

  if (typeof inputCoordinate === "number") {
    const [firstPart, secondPart]: string[] =
      String(inputCoordinate).split(".");

    if (firstPart?.length) {
      if (secondPart?.length) {
        if (secondPart.length < 4) {
          coordinate = `${firstPart}.${secondPart.padEnd(4, "0")}`;
        } else if (secondPart.length > 4) {
          coordinate = `${firstPart}.${secondPart.slice(0, 4)}`;
        } else if (secondPart.length === 4) {
          coordinate = `${firstPart}.${secondPart}`;
        }
      } else {
        coordinate = `${firstPart}.0000`;
      }
    }
  }

  return coordinate;
};

export const getStationCoordinates = ({
  lat,
  lng,
}: {
  lat: number | undefined;
  lng: number | undefined;
}): string => {
  let coordinates: string = "";
  let coordinateLat: string = getConcatCoordinate(lat);
  let coordinateLng: string = getConcatCoordinate(lng);

  if (coordinateLat && coordinateLng) {
    coordinates = `${coordinateLat}, ${coordinateLng}`;
  }

  return coordinates;
};

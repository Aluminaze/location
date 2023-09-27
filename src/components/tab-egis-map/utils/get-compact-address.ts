export const getCompactAddress = (props: {
  city: string;
  areaDisctrict: string;
  area: string;
}): string => {
  const { city, areaDisctrict, area } = props;
  let resultAddress: string = "";

  if (city) {
    resultAddress = city;
  } else {
    if (areaDisctrict) {
      resultAddress = areaDisctrict;
    } else {
      resultAddress = area;
    }
  }

  return resultAddress;
};

import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IBaseStationEchoCommonDTO } from "interfaces";
import ReactDOMServer from "react-dom/server";
import { theme } from "theme";

import round24IconOffLine from "../../icons/round-24-offline.svg";
import round24Icon from "../../icons/round-24.svg";
import { getStationCoordinates } from "../../utils/get-station-coordinates";

import "../../index.css";

interface ICardBaseCommonStationProps {
  properties: IBaseStationEchoCommonDTO;
}

export const CardBaseCommonStation = (props: ICardBaseCommonStationProps) => {
  const { properties } = props;

  const stationMountpoint = properties?.mountPoint ?? "";
  const isStationOnline: boolean = properties?.conditionNetwork === "1";
  const formattedAddress: string = properties?.address?.formatted_address ?? "";
  const receiverName: string = properties?.receiveType ?? "";
  const stationCoordinates: string = getStationCoordinates({
    lat: properties?.coordinateLatitude,
    lng: properties?.coordinateLongitude,
  });
  const antenna: string = properties?.antenna ?? "";
  const address: string = properties?.address?.area ?? "";

  return ReactDOMServer.renderToString(
    <ThemeProvider theme={theme}>
      <div className={"egis-custom-popup-header"}>
        <Typography variant="p3_bold_comp" data-testid="txt_area_base_common">
          {address}
        </Typography>
      </div>

      <div className={"egis-custom-popup-info"}>
        <div className={"egis-custom-popup-info__status"}>
          <img
            alt="Иконка не загрузилась"
            src={isStationOnline ? round24Icon : round24IconOffLine}
          />
          <Typography
            variant="p4_regular_comp"
            data-testid="txt_status_base_common"
          >
            {isStationOnline ? "В сети" : "Не в сети"}
          </Typography>
        </div>

        <div className={"egis-custom-popup-info__location"}>
          <Typography
            variant="p4_regular_comp"
            data-testid="txt_area_address_base_common"
          >
            {formattedAddress}
          </Typography>
        </div>

        <div className="egis-custom-popup-info__list">
          <div
            className={"egis-custom-popup-info__list__item"}
            data-testid="txt_coord_base_common"
          >
            <Typography variant="p4_medium_comp">Координаты:</Typography>
            <Typography variant="p4_regular_comp">
              {stationCoordinates}
            </Typography>
          </div>
          <div
            className={"egis-custom-popup-info__list__item"}
            data-testid="txt_st_id_base_common"
          >
            <Typography variant="p4_medium_comp">ID станции:</Typography>
            <Typography variant="p4_regular_comp">
              {stationMountpoint}
            </Typography>
          </div>
          <div
            className={"egis-custom-popup-info__list__item"}
            data-testid="txt_receiver_type_base_common"
          >
            <Typography variant="p4_medium_comp">Тип приёмника:</Typography>
            <Typography variant="p4_regular_comp">{receiverName}</Typography>
          </div>
          <div
            className={"egis-custom-popup-info__list__item"}
            data-testid="txt_antenna_base_common"
          >
            <Typography variant="p4_medium_comp">Антенна:</Typography>
            <Typography variant="p4_regular_comp">{antenna}</Typography>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

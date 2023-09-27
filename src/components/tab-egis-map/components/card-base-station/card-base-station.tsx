import { EGIS_MAP_ID, CUSTOM_EGIS_EVENT_NAME } from "constants/keys";

import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IBaseStationEchoDTO } from "interfaces";
import ReactDOMServer from "react-dom/server";
import { theme } from "theme";

import round24IconOffLine from "../../icons/round-24-offline.svg";
import round24Icon from "../../icons/round-24.svg";
import { getStationCoordinates } from "../../utils/get-station-coordinates";

import "../../index.css";

interface ICardBaseStationProps {
  properties: IBaseStationEchoDTO;
  isShowDownloadButton: boolean;
  isCanDownloadRinex: boolean;
}

export const CardBaseStation = (props: ICardBaseStationProps) => {
  const { properties, isShowDownloadButton, isCanDownloadRinex } = props;

  const stationName: string = properties?.name ?? "";
  const stationMountpoint = properties?.mountPoint ?? "";
  const isStationOnline: boolean = properties?.conditionNetwork === "1";
  const formattedAddress: string = properties?.address?.formatted_address ?? "";
  const receiverName: string = properties?.receiveType ?? "";
  const stationCoordinates: string = getStationCoordinates({
    lat: properties?.coordinateLatitude,
    lng: properties?.coordinateLongitude,
  });
  const antenna: string = properties?.antenna ?? "";
  const ip: string = properties?.connectionIp ?? "";
  const port: string | number = properties?.connectionPort ?? "";
  const address: string = properties?.address?.area ?? "";
  const isPartnerStation: boolean = properties?.partner ?? "";
  const isDisabledDownloadButton: boolean =
    isPartnerStation || isCanDownloadRinex === false;

  const buttonForDownloadRinexFile: string = isShowDownloadButton
    ? `<button data-testid="btn_rinex_upload_base" class="egis-custom-popup-button"
    ${isDisabledDownloadButton ? "disabled" : ""}
    onclick="
    function a(){
    const event = new CustomEvent('${CUSTOM_EGIS_EVENT_NAME}', { detail: '${stationName}' });
    const elem = document.getElementById('${EGIS_MAP_ID}');
    elem.dispatchEvent(event);
    };
    a();"
    >
Загрузить файл RINEX
</button>`
    : "";

  return (
    ReactDOMServer.renderToString(
      <ThemeProvider theme={theme}>
        <div className={"egis-custom-popup-header"}>
          <Typography variant="p3_bold_comp" data-testid="txt_area_base">
            {address}
          </Typography>
        </div>

        <div className={"egis-custom-popup-info"}>
          <div className={"egis-custom-popup-info__status"}>
            <img
              alt="Иконка не загрузилась"
              src={isStationOnline ? round24Icon : round24IconOffLine}
            />
            <Typography variant="p4_regular_comp" data-testid="txt_status_base">
              {isStationOnline ? "В сети" : "Не в сети"}
            </Typography>
          </div>

          <div className={"egis-custom-popup-info__location"}>
            <Typography
              variant="p4_regular_comp"
              data-testid="txt_area_address_base"
            >
              {formattedAddress}
            </Typography>
          </div>

          <div className="egis-custom-popup-info__list">
            <div
              className={"egis-custom-popup-info__list__item"}
              data-testid="txt_coord_base"
            >
              <Typography variant="p4_medium_comp">Координаты:</Typography>
              <Typography variant="p4_regular_comp">
                {stationCoordinates}
              </Typography>
            </div>
            <div
              className={"egis-custom-popup-info__list__item"}
              data-testid="txt_st_id_base"
            >
              <Typography variant="p4_medium_comp">ID станции:</Typography>
              <Typography variant="p4_regular_comp">
                {stationMountpoint}
              </Typography>
            </div>
            <div
              className={"egis-custom-popup-info__list__item"}
              data-testid="txt_receiver_type_base"
            >
              <Typography variant="p4_medium_comp">Тип приёмника:</Typography>
              <Typography variant="p4_regular_comp">{receiverName}</Typography>
            </div>
            <div
              className={"egis-custom-popup-info__list__item"}
              data-testid="txt_antenna_base"
            >
              <Typography variant="p4_medium_comp">Антенна:</Typography>
              <Typography variant="p4_regular_comp">{antenna}</Typography>
            </div>
            {ip && port ? (
              <div
                className={"egis-custom-popup-info__list__item"}
                data-testid="txt_connection_data_base"
              >
                <Typography variant="p4_medium_comp">
                  Для подключения:
                </Typography>
                <Typography variant="p4_regular_comp">
                  {ip}:{port}
                </Typography>
              </div>
            ) : null}
          </div>
        </div>
      </ThemeProvider>
    ) +
    buttonForDownloadRinexFile +
    ReactDOMServer.renderToString(
      isShowDownloadButton ? (
        <ThemeProvider theme={theme}>
          {isPartnerStation ? (
            <div className="egis-custom-popup-msg">
              <Typography
                variant="c1_regular_comp"
                align="center"
                data-testid="txt_access_info_base"
              >
                На этой станции отсутствует функциональность загрузки файлов
                RINEX.
                <br />
                Пожалуйста, выберите другую станцию.
              </Typography>
            </div>
          ) : (
            <>
              {isCanDownloadRinex === false && (
                <div className="egis-custom-popup-msg">
                  <Typography
                    variant="c1_regular_comp"
                    align="center"
                    data-testid="txt_access_base"
                  >
                    Активируйте подписку для доступа к RINEX
                  </Typography>
                </div>
              )}
            </>
          )}
        </ThemeProvider>
      ) : (
        <></>
      )
    )
  );
};

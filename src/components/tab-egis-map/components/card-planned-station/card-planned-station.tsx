import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IPlannedBaseStationEchoDTO } from "interfaces";
import ReactDOMServer from "react-dom/server";
import { theme } from "theme";
import { getDateFormatted } from "utils/get-date-formatted";

import "../../index.css";
import { getCompactAddress } from "../../utils/get-compact-address";

export const CardPlannedStation = (properties: IPlannedBaseStationEchoDTO) => {
  const { address, plannedDate } = properties;
  const formattedAddress: string = address?.formatted_address ?? "-";
  const city: string = address?.city ?? "";
  const areaDisctrict: string = address?.area_district ?? "";
  const area: string = address?.area ?? "-";
  const { date } = getDateFormatted(plannedDate);

  return ReactDOMServer.renderToString(
    <ThemeProvider theme={theme}>
      <div className={"egis-custom-popup-header"}>
        <Typography variant="p3_bold_comp" data-testid="txt_header_planned">
          Планируемая станция
        </Typography>
      </div>
      <div className={"egis-custom-popup-info"}>
        <Typography variant="p4_bold_comp" data-testid="txt_locality_planned">
          {getCompactAddress({ city, areaDisctrict, area })}
        </Typography>
        <Typography
          variant="p4_regular_comp"
          data-testid="txt_locality_address_planned"
        >
          {formattedAddress}
        </Typography>
        <Typography variant="p4_regular_comp" data-testid="txt_date_planned">
          Планируемая дата включения {date} г.
        </Typography>
      </div>
    </ThemeProvider>
  );
};

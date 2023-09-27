import {
  FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT,
  FOOTER_MOBILE_PERSONAL_AREA_HEIGHT,
} from "../../constants/sizes";

import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(192,128,128,.1)",
  },
  container: {
    width: "100%",
    height: FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("md")]: {
      height: FOOTER_MOBILE_PERSONAL_AREA_HEIGHT,
    },
  },
}));

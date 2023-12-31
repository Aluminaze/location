import {
  HEADER_DESKTOP_HEIGHT,
  FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT,
  FOOTER_MOBILE_PERSONAL_AREA_HEIGHT,
  MOBILE_BAR_HEIGHT,
} from "../../constants/sizes";
import { makeStyles } from "tss-react/mui";

const PANEL_SHIFT_TOP = 16;
const PANEL_SHIFT_LEFT = 8;
const PANEL_SHIFT_BOTTOM = 16;

export const useStyles = makeStyles()((theme) => ({
  blockMap: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: `calc(var(--vh, 1vh) * 100 - ${HEADER_DESKTOP_HEIGHT}px - ${FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT}px)`,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,.1)",

    [theme.breakpoints.down("lg")]: {
      height: `calc(var(--vh, 1vh) * 100 - ${HEADER_DESKTOP_HEIGHT}px - ${MOBILE_BAR_HEIGHT}px - ${FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT}px)`,
    },
    [theme.breakpoints.down("md")]: {
      height: `calc(var(--vh, 1vh) * 100 - ${HEADER_DESKTOP_HEIGHT}px - ${MOBILE_BAR_HEIGHT}px - ${FOOTER_MOBILE_PERSONAL_AREA_HEIGHT}px)`,
    },
  },
  panel: {
    width: "328px",
    height: "auto",
    position: "absolute",
    top: PANEL_SHIFT_TOP,
    left: PANEL_SHIFT_LEFT,
    zIndex: 1000,
    overflow: "hidden",
    padding: "24px 5px 24px 24px",
    backgroundColor: "green",
    boxShadow:
      "0px 0px 16px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
    display: "flex",
  },
  panelWrapper: {
    width: "100%",
    maxHeight: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px - ${FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT}px - ${PANEL_SHIFT_TOP}px - ${PANEL_SHIFT_BOTTOM}px - 48px)`,
    overflowY: "auto",

    [theme.breakpoints.down("lg")]: {
      maxHeight: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px - ${FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT}px - ${MOBILE_BAR_HEIGHT}px - ${PANEL_SHIFT_TOP}px - ${PANEL_SHIFT_BOTTOM}px - 48px)`,
    },
    [theme.breakpoints.down("md")]: {
      maxHeight: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px - ${FOOTER_MOBILE_PERSONAL_AREA_HEIGHT}px - ${MOBILE_BAR_HEIGHT}px - ${PANEL_SHIFT_TOP}px - ${PANEL_SHIFT_BOTTOM}px - 48px)`,
    },
  },
  map: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  mapContainer: {
    display: "block",
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    minHeight: "100%",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    display: "flex",
    width: "100%",

    [theme.breakpoints.down("lg")]: {
      bottom: MOBILE_BAR_HEIGHT,
    },
  },
}));

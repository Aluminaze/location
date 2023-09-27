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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
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
  },
  map: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT,
    display: "block",
    overflow: "hidden",
  },
  mapContainer: {
    display: "block",
    width: "100%",
    height: "100%",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    display: "flex",
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    panelWrapper: {
      maxHeight: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px - ${FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT}px - ${MOBILE_BAR_HEIGHT}px - ${PANEL_SHIFT_TOP}px - ${PANEL_SHIFT_BOTTOM}px - 48px)`,
    },
    map: {
      bottom: MOBILE_BAR_HEIGHT + FOOTER_DESKTOP_PERSONAL_AREA_HEIGHT,
    },
    footer: {
      paddingBottom: MOBILE_BAR_HEIGHT,
    },
  },
  [theme.breakpoints.down("md")]: {
    panelWrapper: {
      maxHeight: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px - ${FOOTER_MOBILE_PERSONAL_AREA_HEIGHT}px - ${MOBILE_BAR_HEIGHT}px - ${PANEL_SHIFT_TOP}px - ${PANEL_SHIFT_BOTTOM}px - 48px)`,
    },
    map: {
      bottom: MOBILE_BAR_HEIGHT + FOOTER_MOBILE_PERSONAL_AREA_HEIGHT,
    },
  },
}));

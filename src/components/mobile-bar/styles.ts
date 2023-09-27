import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  blockMobileBar: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    overflowX: "hidden",
    height: "56px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(107,174,74,.1)",
    padding: "0 12px",
    zIndex: 1100,
    transform: "translateY(0px)",
    boxShadow: "inset 0px 0.2px 0px rgba(0, 0, 0, 0.25)",
  },
  blockMobileBarShow: {
    transform: "translateY(56px)",
  },
  links: {
    width: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    marginLeft: "16px",
    overflowX: "auto",
    gap: "8px",
    "-ms-overflow-style": "none", // for Internet Explorer, Edge
    "scrollbar-width": "none", // for Firefox
    "&::-webkit-scrollbar": {
      display: "none", // for Chrome, Safari and Opera
    },
  },
}));

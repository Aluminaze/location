import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "52px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    boxShadow: "0px 0px 6px rgba(110, 119, 130, 0.14)",
    zIndex: 1100,
  },
  headerContent: {
    position: "relative",
    width: "1440px",
    height: "100%",
    padding: "0 88px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "28px",

    [theme.breakpoints.down("lg")]: {
      padding: "0 40px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 20px",
    },
  },
  headerContentInfo: {
    display: "flex",
    flexGrow: 1,
  },
  headerContentInfoLogo: {
    display: "flex",
    alignSelf: "center",
  },
  headerContentAuth: {
    display: "flex",
    gap: "16px",
  },
}));

import { Theme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  blockContent: {
    display: "flex",
    flexDirection: "column",
    width: "1440px",
    height: "auto",
    padding: "0 88px",
  },
  [theme.breakpoints.down("xl")]: {
    blockContent: {
      width: "100%",
      padding: "0 56px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    blockContent: {
      padding: "0 40px",
    },
  },
  [theme.breakpoints.down("md")]: {
    blockContent: {
      padding: "0 20px",
    },
  },
}));

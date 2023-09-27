import { Theme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  blockWide: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

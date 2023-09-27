import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    position: "absolute",
    top: 16,
    left: 12,
    display: "block",
    zIndex: 1000,
  },
}));

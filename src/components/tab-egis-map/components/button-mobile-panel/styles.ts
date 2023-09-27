import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  btn: {
    position: "absolute",
    top: 16,
    left: 12,
    display: "block",
    zIndex: 1000,
  },
}));

import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingRight: "19px",
    backgroundColor: "red",
  },
}));

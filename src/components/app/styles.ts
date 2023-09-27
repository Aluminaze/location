import { makeStyles } from "tss-react/mui";
import { HEADER_DESKTOP_HEIGHT } from "../../constants/sizes";

export const useStyles = makeStyles()((theme) => {
  return {
    app: {
      position: "relative",
      width: "100%",
      maxWidth: "100%",
      minWidth: "100%",
      backgroundColor: "gray",
      overflowX: "hidden",
    },
    main: {
      width: "100%",
      height: "100%",
      minHeight: `calc(100vh - ${HEADER_DESKTOP_HEIGHT}px)`,
      marginTop: `${HEADER_DESKTOP_HEIGHT}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

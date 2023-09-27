import { makeStyles } from "tss-react/mui";
import { HEADER_DESKTOP_HEIGHT } from "../../constants/sizes";

export const useStyles = makeStyles()((theme) => {
  return {
    app: {
      position: "relative",
      width: "100vw",
      maxWidth: "100vw",
      minWidth: "100vw",
      backgroundColor: "white",
      overflowX: "hidden",
    },
    main: {
      width: "100%",
      minHeight: `calc(100vh - ${HEADER_DESKTOP_HEIGHT})px`,
      marginTop: `${HEADER_DESKTOP_HEIGHT}px`,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
  };
});

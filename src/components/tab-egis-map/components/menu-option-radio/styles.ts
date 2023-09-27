import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  option: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  },
  optionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  // NOTE: Radio button styles
  size_S_16: {
    width: 16,
    height: 16,
    "&:before": {
      width: 6,
      height: 6,
    },
  },
  size_M_24: {
    width: 24,
    height: 24,
    "&:before": {
      width: 10,
      height: 10,
    },
  },
  size_L_32: {
    width: 32,
    height: 32,
    "&:before": {
      width: 14,
      height: 14,
    },
  },
  icon: {
    borderRadius: "50%",
    border: "2px solid",
    borderColor: theme.mtsColor.controls.inactive.lightMode,
    backgroundColor: theme.mtsColor.controls.alternative.lightMode,
    transition: ".3s all ease-out",

    "input:hover ~ &": {
      backgroundColor: theme.mtsColor.background.hover.lightMode,
    },
    "input:disabled ~ &": {
      background: theme.mtsColor.background.hover.lightMode,
    },
  },
  checkedIcon: {
    backgroundColor: theme.mtsColor.controls.primaryActive.lightMode,
    borderColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&:before": {
      borderRadius: "50%",
      backgroundColor: theme.mtsColor.controls.alternative.lightMode,
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: theme.mtsColor.controls.primaryActive.lightMode,
    },
    "input:disabled ~ &": {
      background: theme.mtsColor.background.hover.lightMode,
    },
  },
  radio: {
    "&.Mui-checked": {
      color: "transparent !important",
    },
  },
}));

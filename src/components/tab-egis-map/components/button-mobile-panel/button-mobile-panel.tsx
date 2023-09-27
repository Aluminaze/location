import React from "react";

import { useAppTheme } from "hooks/use-app-theme";

import { useStyles } from "./styles";

interface IButtonMobilePanelProps {
  onClick: () => void;
}

export const ButtonMobilePanel = (
  props: IButtonMobilePanelProps
): JSX.Element => {
  const { onClick } = props;
  const classes = useStyles();
  const theme = useAppTheme();

  return <div className={classes.btn}>PANEL</div>;
};

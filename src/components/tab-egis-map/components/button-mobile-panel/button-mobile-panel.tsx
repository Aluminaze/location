import React from "react";

import { useStyles } from "./styles";

interface IButtonMobilePanelProps {
  onClick: () => void;
}

export const ButtonMobilePanel = (
  props: IButtonMobilePanelProps
): JSX.Element => {
  const { onClick } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.btn}>
      PANEL
      <button onClick={onClick}>BTN</button>
    </div>
  );
};

import React from "react";

import { useStyles } from "./styles";

export const Header = (): JSX.Element => {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <div className={classes.headerContentInfo}>
          <div className={classes.headerContentInfoLogo}>LOCATION PRO</div>
        </div>
      </div>
    </header>
  );
};

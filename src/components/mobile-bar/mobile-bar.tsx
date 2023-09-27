import React from "react";

import classNames from "classnames";

import { useStyles } from "./styles";

export const MobileBar = (): JSX.Element => {
  const { classes } = useStyles();
  const blockMobileBarStyles = classNames({
    [classes.blockMobileBar]: true,
    [classes.blockMobileBarShow]: false,
  });

  return <div className={blockMobileBarStyles}></div>;
};

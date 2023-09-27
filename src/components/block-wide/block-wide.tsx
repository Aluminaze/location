import React from "react";

import { useStyles } from "./styles";

interface IBlockWideProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

export const BlockWide = (props: IBlockWideProps): JSX.Element => {
  const { children, sx } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.blockWide} style={sx}>
      {children}
    </div>
  );
};

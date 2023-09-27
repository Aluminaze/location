import React from "react";

import { useStyles } from "./styles";

interface IBlockContentProps {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}

export const BlockContent = (props: IBlockContentProps): JSX.Element => {
  const { children, sx } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.blockContent} style={sx}>
      {children}
    </div>
  );
};

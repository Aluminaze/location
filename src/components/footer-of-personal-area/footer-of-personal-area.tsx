import React from "react";

import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import { BlockContent } from "../block-content";
import { BlockWide } from "../block-wide";

export const FooterOfPersonalArea = () => {
  const { classes } = useStyles();
  const [currentYear] = React.useState<number>(new Date().getFullYear());

  return (
    <footer className={classes.footer}>
      <BlockWide>
        <BlockContent>
          <div className={classes.container}>
            <Typography
              data-testid="txt_pao"
              sx={{
                color: "red",
              }}
            >
              © {currentYear} ПАО «МТС». 18+
            </Typography>
          </div>
        </BlockContent>
      </BlockWide>
    </footer>
  );
};

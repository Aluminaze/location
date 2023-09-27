import React from "react";

import { ButtonMobilePanel } from "./components/button-mobile-panel";
import { useStyles } from "./styles";
import "./index.css";
import { useDisplayStatus } from "../../hooks/use-display-status";
import { FooterOfPersonalArea } from "../footer-of-personal-area";

export const TabEgisMap = (): JSX.Element => {
  const { classes } = useStyles();

  const { isMobileVersion } = useDisplayStatus();

  const [isOpenMobilePanel, setIsOpenMobilePanel] =
    React.useState<boolean>(false);
  const [isMountedMobilePanel, setIsMountedMobilePanel] =
    React.useState<boolean>(false);

  console.log("🚀 ~ isMountedMobilePanel:", isMountedMobilePanel);

  const handleCloseDialogMobilePanel = (): void => {
    setIsOpenMobilePanel(false);
    setTimeout(() => {
      setIsMountedMobilePanel(false);
    }, 500);
  };

  const handleToggleDialogMobilePanel = (): void => {
    if (isOpenMobilePanel) {
      handleCloseDialogMobilePanel();
    } else {
      setIsMountedMobilePanel(true);
      setIsOpenMobilePanel(true);
    }
  };

  return (
    <>
      <div className={classes.blockMap}>
        {isMobileVersion ? (
          <ButtonMobilePanel onClick={() => handleToggleDialogMobilePanel()} />
        ) : (
          <div className={classes.panel}>
            <div className={classes.panelWrapper}>PANEL BLOCK</div>
          </div>
        )}

        <div className={classes.map}>
          <div className={classes.mapContainer} />
        </div>
        <div className={classes.footer}>
          <FooterOfPersonalArea />
        </div>
      </div>
    </>
  );
};

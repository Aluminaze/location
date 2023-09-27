import { EGIS_MAP_ID } from "constants/keys";

import React from "react";

import { FooterOfPersonalArea } from "components/footer-of-personal-area";
import { useContextMap } from "hooks/use-context-map";
import { useDisplayStatus } from "hooks/use-display-status";

import { ButtonMobilePanel } from "./components/button-mobile-panel";
import { Panel } from "./components/panel";
import { useEgisMap } from "./hooks/use-egis-map";
import { useStyles } from "./styles";
import "./index.css";
import "leaflet/dist/leaflet.css";

export const TabEgisMap = (): JSX.Element => {
  const classes = useStyles();
  const { searchValue, menuOption, coverageOperator, isShowPlannedStations } =
    useContextMap();
  const { isMobileVersion } = useDisplayStatus();
  useEgisMap({
    mapIndeficator: EGIS_MAP_ID,
    poiType: menuOption,
    coverageOperator,
    selectedStation: searchValue,
    isShowPlannedStations,
  });

  const [isOpenMobilePanel, setIsOpenMobilePanel] =
    React.useState<boolean>(false);
  const [isMountedMobilePanel, setIsMountedMobilePanel] =
    React.useState<boolean>(false);

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

  React.useEffect(() => {
    if (searchValue) {
      handleCloseDialogMobilePanel();
    }
  }, [searchValue]);

  return (
    <>
      <div className={classes.blockMap}>
        {isMobileVersion ? (
          <ButtonMobilePanel onClick={() => handleToggleDialogMobilePanel()} />
        ) : (
          <div className={classes.panel}>
            <div className={classes.panelWrapper}>
              <Panel />
            </div>
          </div>
        )}

        <div className={classes.map}>
          <div className={classes.mapContainer} id={EGIS_MAP_ID} />
        </div>
        <div className={classes.footer}>
          <FooterOfPersonalArea />
        </div>
      </div>
    </>
  );
};

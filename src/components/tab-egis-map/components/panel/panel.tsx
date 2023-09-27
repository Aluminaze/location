import React from "react";

import { Collapse } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContextMap } from "hooks/use-context-map";
import { useProfileData } from "hooks/use-profile-data";

import { MenuOptionType } from "../../constants";
import { useLayerBaseCommonStations } from "../../hooks/use-layer-base-common-stations";
import { useLayerBaseStations } from "../../hooks/use-layer-base-stations";
import { ButtonBecomeClient } from "../button-become-client";
import { EgisSearchBox } from "../egis-search-box";
import { MenuOptionCoverage } from "../menu-option-coverage";
import { MenuOptionPlan } from "../menu-option-plan";
import { MenuOptionRadio } from "../menu-option-radio";

import { useStyles } from "./styles";

export const Panel = (): JSX.Element => {
  const classes = useStyles();
  const {
    setSearchValue,
    searchOptions,
    setSearchOptions,
    menuOption,
    setMenuOption,
    coverageOperator,
    setCoverageOperator,
    isDisableCoverage,
    setIsDisableCoverage,
    isShowPlannedStations,
    setIsShowPlannedStations,
    isDisabledPlannedStations,
    setIsDisabledPlannedStations,
    isDisabledVRS,
    setIsDisabledVRS,
  } = useContextMap();
  const { isAuthorized, isLoadingAuthData } = useProfileData();

  const baseStationsData = useLayerBaseStations();
  const baseCommonStationsData = useLayerBaseCommonStations();

  React.useEffect(() => {
    if (isShowPlannedStations) {
      setIsDisabledVRS(true);
    } else {
      setIsDisabledVRS(false);
    }

    if (menuOption === MenuOptionType.VRS) {
      setIsDisabledPlannedStations(true);
    } else {
      setIsDisabledPlannedStations(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOption, isShowPlannedStations]);

  React.useEffect(() => {
    if (baseStationsData.isCanUseBaseStations) {
      setSearchOptions(baseStationsData.stationsAsDictionary);
    } else if (baseCommonStationsData.isCanUseBaseCommonStations) {
      setSearchOptions(baseCommonStationsData.stationsAsDictionary);
    }

    return () => {
      setSearchOptions([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    baseCommonStationsData.isCanUseBaseCommonStations,
    baseCommonStationsData.stationsAsDictionary,
    baseStationsData.isCanUseBaseStations,
    baseStationsData.stationsAsDictionary,
  ]);

  return <div className={classes.card}></div>;
};

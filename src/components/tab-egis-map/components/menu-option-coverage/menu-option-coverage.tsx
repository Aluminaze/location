import { FIELD_NAMES } from "constants/keys";

import React from "react";

import { useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import { useAppTheme } from "hooks/use-app-theme";

import { MenuOptionType } from "../../constants";
import { CellTowerIcon } from "../cell-tower-icon";

import { useStyles } from "./styles";

interface IMenuOptionCoverageProps {
  menuType: MenuOptionType;
  disabled?: boolean;
  selectedMenuOption: MenuOptionType;
  setSelectedMenuOption: (v: MenuOptionType) => void;
  isDisableCoverage: boolean;
  setIsDisableCoverage: React.Dispatch<React.SetStateAction<boolean>>;
  dataTestIdLabel?: string;
  dataTestIdSwitch?: string;
}

export const MenuOptionCoverage = React.memo(
  (props: IMenuOptionCoverageProps): JSX.Element => {
    const {
      menuType,
      disabled = false,
      selectedMenuOption,
      setSelectedMenuOption,
      isDisableCoverage,
      setIsDisableCoverage,
      dataTestIdLabel = "",
      dataTestIdSwitch = "",
    } = props;
    const classes = useStyles();
    const theme = useAppTheme();

    const { control, setValue, watch } = useForm({
      defaultValues: {
        [FIELD_NAMES.MAP_MENU_COVERAGE_OFF]: false,
      },
    });

    const toggleMenuOptionType = (): void => {
      isDisableCoverage
        ? setSelectedMenuOption(MenuOptionType.MTS)
        : setSelectedMenuOption(MenuOptionType.NONE);
    };

    React.useEffect(() => {
      if (selectedMenuOption !== MenuOptionType.NONE) {
        setValue(FIELD_NAMES.MAP_MENU_COVERAGE_OFF, true);
      } else {
        setValue(FIELD_NAMES.MAP_MENU_COVERAGE_OFF, false);
      }
    }, [selectedMenuOption, setValue]);

    React.useEffect(() => {
      const subscription = watch((value) => {
        if (value[FIELD_NAMES.MAP_MENU_COVERAGE_OFF] === false) {
          setSelectedMenuOption(MenuOptionType.NONE);
          setIsDisableCoverage(true);
        } else {
          setIsDisableCoverage(false);
        }
      });

      return () => subscription.unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch]);

    return (
      <div className={classes.option}>
        <div className={classes.option__title}>
          <CellTowerIcon
            sx={{
              fontSize: 32,
              color: isDisableCoverage
                ? theme.mtsColor.greyscale.grey200
                : theme.mtsColor.blueberry.normal,
            }}
          />
          <Typography
            data-testid={dataTestIdLabel || ""}
            variant="p4_regular_comp"
            align="left"
          >
            {menuType}
          </Typography>
        </div>
      </div>
    );
  }
);

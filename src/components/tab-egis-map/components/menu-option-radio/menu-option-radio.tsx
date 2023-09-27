import React from "react";

import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import classNames from "classnames";
import { useAppTheme } from "hooks/use-app-theme";

import { MenuOptionType } from "../../constants";
import { MTSIconSvg } from "../mts-icon-svg";

import { useStyles } from "./styles";

export enum RadioSize {
  S_16 = "S_16",
  M_24 = "M_24",
  L_32 = "L_32",
}

interface IMenuOptionRadioProps {
  menuType: MenuOptionType;
  disabled?: boolean;
  selectedMenuOption: MenuOptionType;
  setSelectedMenuOption: (v: MenuOptionType) => void;
  dataTestIdIcon?: string;
  dataTestIdLabel?: string;
  dataTestIdRadio?: string;
}

export const MenuOptionRadio = React.memo(
  (props: IMenuOptionRadioProps): JSX.Element | null => {
    const {
      menuType,
      disabled = false,
      selectedMenuOption,
      setSelectedMenuOption,
      dataTestIdIcon = "",
      dataTestIdLabel = "",
      dataTestIdRadio = "",
    } = props;
    const classes = useStyles();
    const theme = useAppTheme();

    const size: any = RadioSize.S_16;
    const iconStyles = classNames({
      [classes.icon]: true,
      [classes.size_S_16]: size === RadioSize.S_16,
      [classes.size_M_24]: size === RadioSize.M_24,
      [classes.size_L_32]: size === RadioSize.L_32,
    });

    const checkedIconStyles = classNames({
      [classes.icon]: true,
      [classes.size_S_16]: size === RadioSize.S_16,
      [classes.size_M_24]: size === RadioSize.M_24,
      [classes.size_L_32]: size === RadioSize.L_32,
      [classes.checkedIcon]: true,
    });

    return null;
  }
);

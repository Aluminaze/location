import { FIELD_NAMES } from "constants/keys";

import React from "react";

import { useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import { useAppTheme } from "hooks/use-app-theme";

import { MenuOptionType } from "../../constants";

import { useStyles } from "./styles";

interface IMenuOptionPlanProps {
  menuType: MenuOptionType;
  disabled?: boolean;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  dataTestIdIcon?: string;
  dataTestIdLabel?: string;
  dataTestIdSwitch?: string;
}

export const MenuOptionPlan = React.memo(
  (props: IMenuOptionPlanProps): JSX.Element => {
    const {
      disabled = false,
      isShow,
      setIsShow,
      menuType,
      dataTestIdIcon = "",
      dataTestIdLabel = "",
      dataTestIdSwitch = "",
    } = props;
    const classes = useStyles();
    const theme = useAppTheme();

    const { control, watch, setValue } = useForm({
      defaultValues: {
        [FIELD_NAMES.MAP_MENU_PLAN]: isShow,
      },
    });

    React.useEffect(() => {
      setValue(FIELD_NAMES.MAP_MENU_PLAN, isShow);
    }, [isShow, setValue]);

    React.useEffect(() => {
      const subscription = watch((value) => {
        if (value[FIELD_NAMES.MAP_MENU_PLAN] === true) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
      });

      return () => subscription.unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch]);

    return (
      <div className={classes.option}>
        <div className={classes.optionTitle}>
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

import { Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useDisplayStatus = () => {
  const isMobileVersion: boolean = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  return {
    isMobileVersion,
  };
};

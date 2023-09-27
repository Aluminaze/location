import React from "react";

import { useStyles } from "./styles";
import { useDisplayStatus } from "../../hooks/use-display-status";
import { Header } from "../header";
import { MobileBar } from "../mobile-bar";
import { TabEgisMap } from "../tab-egis-map";

export function App() {
  const { classes } = useStyles();
  const { isMobileVersion } = useDisplayStatus();

  return (
    <div className={classes.app}>
      <Header />

      <main className={classes.main}>
        <TabEgisMap />
      </main>

      {isMobileVersion && <MobileBar />}
    </div>
  );
}

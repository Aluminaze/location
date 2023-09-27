import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

// import { MobileBar } from "components/mobile-bar";
// import { Landing } from "components/pages/landing";
// import { Map } from "components/pages/map";

import { useStyles } from "./styles";
import { useDisplayStatus } from "../../hooks/use-display-status";
import { Header } from "../header";
import { MobileBar } from "../mobile-bar";

export function App() {
  const { classes } = useStyles();
  const { isMobileVersion } = useDisplayStatus();

  return (
    <div className={classes.app}>
      <Header />

      <main className={classes.main}></main>

      {isMobileVersion && <MobileBar />}
    </div>
  );
}

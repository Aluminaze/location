import React from "react";

import { useStyles } from "./styles";
import { useDisplayStatus } from "../../hooks/use-display-status";
import { Header } from "../header";
import { MobileBar } from "../mobile-bar";
import { TabEgisMap } from "../tab-egis-map";

export function App() {
  const { classes } = useStyles();
  const { isMobileVersion } = useDisplayStatus();

  React.useEffect(() => {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

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

import { PATH_TARIFFS } from "constants/routes";

import React from "react";

import { useHistory } from "react-router";

export const ButtonBecomeClient = (): JSX.Element => {
  const history = useHistory();

  const handleRedirectBecomeClient = (): void => {
    history.push(PATH_TARIFFS);
  };

  return <button onClick={handleRedirectBecomeClient}>Стать клиентом</button>;
};

import React from "react";

import { useHistory } from "react-router";

export const ButtonBecomeClient = (): JSX.Element => {
  const history = useHistory();

  const handleRedirectBecomeClient = (): void => {};

  return <button onClick={handleRedirectBecomeClient}>Стать клиентом</button>;
};

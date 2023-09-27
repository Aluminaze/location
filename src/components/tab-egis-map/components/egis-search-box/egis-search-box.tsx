import React from "react";

import { Controller, useForm, useWatch } from "react-hook-form";

import { IDictionaryDTO } from "interfaces";

const _fieldNames = {
  search: "search",
};

interface IEgisSearchBoxProps {
  options: IDictionaryDTO[];
  setSearchValue: (value: any) => void;
}

export const EgisSearchBox = (props: IEgisSearchBoxProps): JSX.Element => {
  const { options, setSearchValue } = props;
  const { control } = useForm({
    defaultValues: {
      [_fieldNames.search]: null,
    },
  });

  const searchValue = useWatch({
    control: control,
    name: _fieldNames.search,
  });

  React.useEffect(() => {
    if (typeof searchValue === "object") {
      setSearchValue(searchValue);
    } else {
      setSearchValue(null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <form
      style={{ width: "100%" }}
      autoComplete="off"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
      }}
    ></form>
  );
};
